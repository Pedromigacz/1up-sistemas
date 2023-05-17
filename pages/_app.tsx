import type { AppProps } from 'next/app';
import GlobalStyles from '@/components/shared/globaStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
