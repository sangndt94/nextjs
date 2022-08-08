import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
