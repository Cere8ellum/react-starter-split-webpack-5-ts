# React Starter kit using TS, JS, Babel, Jest, Webpack

## About showing errors by VS Code.

Added empty dummy.ts.

1. Close all open files
2. Open dummy.ts
3. Ctrl + Shift + P -> TypeScript: Restart TS Server
4. Shown errors will be gone.

Now I cannot explain this behaviour :/

## Run some command from list:

### Bundling in DEV environment with response to changes in config

```bash
npm run webpack-config-dev
```

### Bundling in PROD environment with response to changes in config

```bash
npm run webpack-config-prod
```

### Bundling in DEV environment with response to changes in code

```bash
npm run start-dev
```

### Bundling in PROD environment with response to changes in code

```bash
npm run start-prod
```

### Getting DEV build

```bash
npm run build-dev
```

### Getting PROD build

```bash
npm run build-prod
```

### Remove build

```bash
npm run clean
```

### Compare js with rules of linter

```bash
npm run lint
```

### Compare js with rules of linter and then fix all errors

```bash
npm run lint-fix
```

### Running all tests (see jest config)

```bash
npm run test
```

### Running all tests using watch mode

```bash
npm run test-watch
```

### Running all tests using coverage mode

```bash
npm run test-coverage
```
