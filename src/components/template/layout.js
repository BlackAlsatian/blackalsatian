/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { handleHeaderColor } from '../helpers'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, path }) => {
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
            <Header color={handleHeaderColor(path)} />
            <main
                sx={
                    {
                        // width: '100vw',
                        // flex: '1 1 auto',
                    }
                }
            >
                {children}
            </main>
            <Footer siteTitle={title} />
        </div>
    )
}

export default Layout
