/* eslint-disable no-console */
import React from 'react'

const jsEverywhere = 'https://c.tenor.com/6ahD8NlN2kUAAAAM/toy-story.gif'

const jsEverywhereStyle = `max-width: 400px; color: #ffffff; font-style: italic; text-decoration: underline; font-weight: bolder; font-size: 24px; text-shadow: 1px 1px 3px black; text-transform: uppercase; text-align: center; letter-spacing: 1px; background-image: url(${jsEverywhere}); background-repeat: none; background-size: cover; padding: 30px 15px 200px 180px;`

const callOutBoxStyling =
    'background: #f5df4d; padding:3px 5px; font-size: 24px; font-weight: bolder; color: #111827; letter-spacing: 1px'

const signatureStyling = 'background: #0EA5E9; padding:5px 8px; font-size: 14px; font-weight: bolder; color: #ffffff'

export const easterEgg = () => {
    return (
        <>
            {console.log('%cJavaScript, everywhere...', jsEverywhereStyle)}
            {console.log(' ')}
            {console.log('%cThinking out \n\r of the [dog] box.', callOutBoxStyling)}
            {console.log('%c🤙 call us!', callOutBoxStyling)}
            {console.log(' ')}
            {console.log("%cdon't click >> https://bjorn.africa", signatureStyling)}
            {console.log(' ')}
        </>
    )
}
