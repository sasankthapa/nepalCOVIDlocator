import axios from 'axios'

import {sort} from '../HelperFunctions/DistrictInfo'

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api' : 'https://nepalcovidlocator.com/api';

export var daily=[]
export var districts=[]
export var hospitals=[]
export var npData={}
export var lastUpdated
export var infoMessage

export const loadDataDefaultPage = async(done) => {
    daily=(await axios.get(API_URL+'/daily')).data
    hospitals=(await axios.get(API_URL+'/hospitals')).data
    npData=(await axios.get(API_URL+'/nepal')).data
    done(true);
}

export const loadDataVisualPage = async(done) => {
    districts=(await axios.get(API_URL+'/districts')).data
    sort(districts,)
    done(true);
}

export const loadDataNewsPage = async(done) => {
    await axios.get(API_URL+'/info/lastupdate').then((res)=>{
        lastUpdated=res.data
    })
    await axios.get(API_URL+'/info/message').then((res)=>{
        infoMessage=res.data
    })
    done(true)
}