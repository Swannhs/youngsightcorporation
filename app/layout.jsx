import Script from "next/script";

const stylesheets = [
  "/assets/css/bootstrap.min.css",
  "/assets/css/font-awesome-pro.min.css",
  "/assets/css/animate.min.css",
  "/assets/css/bexon-icons.css",
  "/assets/css/nice-select.css",
  "/assets/css/swiper.min.css",
  "/assets/css/venobox.min.css",
  "/assets/css/odometer-theme-default.css",
  "/assets/css/meanmenu.css",
  "/assets/css/main.css",
  "/assets/css/shop.css"
];

const scripts = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/ScrollSmoother.js",
  "/assets/js/gsap-scroll-to-plugin.min.js",
  "/assets/js/gsap-scroll-trigger.min.js",
  "/assets/js/gsap-split-text.min.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/swiper.min.js",
  "/assets/js/odometer.min.js",
  "/assets/js/venobox.min.js",
  "/assets/js/appear.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/meanmenu.js",
  "/assets/js/imagesloaded-pkgd.js",
  "/assets/js/isotope.pkgd.min.js",
  "/assets/js/jquery-knob.js",
  "/assets/js/range-slider.js",
  "/assets/js/validate.min.js",
  "/assets/js/magiccursor.js",
  "/assets/js/main.js"
];

export const metadata = {
  title: "Bexon",
  description: "Bexon migrated into a Next.js application."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.png" />
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>{children}
        {scripts.map((src) => (
          <Script key={src} src={src} strategy="afterInteractive" />
        ))}
      </body>
    </html>
  );
}
