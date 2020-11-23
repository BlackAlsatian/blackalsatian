import { tailwind } from '@theme-ui/preset-tailwind'

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    // background: '#F9FAFB',
    text: '#111827',
    black: '#111827',
    // white: '#F9FAFB',
    blue: '#2563EB',
    yellow: '#FEF08A',
    red: '#EF4444',
    primary: '#111827',
    secondary: '#FEF08A',
    highlight: '#FEF08A',
    info: '#2563EB',
    warning: '#FEF08A',
    danger: '#EF4444',
    muted: '#6B7280',
  },
  fonts: {
    ...tailwind.fonts,
    body: 'Montserrat, sans-serif',
  },
  fontWeights: {
    ...tailwind.fontWeights,
    heading: '900',
  },
  // styles: {
  //   ...tailwind.styles,
  //   h2: {
  //     a: {
  //       color: 'primary',
  //     },
  //   },
  // },
  layout: {
    root: {
      background: 'white',
      h2: {
        fontWeight: 'heading',
        a: {
          color: 'primary',
          textDecoration: 'none',
          // ':hover': {
          //   textDecoration: 'underline',
          // },
        },
      },
    },
    header: {
      color: 'black',
      background: 'white',
    },
    footer: {
      background: 'white',
    },
  },
}
