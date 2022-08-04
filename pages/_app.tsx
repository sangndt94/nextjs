import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import HeaderComponent from "../components/common/Header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
