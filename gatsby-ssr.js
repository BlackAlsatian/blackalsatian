import './src/assets/scss/app.scss'
import PageStyleProvider from './src/components/pageStyleProvider'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
        setHtmlAttributes({ lang: 'en' })
        const gtmId = process.env.GATSBY_GTM_TRACKING_ID
                const lazyGtm = gtmId
                                ? `
                (function(){
                        window.dataLayer = window.dataLayer || [];
                        function isBot(){
                                try {
                                        var ua = (navigator && navigator.userAgent || '').toLowerCase();
                                        return /bot|crawler|spider|crawling|lighthouse|pagespeed|headless|pingdom|uptime|monitor/.test(ua);
                                } catch(e) { return false; }
                        }
                        function loadGTM(){
                                if (window.__gtmLoaded) return;
                                window.__gtmLoaded = true;
                                window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                                var f = document.getElementsByTagName('script')[0];
                                var j = document.createElement('script');
                                j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
                                f.parentNode.insertBefore(j, f);
                        }
                                        function hasConsent(){
                                try {
                                        return document.cookie.split('; ').some(function(c){ return c.indexOf('blackals-cookie-notice=true') === 0 || c.indexOf(' blackals-cookie-notice=true') > -1; });
                                } catch(e) { return false; }
                        }
                                        function isZA(){
                                                try {
                                                        var nav = navigator || {};
                                                        var lang = (nav.language || (nav.languages && nav.languages[0]) || '').toLowerCase();
                                                        var tz = '';
                                                        try { tz = (Intl && Intl.DateTimeFormat && Intl.DateTimeFormat().resolvedOptions && Intl.DateTimeFormat().resolvedOptions().timeZone) || ''; } catch(e) {}
                                                        return /-za$/.test(lang) || (tz && tz.toLowerCase() === 'africa/johannesburg');
                                                } catch(e) { return false; }
                                        }
                                        if (isBot()) { return; }
                        if (hasConsent()) {
                                // Immediate load for returning users who already granted consent
                                loadGTM();
                        } else {
                                                // No consent yet: only load when consent is granted
                                                window.addEventListener('ba:consent-granted', loadGTM, { once: true });
                                                // For South African users, treat interaction/time-on-page as implied consent (POPIA-friendly)
                                                if (isZA()) {
                                                        function grantImplied(){
                                                                try {
                                                                        document.cookie = 'blackals-cookie-notice=true; path=/; SameSite=Lax; Secure';
                                                                        var ev = new CustomEvent('ba:consent-granted');
                                                                        window.dispatchEvent(ev);
                                                                } catch(e) {
                                                                        // ignore
                                                                }
                                                        }
                                                        var impliedOnce = false;
                                                        function impliedHandler(){ if (impliedOnce) return; impliedOnce = true; ['scroll','mousemove','touchstart','keydown'].forEach(function(evt){ window.removeEventListener(evt, impliedHandler, { passive: true }); }); grantImplied(); }
                                                        ['scroll','mousemove','touchstart','keydown'].forEach(function(evt){ window.addEventListener(evt, impliedHandler, { passive: true }); });
                                                        // Fallback: grant after a short time on page
                                                        setTimeout(function(){ impliedHandler(); }, 7000);
                                                }
                        }
                })();
                `
                : null
        setHeadComponents([
                // Preconnects help reduce connection setup time for analytics
                <link key="preconnect-gtm" rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />,
                <link key="preconnect-ga" rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />,
                gtmId && <script key="gtm-lazy" dangerouslySetInnerHTML={{ __html: lazyGtm }} />,
        ].filter(Boolean))
}

export const wrapRootElement = PageStyleProvider
