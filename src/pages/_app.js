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
          content="Software Engineer who wants to constantly improve himself and keep up to date"
        />
        <title>Yunus YILMAZ | Software Engineer </title>
      </Head>
      <RootLayout>
        <Component {...pageProps} />
        <Analytics />
      </RootLayout>
    </ThemeProvider>
  );
}
