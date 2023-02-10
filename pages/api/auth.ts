import axios from "axios";
import { getCookie } from "cookies-next";
let token = getCookie('token');

axios.defaults.baseURL = 'https://api.coparentingplus.com/user';

if(token)
    axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;

export function register(form: any)
{
    return axios.post('register', form)
}

export function login(form: any)
{
    return axios.post('login', form)
}

export function resendOtp()
{
    return axios.post('resend-otp')
}

export function verifyOtp(otp: any)
{
    
    return axios.post('verify-otp', {
        code: otp
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export function userUpdate(formData: any)
{
    return axios.post('/', formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    })
}

export function subscription(id: any, intent: any)
{
    return axios.post('/subscription', {
        plan_id: id, 
        token: intent
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export function instance(url='')
{
    return axios.get(`${url}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}