export function randomID() {
    return Math.random().toString(36).substring(7)
}

export function getHeight() {
    return Math.floor(Math.random() * 400 + 200)
}

export function handleColor(path) {
    if (
        path.includes('blog') ||
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

export function handleBgColor(path) {
    if (path.includes('portfolio')) {
        return 'black'
    } else if (path.includes('contact') || path.includes('terms-of-use') || path.includes('privacy-policy')) {
        return 'yellow'
    } else {
        return 'white'
    }
}
