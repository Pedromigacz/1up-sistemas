import type { AppProps } from 'next/app';
import GlobalStyles from '@/components/shared/globaStyles';
import CssVariables from '@/components/shared/variables';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssVariables />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
