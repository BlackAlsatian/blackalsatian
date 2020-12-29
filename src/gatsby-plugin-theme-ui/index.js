import { tailwind } from '@theme-ui/preset-tailwind'

export default {
    '::selection': 'yellow',
    ...tailwind,
    styles: {
        ...tailwind.styles,
    },
    colors: {
        ...tailwind.colors,
        text: '#111827',
        background: '#ffffff',
        primary: '#111827',
        secondary: '#fef08a',
        accent: '#f5df4d',
        highlight: '#fed700',
        info: '#2563eb',
        warning: '#fef08a',
        danger: '#ef4444',
        muted: '#6B7280',
        header: '#ffffff',
        primaryHover: `${tailwind.colors.gray[8]}`,
        black: '#111827',
        // blue: '#2ec4b6',
        // blue: '#31cdff',
        blue: '#0060b4',
        //##pantone of the year
        yellow: '#f5df4d',
        gray: '#939597',
        // ##
        // red: '#e71d36',
        // red: '#de4a50',
        red: '#e54b42',
        offWhite: `${tailwind.colors.gray[2]}`,
        mainOpenMenu: '#939597',
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
                color: 'offWhite',
            },
        },
    },
    badges: {
        ...tailwind.badges,
        primary: {
            color: 'background',
            bg: 'primary',
        },
        outline: {
            color: 'white',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 1px',
        },
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
        container: 1280,
    },
    breakpoints: [...tailwind.breakpoints, '1520px'],
    inputs: {
        ...tailwind.inputs,
        underline: {
            py: 2,
            px: 3,
            fontSize: '100%',
            borderRadius: '0px',
            appearance: 'none',
            lineHeight: 'tight',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary',
            color: 'black',
            '&:focus': {
                outline: 'none',
                borderColor: 'primary',
                backgroundColor: 'white',
                fontFamily: 'body',
            },
        },
        background: {
            py: 2,
            px: 3,
            fontSize: '100%',
            borderRadius: 'none',
            appearance: 'none',
            lineHeight: 'tight',
            border: 'none',
            color: 'black',
            boxShadow: 'xl',
            backgroundColor: 'white',
            '&:focus': {
                outline: 'none',
                boxShadow: 'xl',
                backgroundColor: 'white',
                fontFamily: 'body',
            },
        },
    },
    // textarea: {
    //     '&:focus': {
    //         backgroundColor: 'white',
    //         color: 'black',
    //     },
    // },
    // footer: {
    //     textarea: {
    //         color: 'black',
    //     },
    // },
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
                        // color: 'white',
                        // '&:hover, &:focus, &.active': {
                        //     color: 'offWhite',
                        // },
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
            },
        },
        p: {
            a: {
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 'medium',
                '&:hover': {
                    textDecoration: 'none',
                },
            },
        },
        blockquote: {
            borderLeft: '5px solid black',
            p: '0 1rem 0 2rem',
            m: '3rem',
            textAlign: 'left',
            fontStyle: 'oblique',
        },
        figure: {
            textAlign: 'center',
            span: {
                m: '0 auto',
            },
        },
    },
}

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
