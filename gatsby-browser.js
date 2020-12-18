import React from 'react'
import Layout from './src/components/layout'

// // custom typefaces
import 'typeface-montserrat'

const transitionDelay = 250

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay,
        )
    }
    return false
}
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
