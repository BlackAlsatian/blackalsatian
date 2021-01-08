/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export default function MenuIcon({ handleBurgerMenuClick, isOpen, color }) {
    return (
        <button
            onClick={handleBurgerMenuClick}
            sx={{
                variant: 'buttons.menuIcon',
                // visibility: isOpen ? 'hidden' : null,
            }}
        >
            <Box
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen ? 'white' : `${color}`,
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 5px 5px  rgba(0, 0, 0, 0.05)',
                }}
            ></Box>
            <Box
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen ? 'white' : `${color}`,
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    opacity: isOpen ? '0' : '1',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.05)',
                }}
            ></Box>
            <Box
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen ? 'white' : `${color}`,
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 5px 5px  rgba(0, 0, 0, 0.05)',
                }}
            ></Box>
        </button>
    )
}
