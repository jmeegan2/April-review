const arr = [1, 2, 5, 7, 3, 8, 2, 10, 1]

let bubbleSort = (arr) => {

    //Outer pass
    for (let i = 0; i < arr.length; i++) {

        //inner pass
        for (let j = 0; j < arr.length - i - 1; j++) {

            //Vlaue comparison using ascending order 

            if (arr[j + 1] < arr[j]) {

                //swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    };
    return arr;
}

console.log(bubbleSort(arr))