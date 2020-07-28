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

const fillNepal=(array)=>{
    var total=0
    var deaths=0
    var recovered=0;
    var readmitted=0;
    array.forEach((element,index)=>{
        total+=parseInt(element.total);
        deaths+=parseInt(element.deaths);
        recovered+=parseInt(element.recovered);
        readmitted+=parseInt(element.readmitted);
    })
    nepal['name']="Nepal"
    nepal['total']=total
    nepal['deaths']=deaths
    nepal['recovered']=recovered
    nepal['readmitted']=readmitted
}

export const sort = (array,sortBy,order) => {
    array.sort(propComparater(sortBy,order));
    fillMap(array)
    if(Object.keys(nepal).length===0){
        fillNepal(array);
    }
}

export const map={}
export const nepal={}

export function fillMap(array){
    array.forEach((element,index)=>{
        map[element.name]=index
    })
}