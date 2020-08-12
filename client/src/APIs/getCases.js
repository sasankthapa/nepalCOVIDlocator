import axois from 'axios'

export var casesArray = []

export const getAllCasesRecursive = async(link) => {
    const res=(await axois.get(link)).data;
    console.log("asklhdkajsd")
    casesArray=casesArray.concat(res.results);
    if(res.next){
        return await getAllCasesRecursive(res.next);
    }else{
        return casesArray
    }
}