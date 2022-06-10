import { DeepPartial, Theme } from '@chakra-ui/react';

const fonts: DeepPartial<Theme['fonts']> = {
  heading: `"Space Mono", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  body: `"Orbitron", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  mono: `'Space Mono"', monospace`,
};

export default fonts;
