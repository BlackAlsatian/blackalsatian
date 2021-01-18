/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import LazyLoad from 'react-lazyload'
import Header from './template/header'
import Footer from './template/footer'
import PlaceholderLoader from '../components/placeholderLoader'

if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, pageContext, custom404 }) => {
    const defaultColorScheme = {
        navVariant: 'white',
        bodyVariant: 'white',
        footerVariant: 'white',
    }

    let siteColorScheme = pageContext.colorScheme

    if (typeof siteColorScheme === 'undefined') {
        siteColorScheme = defaultColorScheme
    }

    const pageTitle = pageContext.title || ''
    const { navVariant, bodyVariant, footerVariant } = siteColorScheme
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
                backgroundColor:
                    pageTitle === 'Portfolio'
                        ? 'black'
                        : pageTitle === 'Contact'
                        ? 'yellow'
                        : pageTitle === 'Terms of Use' || pageTitle === 'Privacy Policy'
                        ? 'red'
                        : bodyVariant,
                overflow: 'hidden',
            }}
        >
            <Header navcolor={custom404 || pageTitle.includes('Contact') ? 'black' : navVariant} />
            <main pagecontext={pageContext}>{children}</main>
            {!custom404 && (
                <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                    <Footer
                        siteTitle={title}
                        pageTitle={pageTitle}
                        footercolor={custom404 || pageTitle.includes('404:') ? 'white' : footerVariant}
                    />
                </LazyLoad>
            )}
        </div>
    )
}

export default Layout
