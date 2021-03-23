/*
Takes an Array and callback of signature item => {} and 
creates a new Array with the return value of each called callback.
Skips any holes in the Array, and mapped Array should have hole in same spot. 
The mapped Array should have the same .length value as the original Array.
Returns the "mapped" new array.
*/

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
    
}
const newFindIndex = (arr, callback) => {

}
const newReduce = (arr, callback) => {

}
const newEvery = (arr, callback) => {

}
const newForEach = (arr, callback) => {

}



module.exports = newMap