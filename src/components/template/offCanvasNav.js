/** @jsxImportSource theme-ui */
import { animated, config, useSpring } from '@react-spring/web'
import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { Flex } from 'theme-ui'
import { PageStyleContext } from '../pageStyleProvider'

const OffCanvas = ({ navLinks }) => {
    const { isOpen, handleMenuItemClick } = useContext(PageStyleContext)

    const OffCanvasAnimation = useSpring({
        opacity: isOpen ? 0.9 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        from: {
            opacity: 0,
            transform: 'translateX(100%)',
        },
        config: config.wobbly,
    })
    return (
        <animated.div
            onClick={() => {
                handleMenuItemClick()
            }}
            sx={{
                variant: 'divs.offcanvas',
            }}
            style={OffCanvasAnimation}
        >
            <Flex
                sx={{
                    opacity: isOpen ? 0.9 : 0,
                }}
            >
                {navLinks.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            to={item.url}
                            sx={{
                                fontSize: [6, 7, 9],
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
export default React.memo(OffCanvas)
