// provides a random ID (handy for keys in lists)
export function randomID() {
    return Math.random().toString(36).substring(7)
}

// calculates a random height for the masonry layout tiles
export function getHeight() {
    return Math.floor(Math.random() * 400 + 150)
}

// temporary hacky way of changing font colours for specific pages
export function handleColor(path) {
    if (
        path === '/blog/' ||
        path === '/blog/2/' ||
        path === '/blog/3/' ||
        path === '/blog/4/' ||
        path === '/blog/5/' ||
        path === '/blog/6/' ||
        path === '/blog/7/' ||
        path === '/blog/8/' ||
        path === '/blog/9/' ||
        path.includes('contact') ||
        path.includes('services') ||
        path.includes('terms-of-use') ||
        path.includes('privacy-policy')
    ) {
        return 'black'
    } else {
        return 'white'
    }
}

// temporary hacky way of changing background colours for specific pages
export function handleBgColor(path) {
    if (path.includes('portfolio')) {
        return 'black'
    } else if (path.includes('contact') || path.includes('terms-of-use') || path.includes('privacy-policy')) {
        return 'yellow'
    } else {
        return 'white'
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
