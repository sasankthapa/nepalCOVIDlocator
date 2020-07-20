// const fs=require('fs');

import allDistricts from "../assets/DistrictsData.json";

// const allDistricts = JSON.parse(fs.readFileSync(jsonPath));

const propComparater = (sortBy, order) => {
    return function(a,b){
        var fromA,fromB
        if(sortBy!=='name'){
            fromA=parseInt(a[sortBy],10);
            fromB=parseInt(b[sortBy],10);
            return order==='asc'?  fromA-fromB :fromB-fromA 
        }else{
            fromA=a[sortBy].toUpperCase()
            fromB=b[sortBy].toUpperCase()
            return order==='asc'? fromA>fromB? 1: -1 : fromB>fromA? 1:-1
        }
    }
}

export const sort = (sortBy,order) => {
    allDistricts.sort(propComparater(sortBy,order));
    fillMap()
}

export const map={}

function fillMap(){
    allDistricts.forEach((element,index)=>{
        map[element.name]=index
    })
}

fillMap()
export default allDistricts