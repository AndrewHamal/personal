import axios from "axios";
import { getCookie } from "cookies-next";
import axiosInstance from "../@core/services/axiosInstance";
let token = getCookie('token');

axios.defaults.baseURL = 'https://api.coparentingplus.com/user';

export function register(form: any)
{
    return axios.post('register', form)
}

export function login(form: any)
{
    return axios.post('login', form)
}

export function forgotPassword(formData: any)
{
    return axios.post('forgot-password', formData)
}

export function resetPassword(formData: any)
{
    return axios.post('reset-password', formData)
}

export function resendOtp()
{
    return axiosInstance.post('resend-otp')
}

export function verifyOtp(otp: any)
{
    return axiosInstance.post('verify-otp', {
        code: otp
    })
}

export function userUpdate(formData: any)
{
    return axiosInstance.post('/', formData)
}

export function subscription(id: any, intent: any)
{
    return axiosInstance.post('/subscription', {
        plan_id: id, 
        token: intent
    })
}

export function instance(url='')
{
    return axiosInstance.get(`${url}`);
}