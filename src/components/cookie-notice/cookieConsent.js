import { useEffect, useState } from 'react'
// import { useLocation } from '@reach/router'
// import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
// import { isBrowser } from '../helpers'
import CookieCard from './cookieCard'

// A SSR-safe sticky state that reads from localStorage after mount
function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(defaultValue)

    // Load initial value from localStorage after mount (browser only)
    useEffect(() => {
        if (typeof window === 'undefined') return
        try {
            const stored = window.localStorage.getItem(key)
            if (stored !== null) {
                setValue(JSON.parse(stored))
            }
        } catch (e) {
            // ignore storage access errors
        }
    }, [key])

    // Persist to localStorage whenever it changes (browser only)
    useEffect(() => {
        if (typeof window === 'undefined') return
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            // ignore storage access errors
        }
    }, [key, value])

    return [value, setValue]
}

// eslint-disable-next-line react/prop-types
const CookieConsent = ({ visible }) => {
    const exdays = 90
    const theDate = new Date()
    theDate.setTime(theDate.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + theDate.toUTCString()

    const [bannerHidden, setBannerHidden] = useStickyState(false, 'consentCookieHidden')

    const SetCookie = () => {
        // Ensure cookie is set site-wide; Secure requires HTTPS (expected in production)
        document.cookie = 'blackals-cookie-notice=true; ' + expires + '; path=/; SameSite=Lax; Secure'
        setBannerHidden(true)
    }
    // const UnSetCookie = () => {
    //     document.cookie = 'blackals-cookie-notice=false; ' + expires + '; SameSite=Lax; Secure'
    //     setBannerHidden(false)
    // }

    // Also respect an existing consent cookie on mount (e.g., from previous sessions)
    useEffect(() => {
        if (typeof document === 'undefined') return
        try {
            const hasConsent = document.cookie
                .split('; ')
                .some((c) => c.startsWith('blackals-cookie-notice='))
            if (hasConsent) {
                setBannerHidden(true)
            }
        } catch (e) {
            // ignore cookie access errors
        }
    }, [])

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
            {/* {bannerHidden && (
                <CookieCard
                    header='Reset Policy'
                    message="This is only for testing purposes and won't be in the final build."
                    onClick={UnSetCookie}
                    button='Revoke'
                    visible={visible}
                />
            )} */}
        </>
    )
}

export default CookieConsent
