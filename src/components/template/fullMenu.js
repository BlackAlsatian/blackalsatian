/** @jsx jsx */
import { jsx } from 'theme-ui'
import Nav from '../nav'

const FullMenu = ({ isOpen }) => {
    return (
        <div
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                top: 0,
                left: 0,
                right: 0,
                variant: 'layout.header.openMenu',
                transition: 'transform 300ms',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
        >
            <Nav />
        </div>
    )
}

export default FullMenu
