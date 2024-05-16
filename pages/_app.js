import "@/styles/globals.css";
import "@/public/assets/css/vendor/bootstrap.min.css"
import "@/public/assets/css/plugins/animation.css"
import "@/public/assets/css/plugins/feature.css"
import "@/public/assets/css/plugins/magnify.min.css"
import "@/public/assets/css/plugins/slick.css"
import "@/public/assets/css/plugins/slick-theme.css"
import "@/public/assets/css/plugins/lightbox.css"
import "@/public/assets/css/plugins/bootstrap-select.min.css"
import "@/public/assets/css/plugins/prism.css"
import "@/public/assets/css/style.css"
import Script from "next/script";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-style-mode" content="1" />

        <title>
          Fon Image Generator
        </title>

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/logo/favicon.png"
        />
      </Head>
      <Component {...pageProps} />

      {/* <Script src="/assets/js/vendor/modernizr.min.js"></Script>
    <Script src="/assets/js/vendor/jquery.min.js"></Script>
    <Script src="/assets/js/vendor/bootstrap.min.js"></Script>
    <Script src="/assets/js/vendor/popper.min.js"></Script>
    <Script src="/assets/js/vendor/waypoint.min.js"></Script>
    <Script src="/assets/js/vendor/wow.min.js"></Script>
    <Script src="/assets/js/vendor/counterup.min.js"></Script>
    <Script src="/assets/js/vendor/feather.min.js"></Script>
    <Script src="/assets/js/vendor/sal.min.js"></Script>
    <Script src="/assets/js/vendor/masonry.js"></Script>
    <Script src="/assets/js/vendor/imageloaded.js"></Script>
    <Script src="/assets/js/vendor/magnify.min.js"></Script>
    <Script src="/assets/js/vendor/lightbox.js"></Script>
    <Script src="/assets/js/vendor/slick.min.js"></Script>
    <Script src="/assets/js/vendor/easypie.js"></Script>
    <Script src="/assets/js/vendor/text-type.js"></Script>
    <Script src="/assets/js/vendor/prism.js"></Script>
    <Script src="/assets/js/vendor/jquery.style.swicher.js"></Script>
    <Script src="/assets/js/vendor/bootstrap-select.min.js"></Script>

    <Script src="/assets/js/vendor/js.cookie.js"></Script>
    <Script src="/assets/js/vendor/jquery-one-page-nav.js"></Script>
   
    <Script src="/assets/js/main.js"></Script> */}
    </>
  );
}
