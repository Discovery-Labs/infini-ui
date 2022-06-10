import { extendTheme, withDefaultColorScheme, Theme } from '@chakra-ui/react';

import { fontWeights, letterSpacings, lineHeights } from './typography';
import breakpoints from './breakpoints';
import { colors } from './colors';
import components from './components';
import { colorScheme } from './default-props';
import fonts from './fonts';
import layerStyles from './layer-styles';
import semanticTokens from './semantic-tokens';
import styles from './styles';
import textStyles from './text-styles';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const customTheme: Theme = extendTheme(
  {
    config,
    components,
    colors,
    fonts,
    fontSizes: [],
    fontWeights,
    lineHeights,
    letterSpacings,
    styles,
    layerStyles,
    textStyles,
    sizes: {
      container: {
        page: '1170px',
      },
    },
    semanticTokens,
    breakpoints,
  },
  withDefaultColorScheme({ colorScheme: colorScheme })
) as Theme;
