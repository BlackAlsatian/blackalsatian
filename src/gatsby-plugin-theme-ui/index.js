import { tailwind } from '@theme-ui/preset-tailwind'

export default {
    ...tailwind,
    styles: {
        ...tailwind.styles,
    },
    sections: {
        black: {
            pageheader: {
                backgroundColor: 'black',
                color: 'white',
            },
            body: {
                backgroundColor: 'white',
                color: 'black',
            },
        },
        altblack: {
            pageheader: {
                backgroundColor: 'black',
                color: 'white',
            },
            body: {
                backgroundColor: 'white',
                color: 'black',
            },
        },
        altyellow: {
            pageheader: {
                backgroundColor: 'yellow',
                color: 'black',
            },
            body: {
                backgroundColor: 'white',
                color: 'black',
            },
        },
    },
    colors: {
        ...tailwind.colors,
        text: '#111827',
        background: '#ffffff',
        primary: '#111827',
        secondary: '#fef08a',
        accent: '#f5df4d',
        highlight: `${tailwind.colors.gray[2]}`,
        info: '#2563eb',
        warning: '#fef08a',
        danger: '#ef4444',
        muted: '#6B7280',
        header: '#ffffff',
        primaryHover: `${tailwind.colors.gray[8]}`,
        black: '#111827',
        blue: '#0060b4',
        //##pantone of the year
        yellow: '#f5df4d',
        gray: '#939597',
        // ##
        red: '#d93d33',
        offWhite: `${tailwind.colors.gray[2]}`,
        mainOpenMenu: '#939597',
        // blue: '#2ec4b6',
        // blue: '#31cdff',
        // red: '#e71d36',
        // red: '#de4a50',
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
        pill: {
            borderRadius: 'circle',
            px: 3,
            py: 1,
            fontSize: 1,
        },
        primarypill: {
            variant: 'badges.primary',
            borderRadius: 'circle',
            px: 3,
            py: 1,
            fontSize: 1,
        },
        outline: {
            variant: 'badges.pill',
            bg: 'transparent',
            border: '1px solid',
            borderColor: 'currentColor',
            fontWeight: 'body',
        },
    },
    fonts: {
        ...tailwind.fonts,
        body: 'Montserrat, sans-serif',
    },
    fontSizes: [...tailwind.fontSizes, '5rem', '6rem', '7rem'],
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
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary',
            color: 'black',
            '&:focus': {
                outline: 'none',
                borderColor: 'primary',
                backgroundColor: 'white',
                fontFamily: 'body',
                fontSize: '100%',
            },
            altblack: {
                borderBottomColor: 'black',
                '&:focus': {
                    borderColor: 'black',
                },
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
                fontSize: '100%',
            },
        },
    },
    layout: {
        default: {
            backgroundColor: 'white',
            header: {
                svg: {
                    fill: 'white',
                },
                nav: {
                    a: {
                        color: 'white',
                        '&:hover, &:focus, &.active': {
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'white',
            },
            footer: {
                backgroundColor: 'black',
                color: 'white',
                a: {
                    color: 'white',
                },
                svg: {
                    fill: 'white',
                },
            },
        },
        white: {
            backgroundColor: 'white',
            color: 'black',
            header: {
                svg: {
                    fill: 'black',
                },
                nav: {
                    a: {
                        color: 'black',
                        '&:hover, &:focus, &.active': {
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'white',
            },
            footer: {
                backgroundColor: 'white',
                color: 'black',
                a: {
                    color: 'black',
                },
                svg: {
                    fill: 'black',
                },
            },
        },
        postwhite: {
            backgroundColor: 'white',
            color: 'black',
            header: {
                svg: {
                    fill: 'white',
                },
                nav: {
                    a: {
                        color: 'white',
                        '&:hover, &:focus, &.active': {
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'white',
            },
            footer: {
                backgroundColor: 'white',
                color: 'black',
                a: {
                    color: 'black',
                },
                svg: {
                    fill: 'black',
                },
            },
        },
        black: {
            backgroundColor: 'black',
            header: {
                svg: {
                    fill: 'white',
                },
                nav: {
                    a: {
                        color: 'white',
                        '&:hover, &:focus, &.active': {
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'black',
            },
            footer: {
                backgroundColor: 'black',
                color: 'white',
                a: {
                    color: 'white',
                },
                svg: {
                    fill: 'white',
                },
            },
        },
        altblack: {
            backgroundColor: 'white',
            color: 'black',
            header: {
                svg: {
                    fill: 'white',
                },
                nav: {
                    a: {
                        color: 'white',
                        '&:hover, &:focus, &.active': {
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'white',
                color: 'black',
            },
            footer: {
                backgroundColor: 'black',
                color: 'white',
                a: {
                    color: 'white',
                },
                svg: {
                    fill: 'white',
                },
            },
        },
        yellow: {
            backgroundColor: 'yellow',
            color: 'black',
            header: {
                svg: {
                    fill: 'black',
                },
                nav: {
                    a: {
                        color: 'black',
                        '&:hover, &:focus, &.active': {
                            color: 'black',
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'yellow',
            },
            footer: {
                backgroundColor: 'yellow',
                color: 'black',
                a: {
                    color: 'black',
                },
                svg: {
                    fill: 'black',
                },
            },
        },
        altyellow: {
            backgroundColor: 'white',
            color: 'black',
            header: {
                svg: {
                    fill: 'black',
                },
                nav: {
                    a: {
                        color: 'black',
                        '&:hover, &:focus, &.active': {
                            color: 'black',
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'white',
            },
            footer: {
                backgroundColor: 'black',
                color: 'white',
                a: {
                    color: 'white',
                },
                svg: {
                    fill: 'white',
                },
            },
        },
        red: {
            backgroundColor: 'red',
            color: 'white',
            header: {
                svg: {
                    fill: 'white',
                },
                nav: {
                    a: {
                        color: 'white',
                        '&:hover, &:focus, &.active': {
                            color: 'white',
                            opacity: 0.9,
                        },
                    },
                },
            },
            main: {
                backgroundColor: 'red',
                color: 'white',
                p: {
                    a: {
                        color: 'white',
                        textDecoration: 'underline',
                        fontWeight: 'medium',
                        '&:hover': {
                            textDecoration: 'none',
                        },
                        '&:visited': {
                            color: 'rgba(255, 255, 255, 0.8)',
                        },
                    },
                },
            },
            footer: {
                backgroundColor: 'red',
                color: 'white',
                a: {
                    color: 'white',
                },
                svg: {
                    fill: 'white',
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
                '&:visited': {
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
        },
        h4: {
            a: {
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 'medium',
                '&:hover': {
                    textDecoration: 'none',
                },
                '&:visited': {
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
        },
        h3: {
            a: {
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 'medium',
                '&:hover': {
                    textDecoration: 'none',
                },
                '&:visited': {
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
        },
        li: {
            a: {
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 'medium',
                '&:hover': {
                    textDecoration: 'none',
                },
                '&:visited': {
                    color: 'rgba(0, 0, 0, 0.8)',
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
            width: '100%',
            p: '0 auto',
            span: {
                m: '0 auto',
            },
        },
        project: {
            p: {
                a: {
                    color: 'white',
                },
            },
        },
    },
}
