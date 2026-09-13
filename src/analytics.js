const GA4_MEASUREMENT_ID = 'G-YTB541BYN6';
const ANALYTICS_HOSTNAMES = new Set(['ystock.tw', 'www.ystock.tw']);
const ANALYTICS_EXCLUDED_PATHNAMES = new Set(['/privacy.html']);
const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1']);
const IS_DEBUG_MODE =
  import.meta.env.VITE_GA_DEBUG === 'true' && LOCAL_HOSTNAMES.has(window.location.hostname);
const IS_EXCLUDED_PAGE = ANALYTICS_EXCLUDED_PATHNAMES.has(window.location.pathname);

const loadGoogleAnalytics = ({ debugMode = false } = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, debugMode ? { debug_mode: true } : {});

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.append(script);
};

if (!IS_EXCLUDED_PAGE && (ANALYTICS_HOSTNAMES.has(window.location.hostname) || IS_DEBUG_MODE)) {
  loadGoogleAnalytics({ debugMode: IS_DEBUG_MODE });
}
