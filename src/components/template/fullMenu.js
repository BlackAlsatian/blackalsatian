/** @jsx jsx */
import { jsx } from 'theme-ui'
// import { Link } from 'gatsby'
// import { useState } from 'react'
import Nav from '../nav'

const FullMenu = ({ isOpen }) => {
    //     const [isOpen, setIsOpen] = useState(false)
    //
    //     const handleBurgerMenuClick = () => {
    //         setIsOpen(!isOpen)
    //     }
    //
    //     console.log(isOpen)
    return (
        <div
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'screenWidth',
                top: 0,
                left: 0,
                right: 0,
                variant: 'layout.header.openMenu',
                transition: 'transform 300ms',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
        >
            <Nav />
            {/* <div
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    alignItems: 'center',
                    display: ['flex', 'flex', 'none'],
                }}
            >
                <MenuIcon
                    handleBurgerMenuClick={handleBurgerMenuClick}
                    isOpen={isOpen}
                />
                <span
                    sx={{
                        position: 'absolute',
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: 'hidden',
                        clip: 'rect(0, 0, 0, 0)',
                        whiteSpace: 'nowrap',
                        borderWidth: 0,
                    }}
                >
                    Open main menu
                </span>
            </div> */}
        </div>
    )
}

export default FullMenu
