export function randomID() {
    return Math.random().toString(36).substring(7)
}

// export function handleHeaderColor(path, color) {
//     if (path === '/about/') {
//         return (color = 'black')
//     }
// }
export function handleHeaderColor(path) {
    console.log(path)
    switch (path) {
        case '/about/':
            return 'black'
        case '/blog/':
            return 'black'
        case '/contact/':
            return 'black'
        // case '/services/website-design/':
        //     return 'white'
        // case '/services/online-marketing/':
        //     return 'white'
        // case '/services/search-engine-marketing-seo/':
        //     return 'white'
        // case '/services/lead-generation/':
        //     return 'white'
        // case '/services/copywriting/':
        //     return 'white'
        // case '/services/graphic-design/':
        //     return 'white'
        // case '/services/web-hosting/':
        //     return 'white'
        // case '/services/personalised-email/':
        //     return 'white'
        // case '/services/diy-websites/':
        //     return 'white'
        default:
            return 'white'
    }
}
