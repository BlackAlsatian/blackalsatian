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
        // case 'error':
        //   return <Error text={text} />;
        default:
            return 'white'
    }
}
