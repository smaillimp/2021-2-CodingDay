arrExample = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

function getLastValue(arr){
    arr.sort()
    return arr.slice(-1);
}

getLastValue(arrExample)