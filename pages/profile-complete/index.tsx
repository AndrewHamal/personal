import Head from 'next/head'
import { useEffect, useState } from 'react'
import { instance } from '../api/auth';
import useSWR from 'swr'
import { useRouter } from 'next/router';
import Particle from '../components/particle';

export default function Success() {
  return (
    <>
        <div className="container-fluid">
            <div className='bg-main h-[100vh] d-flex relative'>
                <div className='w-[360px] form-outer my-auto ml-auto mr-[130px] relative z-[999]'>
                <div className='mt-5'>
                    <div className="card-body no-header bg-[#F1F1F1] h-[70vh] rounded-[20px] bg-right">

                        <div className='h-[300px]'>
                            <img className='absolute' src="/img/success.svg" alt="" />
                        </div>

                        <form className='mt-[-40px] p-[40px]'>
                            <div className="form h-100 relative">
                                <div className='text-center my-5 px-4'>
                                    <h2 className='text-[#030128] text-[26px] font-[700]'>Congrats</h2>
                                    <p className='text-[12px] text-[#030128]/[.6]'>Please Download our app from Appstore or Playstore</p>


                                    <div className='d-flex gap-2 mt-5 mb-5'>
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
                    </div>

                </div>
                </div>
                
                {/* vector  */}
                <Particle/>
            </div>
        </div>
    </>
  )
}
