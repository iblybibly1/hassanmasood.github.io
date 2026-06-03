/* Google Analytics 4
 * --------------------------------------------------
 * SETUP: Replace G-XXXXXXXXXX with your Measurement ID.
 * Get it from: analytics.google.com → Admin → Data Streams
 * --------------------------------------------------
 */
(function () {
  var GA_ID = 'G-XXXXXXXXXX'; // ← REPLACE WITH YOUR GA4 MEASUREMENT ID

  // Inject the GA4 loader script
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { send_page_view: true });

  // Track contact form submission as a lead conversion
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function () {
      gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'contact_form'
      });
    });
  });
})();
