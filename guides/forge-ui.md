# Forge UI: быстрый Stable Diffusion WebUI с Flux

_Владимир Ижмуков · автор системы роста Instagram через короткие ролики_

Forge UI, или Stable Diffusion WebUI Forge, это ускоренная версия интерфейса AUTOMATIC1111 от автора ControlNet и Fooocus. Он быстрее, бережнее к видеопамяти и умеет Flux. Оригинальный Forge не обновляется с 26 июня 2025 года. Развивается его форк Forge Neo, релиз 2.31 вышел 21 октября 2026 года. Оба бесплатны и работают на твоём компьютере.

## Что такое Forge

Forge сделал разработчик lllyasviel. Название взято по аналогии с Minecraft Forge: это платформа поверх Stable Diffusion WebUI. Forge построен на коде AUTOMATIC1111 версии 1.10.1, поэтому интерфейс почти тот же, и большинство расширений совместимы.

Forge Neo это форк от разработчика Haoming02. Он продолжает последнюю версию Forge и добавляет свежие модели, релизы выходят раз в одну-две недели.

### Forge или Forge Neo

| Что сравниваем | Forge | Forge Neo |
|---|---|---|
| Обновления | заморожен с 26.06.2025 | релиз 2.31 от 21.10.2026. |
| Flux | NF4 и GGUF | Flux Kontext и Flux.2-Klein. |
| Новые модели | нет | Qwen-Image, Z-Image, Chroma, Lumina. |
| Видео | нет | Wan 2.2 14B. |
| SD3 и NF4 | есть | удалены. |
| Установка | один архив | git clone и Python 3.13. |

Для новых моделей в 2026 году бери Neo. Оригинальный Forge есть смысл держать, только если у тебя под него собраны рабочие сценарии.

## Что умеет Forge

- **Скорость.** Работает быстрее AUTOMATIC1111 и экономнее по памяти.
- **Flux.** Форматы NF4 и GGUF, ползунок GPU Weight, [LoRA](/guides/lora-neyroset/) для Flux.
- **Пресеты в Neo.** Сохраняют модель и все параметры.
- **Ускорители в Neo.** SageAttention, FlashAttention, Radial Attention для Wan 2.2.
- **Расширения.** Большая часть расширений AUTOMATIC1111 работает.

ControlNet для Flux в оригинальном Forge так и не сделали.

## Как скачать и установить Forge

### Оригинальный Forge одним архивом

1. Открой [репозиторий Forge на GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge).
2. Скачай архив webui_forge_cu121_torch231.7z, это рекомендованная сборка с CUDA 12.1.
3. Распакуй его, внутри уже есть git и Python.
4. Запусти update.bat, затем run.bat.

Есть сборка с CUDA 12.4 и PyTorch 2.4. Авторы пишут, что она быстрее, но с ней может сломаться MSVC и не работать xformers.

### Forge Neo

1. Скачай ветку neo из [репозитория Forge Neo](https://github.com/Haoming02/sd-webui-forge-classic/tree/neo) командой git clone.
2. Поставь Python 3.13, рекомендуемый способ через менеджер uv.
3. Добавь флаг uv в файл webui-user.bat.
4. Запусти webui-user.bat.

Старым видеокартам, которые не поддерживают свежий PyTorch, придётся ставить версии вручную.

## Частые ошибки в Forge

- **Flux тормозит.** Понизь GPU Weight, по словам автора это решает 99% проблем.
- **Холст не двигается.** В Gradio 4 холст двигается правой кнопкой мыши.
- **Модель Qwen Edit или Kontext не определяется.** В Neo в имени файла должны быть слова qwen и edit или kontext.
- **Пропала функция в Neo.** SD2, SD3, NF4 и обучение Textual Inversion там удалены, вопросы про них авторы не принимают.

## Forge на русском

Интерфейс на английском. Оригинальный Forge работает с русской локализацией от AUTOMATIC1111. Для Neo совместимость я не проверял.

## Работает ли Forge в России

Forge работает локально, VPN для генерации не нужен. Установка тянет файлы с GitHub, PyPI и Hugging Face, их доступность с российского адреса я не проверял.

## Минусы Forge

- Оригинал заморожен, для новых моделей нужен Neo.
- В Neo удалили часть функций, включая SD3 и NF4.
- Установка Neo сложнее, нужен Python 3.13.
- Интерфейс на английском.

## Чем заменить Forge

| Программа | Чем отличается |
|---|---|
| [AUTOMATIC1111](/guides/automatic1111/) | оригинальный интерфейс, без Flux, почти не обновляется. |
| [ComfyUI](/guides/comfyui/) | узловой интерфейс, сложнее, новые модели первыми. |
| [Fooocus](/guides/fooocus/) | проще всех, только SDXL. |
| SwarmUI | простой интерфейс поверх ComfyUI. |

Общая картина по моделям и способам запуска собрана в [обзоре Stable Diffusion](/guides/stable-diffusion/), а про модели Flux есть отдельный [обзор Flux](/guides/flux-neyroset/).

## Частые вопросы

**Forge UI что это?**
Ускоренная версия интерфейса AUTOMATIC1111 от автора ControlNet и Fooocus с поддержкой Flux.

**Как скачать Forge UI?**
Оригинал одним архивом из релизов на GitHub, Forge Neo через git clone ветки neo.

**Forge Neo что это?**
Активный форк Forge с Qwen-Image, Flux.2-Klein, Z-Image и Wan 2.2, релизы раз в одну-две недели.

**Forge или AUTOMATIC1111?**
Forge построен на коде AUTOMATIC1111, интерфейс тот же, но быстрее и с Flux.

**Работает ли Flux в Forge?**
Да. В оригинале форматы NF4 и GGUF, в Neo Flux Kontext и Flux.2-Klein, NF4 там удалён.

**Stable Diffusion WebUI Forge и Web UI Forge одно и то же?**
Да, это разные написания одного проекта.

**Forge UI Roblox это то же самое?**
Нет, это другие проекты для Roblox и Minecraft, к нейросетям они не относятся.

## Что делать дальше

Forge Neo сейчас самый удобный способ попробовать свежие модели у себя на компьютере, включая видео на Wan 2.2. Для блога это значит одно: картинки и ролики можно делать без подписок и лимитов. Остаётся главное, придумать, что показать и что сказать.

Как я пишу сценарии роликов через ChatGPT, разобрал здесь: [как вести Reels с ChatGPT и получать заявки](https://vladimir-izhmukov.ru/reels-chatgpt/?utm_source=baza&utm_medium=article&utm_campaign=forge-ui). Внутри готовые запросы для хуков.

Функции и установка сверены по [репозиторию Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge), [репозиторию Forge Neo](https://github.com/Haoming02/sd-webui-forge-classic/tree/neo) и [списку релизов Neo](https://github.com/Haoming02/sd-webui-forge-classic/releases). Проверено 29 октября 2026 года.
