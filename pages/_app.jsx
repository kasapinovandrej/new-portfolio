import Layout from "../components/Layout/layout";
import Head from "next/head";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Andrej Kasapinov portfolio" />
        <meta
          name="keywords"
          content="coding, web development, html, css, JavaScript, React, Next JS, work, portfolio, "
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'"
        ></meta>
        <meta name="author" content="Andrej Kasapinov" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Andrej Kasapinov - Portfolio" />
        <meta property="og:url" content="https://andrejkasapinov.vercel.app/" />
        <meta property="og:image" content="/images/projects/portfolio.jpg" />
        <meta property="og:description" content="Andrej Kasapinov portfolio" />
        <meta name="twitter:image" content="/images/projects/portfolio.jpg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
