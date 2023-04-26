import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { LayoutWrapper } from "../components/Layout";
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
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
