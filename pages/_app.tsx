import "../styles/index.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { useEffect } from "react";

//import Alert from "bootstrap/js/dist/alert";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
