import { tailwind as baseStyles } from '@theme-ui/presets'
import layout from './layout'
import fonts from './fonts'
import colors from './colors'

export default {
  ...baseStyles,
  styles: {
    ...baseStyles.styles,
  },
  layout,
  fonts,
  colors,
}
