
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

const newReduce = (arr, callback) => {

}
const newEvery = (arr, callback) => {

}
const newForEach = (arr, callback) => {

}



module.exports = {newMap, newFilter, newFindIndex}

