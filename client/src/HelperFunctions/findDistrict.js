import province1 from '../assets/province1.json'
import province2 from '../assets/province2.json'
import province3 from '../assets/province3.json'
import province4 from '../assets/province4.json'
import province5 from '../assets/province5.json'
import province6 from '../assets/province6.json'
import province7 from '../assets/province7.json'

var inside=require('point-in-polygon');

const provinces=[province1,province2,province3,province4,province5,province6,province7]
export const casesReportedMap={}

const initializeCasesReported = () =>{
    provinces.forEach((province)=>{
        province.features.forEach((district)=>{
            casesReportedMap[district.properties.DISTRICT]=0;
        });
    });
}

initializeCasesReported()

const getDistrictCoords = (district) =>{
    return district.geometry.coordinates
}

export const findDistrict = (lat,long) => {
    for (const province of provinces){
        for(const district of province.features){
            const coords=getDistrictCoords(district);
            if(inside([lat,long],coords)){
                return district.properties.DISTRICT
            }
        }
    }
    return null;
}

export const updateNumberOfCases = (entries) => {
    entries.forEach((entry)=>{
        casesReportedMap[entry.DISTRICT]=casesReportedMap[entry.DISTRICT]+1;
    })
}