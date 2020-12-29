export function randomID() {
    return Math.random().toString(36).substring(7)
}

export function getHeight() {
    return Math.floor(Math.random() * 400 + 200)
}
export function handleColor(path) {
    // console.log(path)
    switch (path) {
        // case '/about/':
        //     return {
        //         colors: {
        //             nav: 'black',
        //             variant: 'layout.about',
        //             footer: {
        //                 background: 'yellow',
        //                 color: 'black',
        //             },
        //         },
        //     }
        case '/about/':
            return 'white'
        case '/blog/':
            return 'black'
        case '/blog/2/':
            return 'black'
        case '/blog/3/':
            return 'black'
        case '/blog/4/':
            return 'black'
        case '/blog/5/':
            return 'black'
        case '/blog/6/':
            return 'black'
        case '/contact/':
            return 'white'
        case '/services/':
            return 'black'
        case '/services/website-design/':
            return 'black'
        case '/services/online-marketing/':
            return 'black'
        case '/services/search-engine-optimisation-seo/':
            return 'black'
        case '/services/lead-generation/':
            return 'black'
        case '/services/copywriting/':
            return 'black'
        case '/services/graphic-design/':
            return 'black'
        case '/services/web-hosting/':
            return 'black'
        case '/services/personalised-email/':
            return 'black'
        case '/services/diy-websites/':
            return 'black'
        default:
            return 'white'
    }
}
