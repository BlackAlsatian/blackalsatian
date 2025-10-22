import './src/assets/scss/app.scss'
import PageStyleProvider from './src/components/pageStyleProvider'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
        setHtmlAttributes({ lang: 'en' })
        const gtmId = process.env.GATSBY_GTM_TRACKING_ID
        const lazyGtm = gtmId
                ? `
        (function(){
            window.dataLayer = window.dataLayer || [];
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
                        // If consent already granted, wait for a light interaction or idle to avoid competing with core work
                        if (hasConsent()) {
                                function onFirstInteraction(){
                                        ['scroll','mousemove','touchstart','keydown'].forEach(function(evt){ window.removeEventListener(evt, onFirstInteraction, { passive: true }); });
                                        loadGTM();
                                }
                                ['scroll','mousemove','touchstart','keydown'].forEach(function(evt){ window.addEventListener(evt, onFirstInteraction, { passive: true }); });
                                if ('requestIdleCallback' in window) { requestIdleCallback(loadGTM, { timeout: 8000 }); }
                                else { window.addEventListener('load', function(){ setTimeout(loadGTM, 6000); }); }
                        } else {
                                // No consent yet: only load when consent is granted
                                window.addEventListener('ba:consent-granted', loadGTM, { once: true });
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
