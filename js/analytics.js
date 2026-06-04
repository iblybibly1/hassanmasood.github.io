/* Google Analytics 4 + Google Ads — G-260VJ86WLE
 * Google Ads conversion ID: replace AW-XXXXXXXXX/YYYYYYYYYYY below
 * once you create a conversion action in Google Ads.
 * (Google Ads → Goals → Conversions → New conversion action → Website)
 */
(function () {
  var GA_ID      = 'G-260VJ86WLE';
  var AW_ID      = 'AW-XXXXXXXXX';   // ← replace with your Google Ads ID
  var AW_LABEL   = 'YYYYYYYYYYY';    // ← replace with your conversion label

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
  gtag('config', AW_ID);

  // Fire GA4 + Google Ads conversion on contact form submit
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function () {
      // GA4 lead event
      gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'contact_form'
      });
      // Google Ads conversion
      gtag('event', 'conversion', {
        send_to: AW_ID + '/' + AW_LABEL,
        value: 1.0,
        currency: 'EUR'
      });
    });
  });
})();
