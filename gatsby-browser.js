import 'typeface-montserrat'
import './src/assets/css/styles.css'
// import React from 'react'
// import Layout from './src/components/layout'

// // custom typefaces

// export const wrapPageElement = ({ element, props }) => {
//     return <Layout {...props}>{element}</Layout>
// }
const transitionDelay = 0

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), transitionDelay)
    }
    return false
}

// Adjust if you need to add a delay before scrolling
// const transitionDelay = 0
//
// export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
//     if (location.action === 'PUSH') {
//         window.setTimeout(() => {
//             // console.log('scroll to top')
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth', // feel free to use or not
//             })
//         }, transitionDelay)
//     } else {
//         const savedPosition = getSavedScrollPosition(location) || [0, 0]
//         const top = savedPosition[1]
//         window.setTimeout(() => {
//             // console.log('scroll to saved position')
//             window.scrollTo({
//                 top,
//                 behavior: 'smooth',
//             })
//         }, transitionDelay)
//     }
//     return false
// }

// export const onPreRouteUpdate = ({ location, prevLocation }) => {
//     console.log('Gatsby started to change location to', location.pathname)
//     console.log('Gatsby started to change location from', prevLocation ? prevLocation.pathname : null)
// }
// const React = require('react')
// const Layout = require('./src/components/template/layout')
// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//     console.log('new pathname', location.pathname)
//     console.log('old pathname', prevLocation ? prevLocation.pathname : null)
// }
// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//     return <Layout {...props}>{element}</Layout>
// }
