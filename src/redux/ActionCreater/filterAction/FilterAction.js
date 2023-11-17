
export const instock =()=>{
    return{
        type : 'instock',
       
    }
}

export const outofstock =()=>{
    return {
        type : 'outofstock'
    }
}

export const assending =()=>{
    return {
        type : 'assending',
        check: 'LowToHigh'
    }
}

export const dessending =()=>{
    return {
        type : 'assending',
        check: 'HighToLow'
    }
}

export const filterrating=(rating)=>{
    return {
        type : 'filterrating',
        paylod : rating
    }
}

export const clearfilter = ()=>{
    return{
        type : 'clearfilter',
    }
}