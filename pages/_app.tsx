import "@/styles/globals.css";
import "@/styles/loader.css";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import type { AppProps } from "next/app";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import ProgressBar from "@badrap/bar-of-progress";
import TalkToUs from "@/components/TalkToUs";

const progress = new ProgressBar({
  size: 6,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <TalkToUs />
    </SessionProvider>
  );
}
