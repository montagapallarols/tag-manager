import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { global } from "@styles/global-style";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
