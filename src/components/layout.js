/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './template/header'
import Footer from './template/footer'

if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, pageContext, location }) => {
    const pathName = location.pathname
    let pageStyle = pageContext.style
    if (typeof pageStyle === 'undefined') {
        pathName.includes('/portfolio')
            ? (pageStyle = 'black')
            : pathName.includes('/blog') && pathName.length >= 10
            ? (pageStyle = 'postwhite')
            : (pathName.includes('/blog') && pathName.length <= 10) || typeof pageStyle === 'undefined'
            ? (pageStyle = 'white')
            : pathName.includes('/contact')
            ? (pageStyle = 'yellow')
            : pathName.includes('/terms-of-use') || pathName.includes('/privacy-policy')
            ? (pageStyle = 'red')
            : (pageStyle = 'default')
    }

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
                overflow: 'hidden',
                variant: 'layout.' + pageStyle,
            }}
        >
            <Header pathName={pathName} />
            <main
                sx={{
                    variant: 'layout.main.' + pageStyle,
                }}
            >
                {children}
            </main>
            {typeof pageStyle !== 'undefined' && <Footer siteTitle={title} pageStyle={pageStyle} />}
        </div>
    )
}

export default Layout
