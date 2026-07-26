/* Google Analytics 4 for filesiftapp.com
 *
 * The Measurement ID lives HERE and nowhere else — every page just loads this
 * file, so changing properties is a one-line edit.
 *
 * NOTE: this file is part of the site, not the app. FileSift itself still makes
 * no network connections and contains no analytics SDK.
 */

// The GA4 Measurement ID (Admin ▸ Data streams ▸ your web stream).
var MEASUREMENT_ID = 'G-67KP1NJDB9';

(function () {
  // Don't record local previews as real traffic.
  var host = location.hostname;
  var isLocal = host === 'localhost' || host === '127.0.0.1' || host === '' || host === '::1';
  if (isLocal) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);

  var loader = document.createElement('script');
  loader.async = true;
  loader.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(loader);

  // The one conversion that matters: a click through to the Mac App Store.
  // Delegated from the document so it covers every badge and nav button on
  // every page without touching the markup.
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href*="apps.apple.com"]');
    if (!link) return;
    // Trim BEFORE falling back: the image badges wrap a <picture>, so their
    // textContent is whitespace — truthy, and it would shadow the aria-label.
    var label = (link.textContent || '').trim() || link.getAttribute('aria-label') || '';
    gtag('event', 'app_store_click', {
      link_url: link.href,
      link_text: label.slice(0, 100),
      page_path: location.pathname
    });
  });
})();
