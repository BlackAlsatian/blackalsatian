import './src/assets/scss/app.scss'
import { easterEgg } from './src/components/easterEgg'
import PageStyleProvider from './src/components/pageStyleProvider'

easterEgg()

export const wrapRootElement = PageStyleProvider
