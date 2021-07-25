const theme = {
    fonts: {
        body: 'Montserrat, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: [
        '0.875rem',
        '1rem',
        '1.25rem',
        '1.5rem',
        '1.875rem',
        '2.25rem',
        '3rem',
        '4rem',
        '4.5rem',
        '5rem',
        '6rem',
        '7rem',
    ],
    fontWeights: {
        thin: '200',
        normal: '400',
        body: '400',
        bold: '700',
        black: '900',
        heading: '900',
        // hairline: "100",
        // light: "300",
        // bold: "500",
        // semibold: "600",
        // extrabold: '800',
    },
    lineHeights: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
        body: 1.625,
        heading: 1,
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: 0,
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
    colors: {
        text: '#111827',
        background: '#fff',
        primary: '#111827',
        secondary: '#fef08a',
        accent: '#f5df4d',
        muted: '#6B7280',

        highlight: '#edf2f7',
        info: '#2563eb',
        warning: '#fef08a',
        danger: '#ef4444',
        header: '#ffffff',
        primaryHover: '#2d3748',
        black: '#111827',
        blue: '#0060b4',
        yellow: '#f5df4d',
        gray: '#939597',
        red: '#d93d33',
        offWhite: '#edf2f7',
        mainOpenMenu: '#939597',
    },

    shadows: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        heading: '1px 1px 16px rgba(0, 0, 0, 0.1)',
    },
    radii: {
        none: 0,
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
    },
    zIndices: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        auto: 'auto',
    },

    sizes: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        px: '1px',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screenHeight: '100vh',
        screenWidth: '100vw',
        container: 1280,
    },
    space: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '10rem', '12rem', '16rem', '32rem'],
    text: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        paragraph: {
            fontFamily: 'body',
            fontWeight: 'normal',
            lineHeight: 'relaxed',
        },
    },
    borderWidths: {
        0: 0,
        2: '2px',
        4: '4px',
        8: '8px',
        px: '1px',
    },
    breakpoints: ['640px', '768px', '1024px', '1280px', '1520px'],
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            body: {
                minHeight: '100vh',
                // WebkitFontSmoothing: 'antialiased',
                // MozOsxFontSmoothing: 'grayscale',
            },
            scrollBehavior: 'smooth',
            '@media screen and (prefersReducedMotion: reduce)': {
                scrollBehavior: 'auto',
            },
            '& ::selection ': {
                backgroundColor: '#f5df4d',
            },
            '& *::-webkit-scrollbar': {
                width: '6px',
                backgroundColor: '#867f7f',
            },
            '& *::-webkit-scrollbar-track': {
                WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#6b7280',
            },
            '& *::-webkit-scrollbar-thumb': {
                backgroundColor: '#000000',
                border: '6px solid #1c1c1c',
            },
            '@keyframes fadeBlockIn': {
                from: {
                    opacity: 0,
                    // transform: 'translate3d(0, -20%, 0)',
                },
                to: {
                    opacity: 1,
                    // transform: 'translate3d(0, 0, 0)',
                },
            },
            '@keyframes fadeBlockOut': {
                from: {
                    opacity: 1,
                },
                to: {
                    opacity: 0,
                },
            },
            a: {
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 'bold',
                '&:hover': {
                    textDecoration: 'none',
                },
                '&:visited': {
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
            header: {
                display: 'flex',
                alignItems: 'center',
                top: 0,
                left: 0,
                right: 0,
                p: [3, 3],
                position: 'absolute',
                zIndex: 10,
                nav: {
                    '& > a': {
                        cursor: 'pointer',
                        fontSize: 1,
                        fontWeight: 'black',
                        textDecoration: 'none',
                        px: 3,
                        '&:last-of-type': {
                            pr: 0,
                        },
                    },
                },
            },
            main: {
                flex: 1,
                minHeight: '100vh',
                // counterReset: 'css-counter -1',
                section: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    width: '100%',
                    p: 0,
                    m: 0,
                    // counterIncrement: 'css-counter',
                    // animation: 'fadeBlockIn 200ms ease-in both',
                    // '&:nth-of-type(counter(css-counter))': {
                    // animationDelay: 'counter(css-counter)s',
                    // animationDelay: '250ms',
                    // },
                },
            },
            footer: {
                width: '100%',
                fontSize: 0,
                fontWeight: 'normal',
                position: 'relative',
            },
            // article: {
            //     display: 'block',
            //     header: {
            //         display: 'block',
            //         p: 0,
            //         m: 0,
            //         minHeight: '100vh',
            //     },
            // },
            p: {
                mb: 4,
            },
            h1: {
                variant: 'text.heading',
                lineHeight: 'none',
                letterSpacing: 'tighter',
                textShadow: 'heading',
                //hypens examples
                // WebkitHyphens: 'auto',
                // MozHyphens: 'auto',
                // MsHyphens: 'auto',
                // hyphens: 'auto',
                //word-wrap / break-word / etc
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                MsWordBreak: 'break-all',
                wordBreak: 'break-word',
                MsHyphens: 'auto',
                MozHyphens: 'auto',
                WebkitHyphens: 'auto',
                hyphens: 'auto',
                // min-content
                // width: "-moz-min-content",    /* Firefox */
                // width: "-webkit-min-content", /* Chrome */
                // width: "min-content",
                //max-content
                // width: 'intrinsic',           /* Safari/WebKit uses a non-standard name */
                // width: '-moz-max-content',    /* Firefox/Gecko */
                // width: '-webkit-max-content', /* Chrome */
                // width: 'max-content',
            },
            h2: {
                variant: 'text.heading',
                mb: '1.5rem',
                fontSize: 5,
                mt: 2,
            },
            h3: {
                variant: 'text.heading',
                variant: 'text.heading',
                mb: '1.5rem',
                fontSize: 4,
                mt: 3,
            },
            h4: {
                variant: 'text.heading',
                mb: '1.5rem',
                fontSize: 3,
            },
            h5: {
                variant: 'text.heading',
                mb: '1.5rem',
                fontSize: 2,
            },
            h6: {
                variant: 'text.heading',
                mb: 2,
                fontSize: 1,
            },
            a: {
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 'bold',
                '&:hover': {
                    textDecoration: 'none',
                },
                '&:visited': {
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
            code: {},
            pre: {},
            hr: {
                bg: 'muted',
                border: 0,
                height: '1px',
                m: 3,
            },
            // ul: {
            //     m: '1.5rem',
            //     flexList: {
            //         display: `flex`,
            //         flexWrap: `wrap`,
            //         justifyContent: `space-between`,
            //         listStyle: `none`,
            //         m: 0,
            //     },
            // },
            blockquote: {
                fontFamily: 'serif',
                fontSize: 3,
                borderTop: '0.01rem solid black',
                borderBottom: '0.025rem solid black',
                padding: '2.2rem 2rem 2.2rem 2rem',
                m: '2.75rem 0',
                textAlign: 'left',
                fontStyle: 'oblique',
                lineHeight: 'tight',
                textAlign: 'center',
                p: {
                    my: 0,
                },
            },
            figure: {
                my: 4,
                textAlign: 'center',
                span: {
                    display: 'inline-block',
                },
                figcaption: {
                    color: '#999',
                    fontStyle: 'oblique',
                    fontSize: 0,
                    fontWeight: 'thin',
                },
            },
        },
    },
    heading: {
        m: 0,
    },
    paragraph: {
        // variant: 'theme.text.paragraph',
        pageHeading: {
            fontSize: [3, 4],
            my: 1,
            textShadow: 'heading',
            lineHeight: 'none',
        },
    },
    uls: {
        m: '1.5rem',
        flexList: {
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            m: 0,
        },
    },
    buttons: {
        simple: {
            py: 2,
            px: 3,
            cursor: 'pointer',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'primary',
            border: 'none',
            // color: 'white',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'default',
            // '&:hover': {
            //     backgroundColor: 'primaryHover',
            // },
            white: {
                color: 'white',
            },
            yellow: {
                color: 'yellow',
            },
            blue: {
                color: 'blue',
            },
            red: {
                color: 'red',
            },
        },
        pill: {
            py: 2,
            px: 3,
            cursor: 'pointer',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'primary',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'full',
            '&:hover': {
                backgroundColor: 'primaryHover',
            },
        },
        outline: {
            py: 2,
            px: 3,
            cursor: 'pointer',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'transparent',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'primary',
            color: 'primary',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'default',
            '&:hover': {
                backgroundColor: 'primary',
                color: 'white',
                borderColor: 'transparent',
            },
        },
        bordered: {
            py: 2,
            px: 3,
            cursor: 'pointer',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'primary',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'primaryHover',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'default',
            '&:hover': {
                backgroundColor: 'primaryHover',
            },
        },
        disabled: {
            py: 2,
            px: 3,
            cursor: 'not-allowed',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'primary',
            border: 'none',
            opacity: '0.5',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'default',
        },
        '3D': {
            py: 2,
            px: 3,
            cursor: 'pointer',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'primary',
            border: 'none',
            borderBottomWidth: '4px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primaryHover',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'default',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-1px)',
            },
        },
        elevated: {
            py: 2,
            px: 3,
            cursor: 'pointer',
            fontSize: '100%',
            lineHeight: 'inherit',
            backgroundColor: 'white',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#cbd5e0',
            color: 'text',
            fontWeight: 'bold',
            fontFamily: 'body',
            borderRadius: 'default',
            boxShadow: 'default',
            '&:hover': {
                backgroundColor: '#f7fafc',
            },
        },
        menuIcon: {
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '1.5rem',
            height: '1.5rem',
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
    inputs: {
        shadow: {
            py: 2,
            px: 3,
            fontSize: '100%',
            borderRadius: 'default',
            appearance: 'none',
            lineHeight: 'tight',
            border: 'none',
            color: '#4a5568',
            boxShadow: 'default',
            '&:focus': {
                outline: 'none',
                boxShadow: 'outline',
            },
        },
        inline: {
            py: 2,
            px: 3,
            fontSize: '100%',
            borderRadius: 'default',
            appearance: 'none',
            lineHeight: 'tight',
            backgroundColor: '#edf2f7',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#edf2f7',
            color: '#4a5568',
            '&:focus': {
                outline: 'none',
                borderColor: 'primary',
                backgroundColor: 'white',
            },
        },
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
            fontFamily: 'body',
            '&:focus': {
                outline: 'none',
                borderColor: 'primary',
                backgroundColor: 'white',
                fontFamily: 'body',
                fontSize: '100%',
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
            fontFamily: 'body',
            '&:focus': {
                outline: 'none',
                boxShadow: 'xl',
                backgroundColor: 'white',
                fontFamily: 'body',
                fontSize: '100%',
            },
        },
    },
    header: {
        default: {
            svg: {
                fill: 'white',
            },
            nav: {
                a: {
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'white',
                    },
                },
            },
        },
        white: {
            svg: {
                fill: 'black',
            },
            nav: {
                a: {
                    color: 'black',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'black',
                    },
                },
            },
        },
        postwhite: {
            svg: {
                fill: 'white',
            },
            nav: {
                a: {
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'white',
                    },
                },
            },
        },
        black: {
            svg: {
                fill: 'white',
                '&:hover, &:focus, &.active': {
                    fill: '#f5df4d !important',
                },
                '&:visited': {
                    opacity: 1,
                },
            },
            nav: {
                a: {
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        color: '#f5df4d !important',
                    },
                    '&:visited': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'white',
                    },
                },
            },
        },
        altblack: {
            svg: {
                fill: 'white',
            },
            nav: {
                a: {
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'white',
                    },
                },
            },
        },
        yellow: {
            svg: {
                fill: 'black',
            },
            nav: {
                a: {
                    color: 'black',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'black',
                    },
                },
            },
        },
        altyellow: {
            svg: {
                fill: 'black',
            },
            nav: {
                a: {
                    color: 'black',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'black',
                    },
                },
            },
        },
        red: {
            borderColor: 'white',
            svg: {
                fill: 'white',
            },
            nav: {
                a: {
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover, &:focus, &.active': {
                        opacity: 0.9,
                    },
                },
            },
            div: {
                button: {
                    svg: {
                        background: 'white',
                    },
                },
            },
        },
    },
    main: {
        default: {
            backgroundColor: 'white',
        },
        white: {
            backgroundColor: 'white',
        },
        postwhite: {
            backgroundColor: 'white',
        },
        black: {
            backgroundColor: 'black',
            color: 'white',
            a: {
                color: 'white',
                '&:hover': {
                    color: 'white',
                },
                '&:visited': {
                    color: 'rgba(255, 255, 255, 0.8)',
                },
            },
        },
        altblack: {
            backgroundColor: 'white',
            color: 'black',
        },
        yellow: {
            backgroundColor: 'yellow',
        },
        altyellow: {
            backgroundColor: 'white',
        },
        red: {
            backgroundColor: 'red',
            color: 'white',
            a: {
                color: 'white',
                '&:hover': {
                    textDecoration: 'none',
                    color: 'white',
                },
                '&:visited': {
                    color: 'rgba(255, 255, 255, 0.8)',
                },
            },
        },
    },
    sections: {
        pageHeaders: {
            // used by pageheaders
            default: {
                backgroundColor: 'black',
                color: 'white',
            },
            black: {
                backgroundColor: 'black',
                color: 'white',
            },
            altblack: {
                backgroundColor: 'black',
                color: 'white',
            },
            white: {
                backgroundColor: 'white',
                color: 'black',
            },
            postwhite: {
                backgroundColor: 'black',
                color: 'white',
            },
            yellow: {
                backgroundColor: 'yellow',
                color: 'black',
            },
            altyellow: {
                backgroundColor: 'yellow',
                color: 'black',
            },
            red: {
                backgroundColor: 'red',
                color: 'white',
            },
        },
        masonryWrapper: {
            display: 'block',
            width: '100%',
            alignItems: 'normal',
            minHeight: '100vh',
            div: {
                width: '100%',
            },
            header: {
                pb: 6,
                h3: {
                    fontSize: 5,
                    fontWeight: 'normal',
                },
            },
            grid: {
                width: '100%',
                columnGap: 4,
                counterReset: 'item-counter',
                px: 3,
                pb: 5,
            },
            footer: {
                backgroundColor: 'transparent',
                textAlign: 'center',
            },
        },
        noypadding: {
            display: 'block',
            alignItems: 'normal',
            minHeight: 'initial',
            py: 0,
        },
        blocks: {
            white: {
                backgroundColor: 'white',
                color: 'black',
                borderColor: 'black',
                // a: {
                //     // color: 'black',
                //     // fontWeight: 'bold',
                //     textDecoration: 'none',
                //     boderBottom: 0,
                //     transition: 'border-bottom 0.2s ease-in-out',
                //     '&:hover': {
                //         borderBottom: '2px solid black',
                //     },
                // },
                p: {
                    span: {
                        a: {
                            color: 'white !important',
                            backgroundColor: 'black',
                            '&:hover': {
                                borderBottom: 0,
                            },
                        },
                    },
                },
                'input[type=checkbox]': {
                    borderColor: 'black',
                    '&:after': {
                        color: 'black',
                    },
                },
                button: {
                    backgroundColor: 'black',
                    '&:active, &:focus, &:hover': {
                        backgroundColor: 'black',
                    },
                },
            },
            yellow: {
                backgroundColor: 'yellow',
                color: 'black',
                borderColor: 'black',
                // a: {
                //     // color: 'black',
                //     // fontWeight: 'bold',
                //     textDecoration: 'none',
                //     boderBottom: 0,
                //     transition: 'border-bottom 0.2s ease-in-out',
                //     '&:hover': {
                //         borderBottom: '2px solid black',
                //     },
                // },
                p: {
                    span: {
                        a: {
                            color: '#f5df4d !important',
                            '&:hover': {
                                borderBottom: 0,
                            },
                        },
                    },
                },
            },
            blue: {
                backgroundColor: 'blue',
                color: 'white',
                borderColor: 'white',
                a: {
                    color: 'white',
                    // fontWeight: 'bold',
                    // textDecoration: 'none',
                    // boderBottom: 0,
                    // transition: 'border-bottom 0.2s ease-in-out',
                    // '&:hover': {
                    //     borderBottom: '2px solid white',
                    // },
                    '&:visited, &:active, &:focus': {
                        color: 'white',
                    },
                },
                p: {
                    span: {
                        a: {
                            color: '#0060b4 !important',
                            '&:hover': {
                                borderBottom: 0,
                            },
                        },
                    },
                },
            },
            red: {
                backgroundColor: 'red',
                color: 'white',
                borderColor: 'white',
                a: {
                    color: 'white',
                    // fontWeight: 'bold',
                    // textDecoration: 'none',
                    // boderBottom: 0,
                    // transition: 'border-bottom 0.2s ease-in-out',
                    // '&:hover': {
                    //     borderBottom: '2px solid white',
                    // },
                    '&:visited, &:active, &:focus': {
                        color: 'white',
                    },
                },
                p: {
                    span: {
                        a: {
                            color: '#d93d33 !important',
                            '&:hover': {
                                borderBottom: 0,
                            },
                        },
                    },
                },
            },
        },
        servicesBlock: {
            backgroundColor: 'white',
            color: 'black',
            // width: '100%',
            // py: 6,
            // minHeight: '100vh',
            // display: 'flex',
            // alignItems: 'center',
        },
        // portfolioPage: {
        // backgroundColor: 'black',
        // color: 'white',
        // },
        footerRowTwo: {
            display: 'flex',
            px: 4,
            py: 2,
            width: '100%',
        },
    },
    divs: {
        offcanvas: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            top: 0,
            left: 0,
            right: 0,
            position: 'fixed',
            p: [2, 3],
            zIndex: 20,
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            div: {
                m: 0,
                flexDirection: 'column',
                transition: 'opacity 750ms ease-in',
                a: {
                    color: 'offWhite',
                    '&:hover, &:focus, &:active, &:visited': {
                        color: 'offWhite',
                    },
                    cursor: 'pointer',
                    lineHeight: 'tight',
                    fontWeight: 'black',
                    textDecoration: 'none',
                    px: 3,
                    '&:last-child': {
                        pr: 0,
                    },
                },
            },
        },
        hamburger: {
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            alignItems: 'center',
            zIndex: 30,
            button: {
                svg: {
                    width: 6,
                    height: 'px',
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 3px 3px  rgba(0, 0, 0, 0.02)',
                },
            },
            span: {
                position: 'fixed',
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                borderWidth: 0,
            },
        },
        // pagesnav: {
        //     ul: {
        //         display: `flex`,
        //         flexWrap: `wrap`,
        //         justifyContent: `space-between`,
        //         listStyle: `none`,
        //         m: 0,
        //     },
        // },
        serviceBlockLinks: {
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            px: 4,
            borderBottom: '0.01rem solid black',
            background: 'offWhite',
            transition: 'background-color 500ms ease-in',
            '&:hover': {
                backgroundColor: 'yellow',
            },
        },
    },
    footers: {
        section: {
            minHeight: 'initial',
        },
        default: {
            backgroundColor: 'black',
            color: 'white',
            a: {
                color: 'white',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'white',
                },
            },
            svg: {
                fill: 'white',
            },
            form: {
                input: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'white',
                    '&:after': {
                        color: 'white',
                    },
                },
                textarea: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white', backgroundColor: 'black' },
                },
                button: {
                    backgroundColor: 'white',
                    color: 'black',
                },
                errors: {
                    input: {
                        borderBottomColor: 'yellow',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'yellow',
                        '&:after': {
                            color: 'yellow',
                        },
                    },
                },
            },
        },
        white: {
            backgroundColor: 'white',
            color: 'black',
            a: {
                color: 'black',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'black',
                },
            },
            svg: {
                fill: 'black',
            },
            form: {
                input: {
                    borderBottomColor: 'black',
                    '&:not(:focus)': { color: 'black' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'black',
                    '&:after': {
                        color: 'black',
                    },
                },
                textarea: {
                    borderBottomColor: 'black',
                    '&:not(:focus)': { color: 'black', backgroundColor: 'white' },
                },
                button: {
                    backgroundColor: 'black',
                    color: 'white',
                },
                errors: {
                    input: {
                        borderBottomColor: 'blue',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'blue',
                        '&:after': {
                            color: 'blue',
                        },
                    },
                },
            },
        },
        postwhite: {
            backgroundColor: 'white',
            color: 'black',
            a: {
                color: 'black',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'black',
                },
            },
            svg: {
                fill: 'black',
            },
            form: {
                input: {
                    borderBottomColor: 'black',
                    '&:not(:focus)': { color: 'black' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'black',
                    '&:after': {
                        color: 'black',
                    },
                },
                textarea: {
                    borderBottomColor: 'black',
                    '&:not(:focus)': { color: 'black', backgroundColor: 'white' },
                },
                button: {
                    backgroundColor: 'black',
                    color: 'white',
                },
                errors: {
                    input: {
                        borderBottomColor: 'blue',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'blue',
                        '&:after': {
                            color: 'blue',
                        },
                    },
                },
            },
        },
        black: {
            backgroundColor: 'black',
            color: 'white',
            a: {
                color: 'white',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'white',
                },
            },
            svg: {
                fill: 'white',
            },
            form: {
                input: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'white',
                    '&:after': {
                        color: 'white',
                    },
                },
                textarea: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white', backgroundColor: 'black' },
                },
                button: {
                    backgroundColor: 'white',
                    color: 'black',
                },
                errors: {
                    input: {
                        borderBottomColor: 'yellow',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'yellow',
                        '&:after': {
                            color: 'yellow',
                        },
                    },
                },
            },
        },
        altblack: {
            backgroundColor: 'black',
            color: 'white',
            a: {
                color: 'white',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'white',
                },
            },
            svg: {
                fill: 'white',
            },
            form: {
                input: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'white',
                    '&:after': {
                        color: 'white',
                    },
                },
                textarea: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white', backgroundColor: 'black' },
                },
                button: {
                    backgroundColor: 'white',
                    color: 'black',
                },
                errors: {
                    input: {
                        borderBottomColor: 'yellow',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'yellow',
                        '&:after': {
                            color: 'yellow',
                        },
                    },
                },
            },
        },
        yellow: {
            backgroundColor: 'yellow',
            color: 'black',
            a: {
                color: 'black',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'black',
                },
            },
            svg: {
                fill: 'black',
            },
            form: {
                input: {
                    borderBottomColor: 'black',
                    '&:not(:focus)': { color: 'black' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'black',
                    '&:after': {
                        color: 'black',
                    },
                },
                textarea: {
                    borderBottomColor: 'black',
                    '&:not(:focus)': { color: 'black', backgroundColor: 'yellow' },
                },
                button: {
                    backgroundColor: 'black',
                    color: 'yellow',
                },
                errors: {
                    input: {
                        borderBottomColor: 'red',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'red',
                        '&:after': {
                            color: 'red',
                        },
                    },
                },
            },
        },
        altyellow: {
            backgroundColor: 'black',
            color: 'white',
            a: {
                color: 'white',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'white',
                },
            },
            svg: {
                fill: 'white',
            },
            form: {
                input: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'white',
                    '&:after': {
                        color: 'white',
                    },
                },
                textarea: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white', backgroundColor: 'black' },
                },
                button: {
                    backgroundColor: 'white',
                    color: 'black',
                },
                errors: {
                    input: {
                        borderBottomColor: 'yellow',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'yellow',
                        '&:after': {
                            color: 'yellow',
                        },
                    },
                },
            },
        },
        red: {
            backgroundColor: 'red',
            color: 'white',
            a: {
                color: 'white',
                '&:hover, &:visited, &:active, &:focus': {
                    color: 'white',
                },
            },
            svg: {
                fill: 'white',
            },
            form: {
                input: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white' },
                },
                'input[type="checkbox"]': {
                    borderColor: 'white',
                    '&:after': {
                        color: 'white',
                    },
                },
                textarea: {
                    borderBottomColor: 'white',
                    '&:not(:focus)': { color: 'white', backgroundColor: 'red' },
                },
                button: {
                    backgroundColor: 'white',
                    color: 'red',
                },
                errors: {
                    input: {
                        borderBottomColor: 'yellow',
                    },
                    'input[type="checkbox"]': {
                        borderColor: 'yellow',
                        '&:after': {
                            color: 'yellow',
                        },
                    },
                },
            },
        },
    },
}
export default theme
