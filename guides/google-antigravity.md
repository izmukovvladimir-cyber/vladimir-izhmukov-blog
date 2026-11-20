# Google Antigravity: платформа Google для разработки с ИИ-агентами

_Владимир Ижмуков · автор системы роста Instagram через короткие ролики_

Google Antigravity это платформа Google для разработки с ИИ-агентами, в которую входят приложение для управления агентами Antigravity App, отдельная Antigravity IDE и CLI: агент может править файлы, запускать сборки и тесты. Бесплатный план Individuals даёт недельную квоту, а подписки Google AI Pro и Ultra пополняют квоту каждые 5 часов в пределах недельного лимита и добавляют модели Gemini 4. Россия в официальном списке стран Antigravity отсутствует.

## Что такое Google Antigravity

Google Antigravity это набор продуктов Google для работы с ИИ-агентами в разработке. На сайте Antigravity на 19 ноября 2026 года перечислены такие части:

| Часть | Что это |
|---|---|
| Antigravity App | приложение для управления агентами: параллельные фоновые агенты, подагенты, работа с браузером, задачи по расписанию |
| Antigravity IDE | редактор кода с агентом внутри |
| Antigravity CLI | агент в терминале |
| Antigravity Extensions | расширения для редакторов кода |
| Antigravity SDK | библиотека для Python |
| Веб-приложение | кнопка «Open web app» на сайте |

Приложение Antigravity App есть для macOS, Windows и Linux. На устройствах Googlebook оно предустановлено, а через Google Play его обновляют или ставят заново.

## Что такое Antigravity 2.0

Antigravity 2.0 это настольное приложение Google для управления агентами разработки. 19 мая 2026 года Google представил настольное приложение Antigravity 2.0 и новый инструмент для терминала Antigravity CLI.

Google объявил о переходе с Gemini CLI на Antigravity CLI, подробнее о старом инструменте в статье [Gemini CLI](/guides/gemini-cli/).

## Как скачать Google Antigravity

Приложение Antigravity App скачивают на странице antigravity.google/download, там же лежат отдельная IDE и CLI. Шаги для App:

1. Откройте antigravity.google/download.
2. Выберите систему и сборку по процессору: для Windows и Linux x64 или ARM64, для macOS отдельные загрузки для Apple Silicon и для Intel.
3. Установите приложение и войдите аккаунтом Google. По FAQ, при входе рабочим аккаунтом Google Workspace действует стартовая квота, если администратор разрешил доступ. Если продолжать пользоваться тем же рабочим аккаунтом, для большего объёма нужен свой проект Google Cloud или лицензия Gemini Enterprise, а ещё FAQ предлагает перейти на личный аккаунт.

Минимальные требования к Antigravity App со страницы загрузки на 19 ноября 2026 года:

- macOS: macOS 13 Ventura и новее, Apple Silicon или Intel.
- Windows: Windows 10 64-bit и новее.
- Linux: glibc 2.28 и новее, glibcxx 3.4.25 и новее, например Ubuntu 20+, Debian 10+, Fedora 36+, RHEL 8+.

CLI на macOS и Linux ставится командой со страницы загрузки: она скачивает скрипт install.sh с antigravity.google и сразу запускает его.

## Тарифы и лимиты Antigravity

Бесплатный план Antigravity даёт недельную квоту, а в Google AI Pro и Ultra квота пополняется каждые пять часов в пределах недельного лимита. Тарифы со страницы antigravity.google/pricing на 20 ноября 2026 года:

- **Individuals**, $0 в месяц: приложение, CLI, расширения и Python SDK, базовая квота агентов с обновлением раз в неделю.
- **Google AI Pro**, по подписке: квота с обновлением каждые 5 часов и выше недельные лимиты, /boost, совместная работа агентов, Remote Control, докупка AI-кредитов сверх квоты.
- **Google AI Ultra**, по подписке: самая высокая квота с обновлением каждые 5 часов, максимальные недельные лимиты, Gemini 4 Neon и Gemini 4 Carbon, сторонние партнёрские модели.
- **Business** через Google Cloud: планы Standard и Plus от $30 за место в месяц для подходящих клиентов Gemini Enterprise или оплата по потреблению без платы за место.

В документации по планам Google не указывает фиксированное число запросов: расход квоты зависит от объёма работы агента. Подписки Pro и Ultra требуют личный аккаунт Google: с аккаунтом Google Workspace их оформить нельзя.

## Какие модели внутри

В бесплатном Antigravity есть Gemini 3.8 Flash, платный Pro добавляет Gemini 4 Neon, а Ultra также Gemini 4 Carbon. По странице тарифов и документации по моделям на 20 ноября 2026 года:

- **Individuals:** Gemini 3.8 Flash.
- **Google AI Pro (платный):** Gemini 4 Neon, Argon и Hydrogen, Orchestrator (Neon) и (Argon), Gemini 3.8 Flash, Claude Sonnet 5.5 и Opus 5.5 (thinking). На пробном Pro с подходящим устройством доступны Neon, Argon и их варианты Orchestrator, а Hydrogen отдельно и обе Claude 5.5 требуют платного Pro.
- **Google AI Ultra:** Gemini 4 Neon, Carbon, Argon и Hydrogen, Orchestrator (Neon), (Carbon) и (Argon), Gemini 3.8 Flash, Claude Sonnet 5.5 и Opus 5.5 (thinking).

Claude Sonnet 4.6, Claude Opus 4.6 и GPT-OSS-120b на 20 ноября 2026 года ещё перечислены на странице тарифов со сноской о снятии 18 ноября 2026 года; доступны ли они в аккаунте, я не проверял.

Orchestrator это вариант в выборе модели, где большая модель Gemini 4 планирует и проверяет работу, а быстрая Gemini 4 Hydrogen выполняет её: правит файлы, пишет код, запускает сборки и тесты и сверяет результат с планом. Название Orchestrator показывает, какая модель планирует: Neon, Argon или Carbon.

## Google Antigravity в России

По официальному FAQ Antigravity, аккаунт должен быть привязан к стране или территории, где сервис доступен, и России в этом списке нет. Страну аккаунта FAQ советует проверить на странице условий использования Google. Ещё одно ограничение: Antigravity недоступен людям младше 18 лет.

Пример альтернативы: открытый агент [OpenCode](/guides/opencode/), по его документации, подключается к локальным моделям через Ollama, LM Studio и vLLM. Доступность такого варианта из России я не проверял.

## Материалы о других инструментах для разработки

В блоге есть отдельные статьи про другие инструменты: [Cursor](/guides/cursor-ai/), [Claude Code](/guides/claude-code/), [Codex](/guides/codex/) и [Cline](/guides/cline/).

## Минусы Google Antigravity

- Google Antigravity официально недоступен в России.
- В документации по планам нет фиксированного числа запросов, расход квоты зависит от объёма работы агента.
- В бесплатном плане и Google AI Plus моделей Gemini 4 нет, Gemini 4 Carbon есть в Ultra и Enterprise, а Orchestrator (Carbon) только в Ultra.
- Список моделей меняется: у Claude Sonnet 4.6, Claude Opus 4.6 и GPT-OSS-120b на странице тарифов стоит сноска о снятии 18 ноября 2026 года.

## Частые вопросы

**Что такое Google Antigravity?**
Google Antigravity это платформа Google для разработки с ИИ-агентами: приложение, IDE, CLI, расширения для редакторов и Python SDK.

**Google Antigravity бесплатный?**
Есть план Individuals за $0 с недельной квотой и Gemini 3.8 Flash. Больше лимитов и модели Gemini 4 дают подписки Google AI Pro и Ultra.

**Что такое Antigravity 2.0?**
Antigravity 2.0 это настольное приложение Google для управления агентами, представленное 19 мая 2026 года вместе с новым Antigravity CLI.

**Можно ли пользоваться Google Antigravity в России?**
По официальному FAQ нет: России нет в списке стран, где доступен сервис.

**Где скачать Google Antigravity?**
На странице antigravity.google/download, там же версии для macOS, Windows и Linux и команда установки CLI.

**Что такое Orchestrator в Antigravity?**
Orchestrator это режим, где большая модель Gemini 4 планирует, а Gemini 4 Hydrogen выполняет. Доступен в Pro и Ultra.

## Что делать дальше

Мой пример первого запроса в Antigravity App: «Изучи проект и предложи план создания лендинга». По документации, у Orchestrator первая фаза планирования проходит только с чтением файлов.

Пример приёма: на такую страницу вести людей рилсами с кодовым словом, которое зритель пишет в директ.

Как я связываю ролики, кодовые слова и страницы в одну систему, разобрано здесь: [как вести Reels с ChatGPT и получать заявки](https://vladimir-izhmukov.ru/reels-chatgpt/?utm_source=baza&utm_medium=article&utm_campaign=google-antigravity).

Продукты, тарифы, модели и ограничения сверены по [сайту Antigravity](https://antigravity.google), [странице загрузки](https://antigravity.google/download), [странице тарифов](https://antigravity.google/pricing), [документации по моделям](https://antigravity.google/docs/models), [документации по планам](https://antigravity.google/docs/plans), [официальному FAQ](https://antigravity.google/docs/faq), [анонсу перехода Gemini CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), [документации OpenCode о локальных моделях](https://opencode.ai/docs/models/) и [анонсу Google I/O 2026](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/), [статье TechCrunch об Antigravity 2.0](https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool/). Проверено 20 ноября 2026 года.
