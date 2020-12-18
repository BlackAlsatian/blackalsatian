/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'
import { handleHeaderColor } from './helpers'

import Header from './template/header'
import Footer from './template/footer'

const duration = 0
const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: duration,
            delay: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: duration },
    },
}

const Layout = ({ children, location }) => {
    console.log(location.pathname)
    const {
        wp: {
            generalSettings: { title },
        },
    } = useStaticQuery(graphql`
        query LayoutQuery {
            wp {
                generalSettings {
                    title
                    description
                }
            }
        }
    `)
    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                // maxWidth: '100vw',
            }}
        >
            <Header color={handleHeaderColor(location.pathname)} />
            {/* <Header /> */}
            <AnimatePresence>
                <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer siteTitle={title} />
        </div>
    )
}

export default Layout
