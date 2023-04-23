//function that reverse a string:
function reverse(str){
    if(!str || str.length <2 || typeof str !== 'string'){
        return "this is not goood input";
    }
    const backwards = [];
    const totalItems =str.length -1 ;
    for(let i =totalItems; i>= 0;i--){
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
}
function reverse2(str){
    return str.split('').reverse().join('')
}
const reverse3 = str => [...str].reverse().join('');
reverse('this is great')
reverse2('good to see you');
reverse3('hello My Name is Geeta Negi');
