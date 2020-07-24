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

export const sort = (array,sortBy,order) => {
    array.sort(propComparater(sortBy,order));
    fillMap(array)
}

export const map={}

export function fillMap(array){
    array.forEach((element,index)=>{
        map[element.name]=index
    })
}