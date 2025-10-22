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
            function onFirstInteraction(){
                ['scroll','mousemove','touchstart','keydown'].forEach(function(evt){ window.removeEventListener(evt, onFirstInteraction, { passive: true }); });
                loadGTM();
            }
            ['scroll','mousemove','touchstart','keydown'].forEach(function(evt){ window.addEventListener(evt, onFirstInteraction, { passive: true }); });
            if ('requestIdleCallback' in window) { requestIdleCallback(loadGTM, { timeout: 5000 }); }
            else { window.addEventListener('load', function(){ setTimeout(loadGTM, 3000); }); }
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
