import { tailwind } from '@theme-ui/preset-tailwind'

export default {
    ...tailwind,
    styles: {
        ...tailwind.styles,
        overflowX: 'hidden',
    },
    '::selection': {
        backgroundColor: 'highlight',
    },
    buttons: {
        ...tailwind.buttons,
        menuIcon: {
            position: 'fixed',
            top: `${tailwind.space[4]}`,
            right: `${tailwind.space[4]}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: `${tailwind.sizes[6]}`,
            height: `${tailwind.sizes[6]}`,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            '&:hover': {
                outline: 'none',
                color: 'offWhite',
                bg: 'transparent',
            },
            '&:focus': {
                outline: 'none',
                // boxShadow: '2px 2px 2px 2px black',
                color: 'offWhite',
            },
        },
    },
    colors: {
        ...tailwind.colors,
        // background: '#F9FAFB',
        text: '#111827',
        black: '#111827',
        // white: '#F9FAFB',
        blue: '#2563EB',
        // yellow: '#FEF08A',
        // yellow: '#facc15',
        // yellow: '#FED700',
        yellow: '#FFC703',
        // yellow: '#ffff33',
        red: '#EF4444',
        primary: '#111827',
        secondary: '#FEF08A',
        highlight: '#FED700',
        info: '#2563EB',
        warning: '#FEF08A',
        danger: '#EF4444',
        muted: '#6B7280',
        header: '#ffffff',
        offWhite: `${tailwind.colors.gray[2]}`,
        mainOpenMenu: `${tailwind.colors.gray[5]}`,
        //##### from theme ui
        //     text	Body foreground color
        // background	Body background color
        // primary	Primary brand color for links, buttons, etc.
        // secondary	A secondary brand color for alternative styling
        // accent	A contrast color for emphasizing UI
        // highlight	A background color for highlighting text
        // muted	A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
        //#####
    },
    fonts: {
        ...tailwind.fonts,
        body: 'Montserrat, sans-serif',
    },
    fontSizes: [...tailwind.fontSizes, '6rem', '7rem'],
    fontWeights: {
        ...tailwind.fontWeights,
        heading: '900',
    },
    sizes: {
        ...tailwind.sizes,
        container: 1536,
    },
    breakpoints: [...tailwind.breakpoints, '1520px'],
    footer: {
        a: {
            color: 'muted',
            textDecoration: 'none',
        },
    },
    layout: {
        header: {
            closedMenu: {
                p: [3, 3],
                position: 'absolute',
                zIndex: 10,
                nav: {
                    ml: 'auto',
                    display: ['none', 'none', 'flex'],
                    a: {
                        color: 'white',
                        '&:hover, &:focus, &.active': {
                            color: 'offWhite',
                        },
                        cursor: 'pointer',
                        fontSize: 1,
                        fontWeight: 'extrabold',
                        textDecoration: 'none',
                        px: 3,
                        '&:last-child': {
                            pr: 0,
                        },
                    },
                },
                // transition: 'transform 2000ms',
                // transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            },
            openMenu: {
                p: [2, 3],
                position: 'fixed',
                zIndex: 20,
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                nav: {
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    a: {
                        color: 'mainOpenMenu',
                        '&:hover, &:focus, &.active': {
                            color: 'offWhite',
                        },
                        cursor: 'pointer',
                        fontSize: [6, 7, 9],
                        lineHeight: 'tight',
                        fontWeight: 'extrabold',
                        textDecoration: 'none',
                        px: 3,
                        '&:last-child': {
                            pr: 0,
                        },
                    },
                },
                // transition: 'transform 2000ms',
                // transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            },
        },
    },
}

// export default {

//
//
//   styles: {
//     ...tailwind.styles,
//     // Footer: {
//     //   bg: 'white',
//     //   fontSize: `${tailwind.fontSizes[0]}`,
//     //   color: 'muted',
//     //   a: {
//     //     color: 'muted',
//     //     textDecoration: 'none',
//     //   },
//     // },
//     h2: {
//       a: {
//         color: 'primary',
//       },
//     },
//   },
//
//   //#####
//   root: {
//     bg: 'white',
//   },
//   blog: {
//     post: {
//       width: '90%',
//       mx: 'auto',
//       blockquote: {
//         borderLeft: '5px solid black',
//         p: '1rem 1rem 1rem 2rem',
//         m: '3rem',
//       },
//       figure: {
//         textAlign: 'center',
//         span: {
//           m: '0 auto',
//         },
//       },
//     },
//   },
//   layout: {
//     root: {
//       h2: {
//         fontWeight: 'heading',
//         a: {
//           color: 'primary',
//           textDecoration: 'none',
//           // ':hover': {
//           //   textDecoration: 'underline',
//           // },
//         },
//       },
//     },
//
//
//   },
// }
