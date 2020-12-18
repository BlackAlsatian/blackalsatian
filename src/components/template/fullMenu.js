/** @jsx jsx */
import { jsx } from 'theme-ui'
import Nav from '../nav'
import { motion } from 'framer-motion'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
}

const FullMenu = ({ isOpen }) => {
    return (
        <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.4 }}
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                top: 0,
                left: 0,
                right: 0,
                variant: 'layout.header.openMenu',
                // transition: 'transform 300ms',
                // transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
        >
            <Nav />
        </motion.div>
    )
}

export default FullMenu
