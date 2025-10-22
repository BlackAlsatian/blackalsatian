import './src/assets/scss/app.scss'
import PageStyleProvider from './src/components/pageStyleProvider'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: 'en' })
    setHeadComponents([
        // Preconnects help reduce connection setup time for analytics
        <link key="preconnect-gtm" rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />,
        <link key="preconnect-ga" rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />,
    ])
}

export const wrapRootElement = PageStyleProvider
