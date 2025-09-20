# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Политика версионирования
| Тип коммита | Что значит                                     | Версия                    |
| ----------- | ---------------------------------------------- | ------------------------- |
| `feat:`     | новая фича                                     | **minor** (0.1.0 → 0.2.0) |
| `fix:`      | багфикс                                        | **patch** (0.1.0 → 0.1.1) |
| `perf:`     | оптимизация кода, улучшение производительности | **patch**                 |
| `docs:`     | изменения только в документации                | (не влияет)               |
| `style:`    | правки форматирования, пробелы, запятые        | (не влияет)               |
| `refactor:` | рефакторинг без изменения функционала          | (не влияет)               |
| `test:`     | добавлены/обновлены тесты                      | (не влияет)               |
| `chore:`    | обслуживающие задачи (сборка, deps и тд)       | (не влияет)               |
| `ci:`       | изменения CI/CD                                | (не влияет)               |

Если нужно поднять major версию (1.0.0 → 2.0.0):
```plain
git commit -m "feat(auth): добавил JWT токены
BREAKING CHANGE: полностью переписана система авторизации"
```

Скопить область (scope) — удобно, но необязательно:
```plain
feat(ui): добавил новую кнопку
fix(api): исправил обработку ошибок
```


# ai-interviewer-frontend
