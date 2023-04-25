class Node {
    constructor(value){
        this.value = value;
        this.next =null;
    }
}
class stack {       
    constructor (){
        this.array = [];
  
    }
    peek(){
        return this.array[this.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this
    }
}
const mystack = new stack();
mystack.push('good')
mystack.push('vibes')
mystack.push('only')
mystack.peek()
mystack.pop()