/** @jsxImportSource theme-ui */
import { useStaticQuery, graphql } from 'gatsby'
import Header from './template/header'
import Footer from './template/footer'

if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, pageContext }) => {
    // console.log(pageContext.pageStyle)
    let pageStyle = pageContext.pageStyle
    if (typeof pageStyle === 'undefined') {
        pageStyle = 'white'
    }

    const {
        wp: {
            generalSettings: { title },
        },
        wpMenu: { menuItems },
    } = useStaticQuery(graphql`
        query LayoutQuery {
            wp {
                generalSettings {
                    title
                }
            }
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
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
                variant: 'layout.main.' + pageStyle,
            }}
        >
            <Header pageStyle={pageStyle} menuItems={menuItems.nodes} />
            <main>{children}</main>
            {typeof pageStyle !== 'undefined' && <Footer siteTitle={title} pageStyle={pageStyle} />}
        </div>
    )
}

export default Layout
