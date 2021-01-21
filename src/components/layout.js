/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import LazyLoad from 'react-lazyload'
import Header from './template/header'
import Footer from './template/footer'
import PlaceholderLoader from '../components/placeholderLoader'
// import { useThemeUI } from 'theme-ui'

if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, pageContext, location, custom404 }) => {
    console.log(pageContext)
    // const context = useThemeUI()
    // console.log(context)
    //     const defaultColorScheme = {
    //         navVariant: 'black',
    //         bodyVariant: 'white',
    //         footerVariant: 'black',
    //     }
    //
    //     const notFoundColorScheme = {
    //         navVariant: 'black',
    //         bodyVariant: 'white',
    //         footerVariant: 'white',
    //     }

    // let siteColorScheme = pageContext.colorScheme
    const pathName = location.pathname
    let pageStyle = pageContext.style
    if (typeof pageStyle === 'undefined') {
        pathName.includes('/portfolio')
            ? (pageStyle = 'black')
            : pathName.includes('/blog') && pathName.length >= 10
            ? (pageStyle = 'postwhite')
            : (pathName.includes('/blog') && pathName.length <= 10) || custom404
            ? (pageStyle = 'white')
            : pathName.includes('/contact')
            ? (pageStyle = 'yellow')
            : pathName.includes('/terms-of-use') || pathName.includes('/privacy-policy')
            ? (pageStyle = 'red')
            : (pageStyle = 'default')
    }
    // if (typeof pageStyle === 'undefined') {
    //     pageStyle = 'black'
    // }
    // if (custom404) {
    //     pageStyle = 'white'
    // }

    //     if (typeof siteColorScheme === 'undefined') {
    //         siteColorScheme = defaultColorScheme
    //     }
    //
    //     if (custom404) {
    //         siteColorScheme = notFoundColorScheme
    //     }

    // const pageTitle = pageContext.title || ''

    // const pagePath = location.pathname
    // const { navVariant, footerVariant } = siteColorScheme
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
            <Header
                pageStyle={pageStyle}
                // sx={{
                //     variant: 'layout.' + pageStyle + '.header',
                // }}
            />
            <main
                sx={{
                    variant: 'layout.main.' + pageStyle,
                }}
            >
                {children}
            </main>
            {!custom404 && (
                <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                    <Footer
                        siteTitle={title}
                        pageStyle={pageStyle}
                        // sx={{
                        //     variant: 'layout.' + pageStyle + '.footer',
                        // }}
                    />
                </LazyLoad>
            )}
        </div>
    )
}

export default Layout
