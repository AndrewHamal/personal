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
import { useNavigate } from 'react-router-dom';
import SiderFooter from '../components/sider/siderBody';

export default function Success() {
  const [visible, setVisible] = useState('password');
  const [errors, setErrors] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const navigate = useNavigate();

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
            <div className='d-flex justify-content-center'>
                <img src='img/Rectangle_1581.png'/>
            </div>
            <SiderFooter>
                <button className="btn-primary w-100">Go to account</button>
            </SiderFooter>
        </div>



            
            {/* vector  */}
            {/* <Particle/> */}
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
