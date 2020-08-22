import axois from 'axios'

export var casesArray = []
export var casesArrayLength;

const compareAndFixArray = (array) => {
    array.forEach(element => {
        console.log(element.point.coordinates)
    });
}

export const getAllCasesRecursive = async(link) => {
    const res=(await axois.get(link)).data;
    console.log("asklhdkajsd")
    casesArray=casesArray.concat(res.results);
    if(res.next){
        return await getAllCasesRecursive(res.next);
    }else{
        casesArrayLength=casesArray.length
        compareAndFixArray(casesArray);
        return casesArray
    }
}