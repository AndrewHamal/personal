import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = 'https://api.coparentingplus.com/user';

  return <>
      <ToastContainer />
      <Suspense fallback={'loading.....'}>
        <Component {...pageProps} />
      </Suspense>
    </>
}
