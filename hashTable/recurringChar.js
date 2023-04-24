/*
Google ques 
Given an array = [2,3,1,2,3,5,1,2,4]:
It should reurn 2

Given an array = [2,1,1,2,3,5,1,2,4]:
It should reurn 1

Given an array = [2,3,4,5]:
It should return undefined
*/


function firstRecurChar(input){
    for(let i=0;i<input.length;i++){
        for(let j=i+1;j<input.length;j++){
            if(input[i]===input[j]){
                return input[i];
            }
    }
}
return undefined;
}//O(n^2)

//by Hash function

function firstRecurChar2(input){
    let map = {};
    for (let i= 0;i<input.length;i++){
        if(map[input[i]!== undefined]){
            return input[i]
        }else{
            map[input[i]] = i
        }
        console.log(map)
    }
     return undefined;
}//O(n)



firstRecurChar([2,3,1,2,3,5,1,2,4])
firstRecurChar([2,1,1,2,3,5,1,2,4])
firstRecurChar([2,3,4,5])

firstRecurChar2([2,3,1,2,3,5,1,2,4])
firstRecurChar2([2,1,1,2,3,5,1,2,4])
firstRecurChar2([2,3,4,5])
