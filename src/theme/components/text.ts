import {
  mode,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { colors } from '../colors';

const baseStyle: SystemStyleFunction = props => {
  return {
    _selection: {
      bg: mode(colors.primary[300], colors.primary[300])(props),
      color: mode(colors.neutralLightest, colors.neutralDarkest)(props),
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {};

const defaultProps = {};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
