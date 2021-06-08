/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import { useContext } from 'react'
import { OffCanvasMenuContext } from '../offCanvasMenuProvider'
import { animated, config, useSpring } from '@react-spring/web'

const OffCanvas = ({ navLinks }) => {
    const { isOpen, handleMenuItemClick } = useContext(OffCanvasMenuContext)

    const OffCanvasAnimation = useSpring({
        opacity: isOpen ? 0.9 : 0,
        transform: isOpen ? `translateX(0)` : `translateX(100%)`,
        from: {
            opacity: 0,
            transform: `translateX(100%)`,
        },
        config: config.wobbly,
    })
    return (
        <animated.div
            onClick={() => {
                handleMenuItemClick()
            }}
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
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
            }}
            style={OffCanvasAnimation}
        >
            <Flex
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
                        <Link
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
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </Flex>
        </animated.div>
    )
}
export default OffCanvas
