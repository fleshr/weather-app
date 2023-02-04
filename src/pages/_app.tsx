import '@/styles/globals.css';
import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
