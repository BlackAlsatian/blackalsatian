/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'
import { useContext } from 'react'
import { PageStyleContext } from './pageStyleProvider'

const MenuIcon = () => {
    const { handleBurgerMenuClick, isOpen } = useContext(PageStyleContext)
    return (
        <button
            onClick={() => {
                handleBurgerMenuClick()
            }}
            sx={{
                variant: 'buttons.menuIcon',
            }}
            aria-label='Open Offcanvas Menu'
        >
            <Box
                as='svg'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 100 80'
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen && 'white',
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 5px 5px  rgba(0, 0, 0, 0.05)',
                }}
            >
                <rect width='100' height='20' rx='8'></rect>
            </Box>
            {/* <svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20" rx="8"></rect>
</svg> */}
            <Box
                as='svg'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 100 80'
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen && 'white',
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    opacity: isOpen ? '0' : '1',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.05)',
                }}
            >
                <rect width='100' height='20' rx='8'></rect>
            </Box>
            <Box
                as='svg'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 100 80'
                sx={{
                    width: 6,
                    height: 'px',
                    background: isOpen && 'white',
                    borderRadius: '5px',
                    position: 'relative',
                    ml: 'auto',
                    transformOrigin: '1px',
                    transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
                    transition: 'opacity 300ms, transform 300ms',
                    boxShadow: '0 0 5px 5px  rgba(0, 0, 0, 0.05)',
                }}
            >
                <rect width='100' height='20' rx='8'></rect>
            </Box>
        </button>
    )
}

export default MenuIcon

{
    /* <svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20" rx="8"></rect>
    <rect y="30" width="100" height="20" rx="8"></rect>
    <rect y="60" width="100" height="20" rx="8"></rect>
</svg> */
}
