import React from 'react'
import { Link } from 'gatsby'
// import { useLocation } from '@reach/router'
// import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { isBrowser } from '../helpers'
import CookieCard from './cookieCard'

// function isBrowser() {
//     return typeof window !== 'undefined'
// }

function getValue(key, defaultValue) {
    return isBrowser() && window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : defaultValue
}

function setValue(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

function useStickyState(defaultValue, key) {
    const [value, setter] = React.useState(() => {
        return getValue(key, defaultValue)
    })

    React.useEffect(() => {
        setValue(key, value)
    }, [key, value])

    return [value, setter]
}

const CookieConsent = ({ visible }) => {
    const exdays = 90
    const theDate = new Date()
    theDate.setTime(theDate.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + theDate.toUTCString()

    const [bannerHidden, setBannerHidden] = useStickyState(false, 'consentCookieHidden')

    const SetCookie = () => {
        document.cookie = 'blackals-cookie-notice=true; ' + expires + '; SameSite=Lax; Secure'
        setBannerHidden(true)
    }
    const UnSetCookie = () => {
        document.cookie = 'blackals-cookie-notice=false; ' + expires + '; SameSite=Lax; Secure'
        setBannerHidden(false)
    }

    return (
        <>
            {!bannerHidden && (
                <CookieCard
                    header='Cookie Policy'
                    message='We use cookies to personalize content and analyze our website performance to improve your experience.'
                    onClick={SetCookie}
                    button='Accept'
                    privacyUrl='/privacy-policy/'
                    privacyText='Privacy Policy'
                    visible={visible}
                />
            )}
            {bannerHidden && (
                <CookieCard
                    header='Reset Policy'
                    message="This is only for testing purposes and won't be in the final build."
                    onClick={UnSetCookie}
                    button='Revoke'
                    visible={visible}
                />
            )}
        </>
    )
}

export default CookieConsent
