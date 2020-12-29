/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
// import { motion, AnimatePresence } from 'framer-motion'
import { handleColor } from './helpers'
// import { TransitionPortal } from 'gatsby-plugin-transition-link'

import Header from './template/header'
import Footer from './template/footer'

const Layout = ({ children, location }) => {
    // console.log(location.pathname)
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
            {/* <TransitionPortal> */}
            <Header
                color={handleColor(location.pathname)}
                uri={location.pathname}
            />
            {/* </TransitionPortal> */}
            {/* <Header /> */}
            {/* <AnimatePresence>
                <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    {children}
                </motion.main>
            </AnimatePresence> */}
            <main>{children}</main>
            <Footer siteTitle={title} />
        </div>
    )
}

export default Layout
