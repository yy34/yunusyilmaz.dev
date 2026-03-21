import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import RootLayout from "../components/RootLayout";
import "./globals.css";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Personal portfolio of Yunus Yilmaz, a software engineer based in Istanbul."
        />
        <title>Yunus Yilmaz | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
        <Analytics />
      </RootLayout>
    </ThemeProvider>
  );
}
