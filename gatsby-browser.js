import jsEverywhere from './src/assets/images/javascript-everywhere.jpg'
import './src/assets/scss/app.scss'
import PageStyleProvider from './src/components/pageStyleProvider'

console.log(
    '%cJavaScript, everywhere...',
    `max-width: 400px; color: #ffffff; font-style: italic; text-decoration: underline; font-weight: bolder; font-size: 24px; text-shadow: 1px 1px 3px black; text-transform: uppercase; text-align: center; letter-spacing: 1px; background-image: url(${{
        jsEverywhere,
    }}); background-repeat: none; background-size: cover; padding: 15px 15px 194px 200px;`,
)
console.log(
    '%cThinking out \n\r of the [dog] box.',
    'background: #f5df4d; padding:3px 5px; font-size: 24px; font-weight: black; color: #111827; letter-spacing: 1px',
)
console.log('%c🤙 call us!', 'background: #f5df4d; padding:3px 5px; font-size: 24px; font-weight: bold; color: #111827')
console.log(' ')
console.log(
    '%chttps://bjorn.africa',
    'background: #0EA5E9; padding:3px 5px; font-size: 13px; font-weight: bold; color: #ffffff',
)
console.log(' ')

export const wrapRootElement = PageStyleProvider
