# dapper-ui

# Get Started

```text
yarn
```

```text
cd examples && npm i
```

## Development

Watch styles changes

```text
yarn start
```

Inside example

```text
npm run dev
```

## Workflow suggestions

Create the desired styles with storybook: `yarn storybook` and `yarn start`.

Then stop them and run Inside example `npm run dev` to start the application.

## Usage

```tsx
import { extendTheme } from "@chakra-ui/react";
import theme from "@discovery-dao/infini-ui";

...

<ChakraProvider theme={theme}>
    <Component {...pageProps} />
</CacheProvider>
```
