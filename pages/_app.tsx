import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { instance } from './api/auth';

let token = getCookie('token');

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  axios.defaults.baseURL = 'https://api.coparentingplus.com/user';
  
  return <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
}
