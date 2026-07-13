# CLAUDE.md — @planometrica/ui

Shared UI библиотека (design tokens, иконки, 48 shadcn/ui компонентов, Tailwind preset) для всех продуктов Планометрики: Studio, PlanoCAD, Landing. Библиотека, не приложение. Полная документация пакета — `README.md`.

## MONO
- **Проект:** Планометрика (`d0424711-702e-4f20-b804-46367411ac52`)
- **Ключ:** PLM

## Команды

```bash
npm run build      # tsup + копирование CSS/SVG в dist/
npm run dev        # watch mode
npm run lint       # ESLint 9 flat config
npm run typecheck  # tsc --noEmit
```

## Gotchas

- **`dist/` закоммичен** (для установки как git-зависимость). Любое изменение `src/` → `npm run build` → коммитить `dist/` вместе с `src/`. Забытый rebuild = потребители получают старый код при свежем `src`.
- **Ветка — `master`**, не `main`.
- **Новый публичный API** обязан быть ре-экспортирован из `src/index.ts` (иконки — из `src/icons/index.ts`).
- **Иконки** — только Lucide через централизованный реестр `src/icons/index.ts`; доменные алиасы (`WindowIcon`, `DoorIcon`, …) меняются в одной точке.
- **`.pen` файлы** (дизайн-исходники) — зашифрованные документы Pencil: открывать только Pencil-редактором / Pencil MCP, не Read/Grep.
- **Дизайн/полиграфия** (`Fonts/`, `images/`, `export-rvf/`, `*.tiff`, рендеры) — локальные, в git не попадают (см. `.gitignore`). Логотипы-исходники и `.pen` — трекаются.
