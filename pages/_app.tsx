import "../styles/index.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
