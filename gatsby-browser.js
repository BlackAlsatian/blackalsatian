import './src/assets/scss/app.scss'
import PageStyleProvider from './src/components/pageStyleProvider'

// export const wrapRootElement = OffCanvasMenuProvider
export const wrapRootElement = PageStyleProvider

// export const wrapRootElement = (props) => {
//     return (
//         <OffCanvasMenuProvider>
//             {/* <OffCanvasMenuProvider>{element}</OffCanvasMenuProvider> */}
//             <OffCanvasMenuProvider {...props} />
//         </OffCanvasMenuProvider>
//     )
// }

const transitionDelay = 250

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => {
            // console.log('scroll to top')
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // feel free to use or not
            })
        }, transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location) || [0, 0]
        const top = savedPosition[1]
        window.setTimeout(() => {
            // console.log('scroll to saved position')
            window.scrollTo({
                top,
                behavior: 'smooth',
            })
        }, transitionDelay)
    }
    return false
}

// import loadable from '@loadable/component'
// export const replaceHydrateFunction = () => (element, container, callback) => {
//     loadable.loadableReady(() => {
//         ReactDOM.render(element, container, callback)
//     })
// }
