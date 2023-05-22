import type { AppProps } from "next/app";
import GlobalStyles from "@/components/shared/globaStyles";
import CssVariables from "@/components/shared/variables";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const justSans = localFont({
  src: [
    {
      path: "../public/fonts/just-sans/JustSansExBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/just-sans/JustSansRegular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const argentumSans = localFont({
  src: [
    {
      path: "../public/fonts/argentum-sans/ArgentumSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/argentum-sans/ArgentumSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/argentum-sans/ArgentumSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/argentum-sans/ArgentumSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/argentum-sans/ArgentumSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-title: ${justSans.style.fontFamily};
          --font-body: ${argentumSans.style.fontFamily};
        }
      `}</style>
      <CssVariables />
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
