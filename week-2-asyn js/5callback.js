//callback is just functional argument

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}

calculator(1,2,sum);
console.log(calculator);