/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function MenuIcon({ handleBurgerMenuClick, isOpen, color }) {
    return (
        <button
            onClick={handleBurgerMenuClick}
            sx={{
                variant: 'buttons.menuIcon',
                // visibility: isOpen ? 'hidden' : null,
            }}
        >
            <div
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen ? 'white' : `${color}`,
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    // transform: ${({isOpen}) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')}
                    transformOrigin: '1px',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'opacity 300ms, transform 300ms',
                }}
            ></div>
            <div
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen ? 'white' : `${color}`,
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    // opacity: ${({isOpen}) => (isOpen ? '0' : '1')}
                    transformOrigin: '1px',
                    opacity: isOpen ? '0' : '1',
                    transition: 'opacity 300ms, transform 300ms',
                }}
            ></div>
            <div
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen ? 'white' : `${color}`,
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    // transform: ${({isOpen}) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')}
                    transformOrigin: '1px',
                    transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
                    transition: 'opacity 300ms, transform 300ms',
                }}
            ></div>
        </button>
    )
}
