// provides a random ID (handy for keys in lists)
export function randomID() {
    return Math.random().toString(36).substring(7)
}

// calculates a random height for the masonry layout tiles
export function getHeight() {
    return Math.floor(Math.random() * 400 + 300)
}

// temporary hacky way of changing error text colours for specific pages
export function handleErrorColor(backgroundColor) {
    return getFormFeedbackPalette({ surfaceColor: backgroundColor }).fieldErrorColor
}

const FORM_COLOR_VALUES = {
    black: '#111827',
    white: '#ffffff',
    yellow: '#f5df4d',
    blue: '#0060b4',
    red: '#d93d33',
    offWhite: '#edf2f7',
    gray: '#939597',
}

function parseHexColor(color) {
    const hex = color.replace('#', '')

    if (hex.length === 3) {
        return {
            r: parseInt(hex[0] + hex[0], 16),
            g: parseInt(hex[1] + hex[1], 16),
            b: parseInt(hex[2] + hex[2], 16),
        }
    }

    if (hex.length === 6) {
        return {
            r: parseInt(hex.slice(0, 2), 16),
            g: parseInt(hex.slice(2, 4), 16),
            b: parseInt(hex.slice(4, 6), 16),
        }
    }

    return null
}

function parseRgbColor(color) {
    const matches = color.match(/\d+(\.\d+)?/g)

    if (!matches || matches.length < 3) {
        return null
    }

    return {
        r: Number(matches[0]),
        g: Number(matches[1]),
        b: Number(matches[2]),
    }
}

function getRgbColor(color) {
    if (!color) {
        return null
    }

    const resolvedColor = FORM_COLOR_VALUES[color] || color

    if (resolvedColor.startsWith('#')) {
        return parseHexColor(resolvedColor)
    }

    if (resolvedColor.startsWith('rgb')) {
        return parseRgbColor(resolvedColor)
    }

    return null
}

function getRelativeLuminance(value) {
    const channel = value / 255

    if (channel <= 0.03928) {
        return channel / 12.92
    }

    return ((channel + 0.055) / 1.055) ** 2.4
}

export function getContrastingTextColor(backgroundColor) {
    const rgb = getRgbColor(backgroundColor)

    if (!rgb) {
        return backgroundColor === 'white' || backgroundColor === 'yellow' || backgroundColor === 'offWhite'
            ? 'black'
            : 'white'
    }

    const luminance =
        0.2126 * getRelativeLuminance(rgb.r) +
        0.7152 * getRelativeLuminance(rgb.g) +
        0.0722 * getRelativeLuminance(rgb.b)

    return luminance > 0.55 ? 'black' : 'white'
}

export function getFormFeedbackPalette({ surfaceColor = 'white', actionColor } = {}) {
    const resolvedSurfaceColor = surfaceColor || 'white'
    const resolvedActionColor =
        actionColor || (getContrastingTextColor(resolvedSurfaceColor) === 'black' ? 'black' : 'white')
    const fieldErrorColor =
        resolvedSurfaceColor === 'yellow'
            ? 'red'
            : getContrastingTextColor(resolvedSurfaceColor) === 'black'
            ? 'blue'
            : 'yellow'

    return {
        actionColor: resolvedActionColor,
        actionTextColor: getContrastingTextColor(resolvedActionColor),
        errorAlertColor: fieldErrorColor,
        errorAlertTextColor: getContrastingTextColor(fieldErrorColor),
        fieldErrorColor,
        surfaceColor: resolvedSurfaceColor,
        surfaceTextColor: getContrastingTextColor(resolvedSurfaceColor),
        successAlertColor: resolvedActionColor,
        successAlertTextColor: getContrastingTextColor(resolvedActionColor),
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
export const sendGA = (eventName, context, tags, inBrowser) => {
    if (process.env.NODE_ENV !== 'production') {
        // console.log('Development')
        // console.log('GTag fired!')
        // console.log('Event: ' + eventName, 'Type: ' + context, 'Info: ' + tags)
    } else {
        // console.log('Production')
        // if (typeof window !== 'undefined') {
        if (inBrowser) {
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
export const leadInfo = (inBrowser) => {
    // let referrerUrl = typeof window !== 'undefined' && window.location.origin
    // let pathUrl = typeof window !== 'undefined' && window.location.pathname
    let referrerUrl = inBrowser && window.location.origin
    let pathUrl = inBrowser && window.location.pathname

    const leadInfo = { referrerUrl, pathUrl }

    return leadInfo
}

// check if clientside
export const isBrowser = () => {
    return typeof window !== 'undefined'
}

// strip html
export const removeTags = (str) => {
    if (str === null || str === '') return false
    else str = str?.toString()

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str?.replace(/(<([^>]+)>)/gi, '')
}
