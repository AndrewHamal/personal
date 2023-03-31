import Head from 'next/head'
import { Eye, EyeOff, Lock, Mail } from 'react-feather'
import { useEffect, useState } from 'react'
import { register, instance } from '../api/auth';
import useSWR from 'swr'
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import Particle from '../components/particle';
import { LoadingOutlined } from '@ant-design/icons';
import SiderFooter from '../components/sider/siderBody';

export default function Success({ showSider, setShowSider }: any) {

  const { data, error } = useSWR('/', instance);
 
  useEffect(() => {
    if(data?.data?.email_verified_at)
    {
     
    }
    
    if(error?.response?.data?.message === 'email_not_verified')
    {
        // router.push('/verify')
    }
  }, [error?.response?.data?.message])

  return (
    <>
        <div className='d-flex flex-column justify-content-center relative px-[100px]'>
            {/* <div className="text-center my-5">
                <h1 className="font-[sf] text-[#242331]">Success</h1>
                <p className="text-[#1D1D1F]">Go to your account to start taking control today!</p>
            </div> */}

            <form className='mt-[-40px] p-[40px]'>
                <div className="form h-100 relative">
                    <div className='text-center my-5 px-4'>
                        <h1 className="font-[700] text-[#242331]">Success</h1>
                        <p className='text-[12px] text-[#030128]/[.6]'>Please Download our app from Appstore or Playstore</p>

                        <div className='d-flex justify-content-center'>
                            <img width={200} src='img/Rectangle_1581.png'/>
                        </div>

                        <div className='d-flex gap-2 mt-5 mb-5 justify-center'>
                            <a href="">
                                <img width={180} src="/img/play.jpg" alt="" />
                            </a>

                            <a href="">
                                <img width={180} src="/img/appstore.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </form>


            {/* <SiderFooter>
                <button className="btn-primary w-100 mt-4">Go to account</button>
            </SiderFooter> */}
        </div>
    </>
  )
}

export async function getServerSideProps({ req, res }: any) {
    let token = req.cookies.token;

    if(token)
    {
        const data = await axios.get('/info', {
            headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
        
        const { email_verified_at, active_plan, date_of_birth } = data?.data;

        if(email_verified_at && active_plan && date_of_birth)
        {
            return {
                redirect: {
                    permanent: false,
                    destination: '/profile-complete'
                },
            };
        }

        if(email_verified_at && !active_plan && !date_of_birth)
        {
            return {
                redirect: {
                    permanent: false,
                    destination: '/plans'
                },
            };
        }
    }

    return {
      props: {
  
      },
    }
}
