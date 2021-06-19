/** @jsxImportSource theme-ui */

import { useStaticQuery, graphql } from 'gatsby'
import Header from './template/header'
import Footer from './template/footer'
import GoToTopButton from './goToTopButton'
import { useHasScrolled } from './hooks/useHasScrolled'

// if (typeof window !== 'undefined') {
//     // Make scroll behavior of internal links smooth
//     // eslint-disable-next-line global-require
//     require('smooth-scroll')('a[href*="#"]')
// }

const Layout = ({ children, pageContext }) => {
    let pageStyle = pageContext.pageStyle
    if (typeof pageStyle === 'undefined') {
        pageStyle = 'white'
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
                }
            }
        }
    `)
    const scroll = useHasScrolled(1500)
    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                overflow: 'hidden',
                variant: 'layout.main.' + pageStyle,
            }}
            id='topOfPage'
        >
            <Header pageStyle={pageStyle} />
            <main>{children}</main>
            {typeof pageStyle !== 'undefined' && <Footer siteTitle={title} pageStyle={pageStyle} />}
            <GoToTopButton visible={scroll} />
        </div>
    )
}

export default Layout
