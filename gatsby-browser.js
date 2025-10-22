import './src/assets/scss/app.scss'
// Font files imported via JS to avoid Sass @import deprecation warnings
import '@fontsource/montserrat/latin-200.css'
import '@fontsource/montserrat/latin-400-italic.css'
import '@fontsource/montserrat/latin-400.css'
import '@fontsource/montserrat/latin-700.css'
import '@fontsource/montserrat/latin-900.css'
import { easterEgg } from './src/components/easterEgg'
import PageStyleProvider from './src/components/pageStyleProvider'

easterEgg()

// Control scroll position on route changes.
// - For normal navigations, scroll to top.
// - For back/forward, restore the saved position.
// - For hash links (e.g. /page#section), scroll to the element if it exists.
export const shouldUpdateScroll = ({
	routerProps: { location },
	prevRouterProps,
	getSavedScrollPosition,
}) => {
	// Handle hash navigation: defer to element if present
	if (location && location.hash) {
		const id = decodeURIComponent(location.hash.substring(1))
		const el = typeof document !== 'undefined' && document.getElementById(id)
		if (el) {
			// Defer to ensure DOM is ready
			window.setTimeout(() => {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}, 0)
			return false
		}
		// If the element isn't found, fall through to default behavior
	}

	const savedPosition = getSavedScrollPosition(location)

	// If we have a saved position (likely back/forward), restore it; otherwise go to top
	window.setTimeout(() => {
		if (savedPosition) {
			const [x, y] = savedPosition
			window.scrollTo(x, y)
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
		}
	}, 0)

	// Return false to prevent Gatsby from handling scroll automatically
	return false
}

export const wrapRootElement = PageStyleProvider

// Mirror the GTM plugin's SPA behavior: push route-change events to dataLayer
export const onRouteUpdate = ({ location, prevLocation }) => {
	if (typeof window === 'undefined') return
	// Skip the very first load to avoid double-counting with GTM's initial pageview
	if (!prevLocation) return
	window.dataLayer = window.dataLayer || []
	window.dataLayer.push({
		event: 'gatsby-route-change',
		path: location && location.pathname ? location.pathname : window.location.pathname,
	})
}
