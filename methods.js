
const newMap = (arr, callback) => {
    const newArr = [...arr];
    let index = 0;

    while (index < arr.length){
        if (arr.hasOwnProperty(index)){
            newArr[index] = (callback(arr[index]))
        } 
        else{delete newArr[index]}
        index++;
    }
    return newArr
};


const newFilter = (arr, callback) => {
    const newArr = [];
    let newArrIndex = 0;
    let index = 0;

    while (index < arr.length){
        if (arr.hasOwnProperty(index) && callback(arr[index])){
            newArr[newArrIndex] = arr[index]
            newArrIndex++
        }
        index++;
    }
    return newArr
}


const newFindIndex = (arr, callback) => {
    let index = 0;
    while (!arr.hasOwnProperty(index) || callback(arr[index]) !== true){
        index++
    }
    return index
}


const newReduce = (arr, callback, accVal) => {
    let acc = !accVal ? arr[0] : accVal;
    let item = !accVal? arr[1] : arr[0];
    let startindex = !accVal ? 1 : 0

    for (let x = startindex; x < arr.length; x++){
        if (arr.hasOwnProperty(x)){
            acc = callback(acc, arr[x])
        }
    }

    return acc
}


const newEvery = (arr, callback) => {
    for (let x = 0; x < arr.length; x++){
        if (arr.hasOwnProperty(x)){
            if (!callback(arr[x])){
                return false
            }
        }
    }
    return true
}

const newForEach = (arr, callback) => {
    for (let x = 0; x < arr.length; x++){
        if (arr.hasOwnProperty(x)){
            callback(arr[x])
        }
    }
}



module.exports = {
    newMap, 
    newFilter, 
    newFindIndex, 
    newReduce, 
    newEvery, 
    newForEach
}

