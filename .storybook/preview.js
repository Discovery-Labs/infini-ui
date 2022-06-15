import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { customTheme } from '../src/theme';
import '@fontsource/inter';

const withChakra = StoryFn => {
  return (
    <ChakraProvider theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];