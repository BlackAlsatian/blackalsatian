import './src/assets/scss/app.scss'
import { easterEgg } from './src/components/easterEgg'
import PageStyleProvider from './src/components/pageStyleProvider'

easterEgg()

// export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
//     const currentPosition = getSavedScrollPosition(location)

//     window.scrollTo(...(currentPosition || [0, 0]))

//     return false
// }

export const wrapRootElement = PageStyleProvider
