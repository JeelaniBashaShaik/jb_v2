const arr = [3,3,1,24,20,6,8,9,4,12,7,2,2,5,11,10];

let tempForSwap;
let currentIndex;
let currentMinIndex;

const swapValues = (arr, currentIndex, currentMinIndex) => {
    let tempForSwap;
    tempForSwap = arr[currentIndex];
    arr[currentIndex] = arr[currentMinIndex];
    arr[currentMinIndex] = tempForSwap;
}

for (let outerLoopIndex = 0; outerLoopIndex < arr.length; outerLoopIndex++) {
    currentIndex = outerLoopIndex;
    currentMinIndex = outerLoopIndex;
    for (let innerLoopIndex = currentMinIndex;innerLoopIndex < arr.length; innerLoopIndex++) {
        if(arr[innerLoopIndex] < arr[currentMinIndex]) {
            currentMinIndex = innerLoopIndex;
        }
    }
    if (currentIndex !== currentMinIndex) {
        swapValues(arr, currentIndex, currentMinIndex);
    }  
}

console.log(arr);