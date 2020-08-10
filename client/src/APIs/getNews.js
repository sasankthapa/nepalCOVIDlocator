import axios from "axios"

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api' : 'https://nepalcovidlocator.com/api';

export const getKtmPostNews=async(updateState)=>{
    return await axios.get(API_URL+'/news/ktmpost')
}

export const getAnnapurnaNews=async()=>{
    return await axios.get(API_URL+'/news/annapurna')
}

export const getEkantipurNews=async(updateState)=>{
    return await axios.get(API_URL+'/news/ekantipur')
}