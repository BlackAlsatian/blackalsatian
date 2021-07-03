// provides a random ID (handy for keys in lists)
export function randomID() {
    return Math.random().toString(36).substring(7)
}

// calculates a random height for the masonry layout tiles
export function getHeight() {
    return Math.floor(Math.random() * 400 + 250)
}

// temporary hacky way of changing error text colours for specific pages
export function handleErrorColor(backgroundColor) {
    if (backgroundColor === 'white' || backgroundColor === 'yellow') {
        return 'red'
    } else {
        return 'yellow'
    }
}

// returns false if a number is even (to use on Services page for alternating services block layouts)
export function isOdd(number) {
    if (number % 2 == 0) {
        return false
    } else {
        return true
    }
}

// RegEx for phone number validation
export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const emailRegExp = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/

// Fire Google Analytics tag
export const sendGA = (eventName, context, tags) => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Development')
        console.log('GTag fired!')
        console.log('Event: ' + eventName, 'Type: ' + context, 'Info: ' + tags)
    } else {
        // console.log('Production')
        if (typeof window !== 'undefined') {
            // window.gtag('event', context)
            window.dataLayer.push({
                event: eventName,
                leadType: context,
                withTags: tags,
            })
        }
    }
}

// Get lead info
export const leadInfo = () => {
    let referrerUrl = typeof window !== 'undefined' && window.location.origin
    let pathUrl = typeof window !== 'undefined' && window.location.pathname

    const leadInfo = { referrerUrl, pathUrl }

    return leadInfo
}

// check if clientside
export const isBrowser = () => {
    return typeof window !== 'undefined'
}
