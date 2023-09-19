import '@/styles/globals.css'
import '../../public/bootstrap-5.2.3-dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';
import { ContextProvider as ContextProviderAuthFirebase } from '@/lib/contextAuthFirebase';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Script src={"/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js"}></Script>
    <ContextProviderAuthFirebase>
      <Component {...pageProps} />
    </ContextProviderAuthFirebase>
  </>)
}
