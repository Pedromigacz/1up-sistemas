import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

import GlobalStyles from '@/components/shared/globaStyles';
import CssVariables from '@/components/shared/variables';
import FooterComponent from '@/components/shared/Footer';
import dynamic from 'next/dynamic';

const justSans = localFont({
  preload: true,
  src: [
    {
      path: '../public/fonts/just-sans/JustSansExBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/just-sans/JustSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const argentumSans = localFont({
  preload: true,
  src: [
    {
      path: '../public/fonts/argentum-sans/ArgentumSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/argentum-sans/ArgentumSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/argentum-sans/ArgentumSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/argentum-sans/ArgentumSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/argentum-sans/ArgentumSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const NavbarComponent = dynamic(() => import('@/components/shared/Navbar'), {
  suspense: true,
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
      <NavbarComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
