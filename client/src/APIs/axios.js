import axios from "axios"

const API_URL = 'http://localhost:3001'

export async function getEntries(){
    try{
        return await axios.get(API_URL+'/entry') 
    }catch(e){
        alert("Failed to retrieve data from database.");
        console.log(e);
    }
}

export function sendForm(formData){
    axios.request({
            method: 'post',
            url: API_URL+'/entry',
            data: formData
          }).then(()=>{
              alert('Saved')
              window.location.reload(false)
          })
          .catch((e)=>{
              alert('Error please check phone number or connection to database');
          })
}