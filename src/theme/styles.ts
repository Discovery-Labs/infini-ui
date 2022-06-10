import { mode, Styles } from '@chakra-ui/theme-tools';
import { colors } from './colors';

const styles: Styles = {
  global: (props) => ({
    'html, body': {
      padding: 0,
      margin: 0,
      fontFeatureSettings: `'zero' 1`,
      scrollBehavior: 'smooth',
    },
    body: {
      fontFamily: 'body',
      // fontSize: ['16px', '110%', '120%', '130%'],
      color: mode(colors.neutralDarkest, colors.neutralLightest)(props),
      bg: mode(colors.neutralLightest, colors.neutralDarkest)(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
    '::selection': {
      backgroundColor: mode(
        colors.neutralLightest,
        colors.neutralDarkest
      )(props),
      color: mode(colors.neutralDarkest, colors.neutralLightest)(props),
    },
    '::-moz-selection': {
      backgroundColor: mode(
        colors.neutralLightest,
        colors.neutralDarkest
      )(props),
      color: mode(colors.neutralDarkest, colors.neutralLightest)(props),
    },
  }),
};

export default styles;
