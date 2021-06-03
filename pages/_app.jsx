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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Andrej Kasapinov</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
