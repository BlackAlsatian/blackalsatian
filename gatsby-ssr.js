import OffCanvasMenuProvider from './src/components/offCanvasMenuProvider'
// import React from 'react'
// import Layout from './src/components/layout'
//
// export const wrapPageElement = ({ element, props }) => {
//     return <Layout {...props}>{element}</Layout>
// }
import './src/assets/css/styles.css'
import '@fontsource/montserrat/latin-200.css'
import '@fontsource/montserrat/latin-400.css'
import '@fontsource/montserrat/latin-400-italic.css'
import '@fontsource/montserrat/latin-700.css'
import '@fontsource/montserrat/latin-800.css'
import '@fontsource/montserrat/latin-900.css'

export const wrapRootElement = OffCanvasMenuProvider
