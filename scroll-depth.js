/* read-through tracker — guide/article pages only.
   Fires scroll-depth milestones (25/50/75/100%) ONCE per page load into:
     • Yandex.Metrika: reachGoal scroll_N, plus at 75% reachGoal read75 («дочитал»)
       and notBounce — the pair that fixes the single-page «время на странице = 0»
       / bounce problem.
     • GA4 (only when the brand configures a GA4 stream): scroll_depth event with
       percent_scrolled + content_group.
   The Metrika counter id is NOT hardcoded: it rides in on the injecting tag as
   data-ym (build-seo.mjs writes brand.analytics.metrika there). A hardcoded id
   silently misses when the brand's counter changes — calls to a counter that was
   never init'ed on the page are swallowed by Metrika, so the whole read-through
   measurement dies without a single error. No id → the Metrika branch is a no-op.
   content_group (article|guide) comes from <body data-content-group>.
   No bundler — plain browser JS. Guarded so it is a no-op during prerender
   (Playwright snapshot has no ym/gtag and this script is injected post-snapshot). */
(function () {
  if (typeof window === "undefined" || !window.document) return;
  if (window.__gfScrollBound) return; // survive a React re-mount on the same doc
  window.__gfScrollBound = true;

  // currentScript is the tag being executed (valid for a classic defer script);
  // the querySelector fallback covers a dynamically inserted/async copy, where
  // currentScript is null.
  function counterId() {
    var tag = document.currentScript;
    var raw = tag && tag.getAttribute ? tag.getAttribute("data-ym") : null;
    if (!raw) {
      var found = document.querySelector("script[data-ym]");
      raw = found ? found.getAttribute("data-ym") : null;
    }
    if (!raw || !/^\d+$/.test(raw)) return 0;
    return parseInt(raw, 10);
  }

  var YM = counterId();
  var marks = [25, 50, 75, 100];
  var fired = {};
  var cg =
    (document.body && document.body.dataset && document.body.dataset.contentGroup) || "";

  // tell GA4 the content group (article vs guide) for events on this page
  try {
    if (typeof window.gtag === "function" && cg) window.gtag("set", { content_group: cg });
  } catch (e) {}

  function pct() {
    var d = document.documentElement;
    var b = document.body || {};
    var top = window.pageYOffset || d.scrollTop || b.scrollTop || 0;
    var docH = Math.max(d.scrollHeight, b.scrollHeight || 0, d.offsetHeight, b.offsetHeight || 0);
    var winH = window.innerHeight || d.clientHeight || 0;
    // read DEPTH = how far down the page the BOTTOM of the viewport has reached
    // (GA4-style, not scrollbar progress). Short page (docH<=winH) → 100%.
    if (docH <= winH) return 100;
    return Math.min(100, Math.round(((top + winH) / docH) * 100));
  }

  function check() {
    var p = pct();
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (p >= m && !fired[m]) {
        fired[m] = true;
        try {
          if (YM && typeof window.ym === "function") {
            window.ym(YM, "reachGoal", "scroll_" + m);
            if (m === 75) {
              window.ym(YM, "reachGoal", "read75");
              window.ym(YM, "notBounce");
            }
          }
        } catch (e) {}
        try {
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_depth", {
              percent_scrolled: m,
              page_path: location.pathname,
              content_group: cg || undefined,
            });
          }
        } catch (e) {}
      }
    }
  }

  var t = null;
  function onScroll() {
    if (t) return;
    t = setTimeout(function () {
      t = null;
      check();
    }, 150);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  // initial pass: short pages may already be at 100% on load
  if (document.readyState === "interactive" || document.readyState === "complete") check();
  else document.addEventListener("DOMContentLoaded", check);
})();

/* outbound-click tracker — same pages, same counter (read from data-ym).
   Fires ONCE per click into Yandex.Metrika:
     • blog_bot_click    — a link into the Telegram bot (t.me/izhmukov777_bot)
     • blog_tarify_click — a link to the pricing page or to any funnel landing
   Goals 612273915 / 612273916 on counter 110633946, created 2026-09-12.
   Delegated on document so it also covers links rendered after load. */
(function () {
  if (typeof window === "undefined" || !window.document) return;
  if (window.__gfOutboundBound) return;
  window.__gfOutboundBound = true;

  function counterId() {
    var tag =
      document.currentScript ||
      document.querySelector('script[src*="scroll-depth.js"][data-ym]');
    var id = tag && tag.getAttribute ? tag.getAttribute("data-ym") : null;
    return id ? Number(id) : 0;
  }
  var YM = counterId();

  function goalFor(href) {
    if (!href) return null;
    if (/izhmukov777_bot|t\.me\//i.test(href)) return "blog_bot_click";
    if (/\/tarify\/|\/reels-chatgpt\/|\/nabor-start\/|\/guide-/i.test(href))
      return "blog_tarify_click";
    return null;
  }

  document.addEventListener(
    "click",
    function (e) {
      try {
        var el = e.target;
        if (!el || !el.closest) return;
        var a = el.closest("a[href]");
        if (!a) return;
        var goal = goalFor(a.getAttribute("href") || a.href || "");
        if (!goal) return;
        if (typeof window.ym === "function" && YM) window.ym(YM, "reachGoal", goal);
        if (typeof window.gtag === "function")
          window.gtag("event", goal, { page_path: location.pathname });
      } catch (err) {}
    },
    true
  );
})();
