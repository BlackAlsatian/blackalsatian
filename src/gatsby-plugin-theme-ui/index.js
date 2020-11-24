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
  sizes: {
    container: 1536,
  },
  breakpoints: [...tailwind.breakpoints, '1520px'],
  // styles: {
  //   ...tailwind.styles,
  //   h2: {
  //     a: {
  //       color: 'primary',
  //     },
  //   },
  // },
  root: {
    bg: 'white',
  },
  blog: {
    post: {
      width: '90%',
      mx: 'auto',
      blockquote: {
        borderLeft: '5px solid black',
        p: '1rem 1rem 1rem 2rem',
        m: '3rem',
      },
      figure: {
        textAlign: 'center',
        span: {
          m: '0 auto',
        },
      },
    },
  },
  layout: {
    root: {
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
      p: `${tailwind.space[3]} ${tailwind.space[4]}`,
    },
    navlink: {
      color: 'black',
      fontSize: `${tailwind.fontSizes[2]}`,
      fontWeight: 'extrabold',
      textDecoration: 'none',
      px: `${tailwind.space[3]}`,
      '&:last-child': {
        pr: 0,
      },
    },
    footer: {
      bg: 'white',
      fontSize: `${tailwind.fontSizes[0]}`,
      color: 'muted',
      a: {
        color: 'muted',
        textDecoration: 'none',
      },
    },
  },
}
