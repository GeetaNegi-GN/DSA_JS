//mergeSortedArrays([0,3,4,31],[4,6,30]);
//[0,3,4,4,6,30,31]
function mergeSortedArrays(array1,array2){
    const mergedArray = [];
    let array1item = array1[0];
    let array2item = array2[0];
    let i = 1;
    let j= 1;
    //check input
    if(array1.length === 0){
        return array2;

    }
    if(array2.length === 0){
        return array1;
    }

    while (array1item || array2item){
        if(!array2item || array1item<array2item){
        mergedArray.push(array1item)
        array1item = array1[i];
        i++;
        }
        else{
            mergedArray.push(array2item)
            array2item=array2[j];
            j++;
        }
    }
    return mergedArray;
}

mergeSortedArrays([0,3,4,31],[4,6,30]);