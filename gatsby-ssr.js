import './src/assets/scss/app.scss'
import PageStyleProvider from './src/components/pageStyleProvider'

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: 'en' })
}

export const wrapRootElement = PageStyleProvider
