/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useStaticQuery, graphql } from 'gatsby'
import { animated, config, useSpring } from 'react-spring'
// import navLinks from '../navLinks'

function OffCanvas({ isOpen, handleMenuClick }) {
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const navLinks = data.wpMenu.menuItems.nodes
    // const [show, setShow] = useState(true)
    // const toggle = () => {
    //     setShow(!show)
    // }
    // const springRef = useRef()
    const OffCanvasAnimation = useSpring({
        // const { transform, opacity, ...springProps } = useSpring({
        // ref: springRef,
        opacity: isOpen ? 0.9 : 0,
        transform: isOpen ? `translateX(0)` : `translateX(100%)`,
        from: {
            opacity: 0,
            transform: `translateX(100%)`,
        },
        config: config.wobbly,
        // to: {
        //     transform: isOpen ? `translateX(0)` : `translateX(100%)`,
        //     opacity: isOpen ? 0.9 : 0,
        //     display: 'flex',
        //     alignItems: 'center',
        //     width: '100%',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     position: 'fixed',
        //     p: [2, 3],
        //     zIndex: 20,
        //     height: '100vh',
        //     // backgroundColor: 'rgba(0, 0, 0, 0.9)',
        //     backgroundColor: '#000',
        // },
        // config: { tension: 250 },
    })
    // const transitionRef = useRef()
    // const transRef = useRef()
    // const delayValue = 20
    // const showMenuTransition = useTransition(isOpen ? navLinks : [], (item) => item.id, {
    //     ref: transRef,
    //     unique: true,
    //     trail: 400 / navLinks.length,
    //     // item,
    //     // id,
    //     // name,
    //     // url,
    //     // item,
    //     // delay: isOpen ? i * delayValue : navLinks.length * delayValue - i * delayValue,
    //     // height: isOpen ? 'auto' : 0,
    //     from: {
    //         // position: 'absolute',
    //         // overflow: 'hidden',
    //         height: 0,
    //     },
    //     enter: { height: 'auto' },
    //     leave: { height: 0 },
    // })

    // {
    // const showMenuTransition = useTransition(isOpen, null, {
    // config: config.native,
    // items: show,
    // from: { position: 'absolute', overflow: 'hidden', height: 0 },
    // enter: [{ height: 'auto' }],
    // leave: { height: 0 },
    // }
    // )
    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    // useChain(isOpen ? [springRef, transRef] : [transRef, springRef], [0, isOpen ? 'auto' : 0])
    // [springRef, transitionRef],
    // [0, 0.5],
    // [0, isOpen ? 0.1 : 0.6],
    // console.log('Open: ' + isOpen)
    // console.log(navLinks)
    // console.log('Show: ' + show)
    return (
        <animated.div
            onClick={handleMenuClick}
            sx={{
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
                // backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backgroundColor: '#000',
            }}
            style={OffCanvasAnimation}
        >
            <Flex
                as='nav'
                sx={{
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'opacity 750ms ease-in',
                    opacity: isOpen ? 0.9 : 0,
                }}
            >
                {navLinks.map((item) => {
                    return (
                        <AniLink
                            fade
                            duration={0.35}
                            // direction='left'
                            // color={color}
                            // bg={color}
                            key={item.id}
                            to={item.url}
                            sx={{
                                color: 'offWhite',
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
                            }}
                            onClick={handleMenuClick}
                        >
                            {item.label}
                        </AniLink>
                    )
                })}
            </Flex>

            {/* <animated.div sx={{ ...showMenuTransition }}>
                <OffCanvasMenu isOpen={isOpen} handleMenuClick={handleMenuClick} />
            </animated.div> */}
        </animated.div>
    )
}

export default OffCanvas
