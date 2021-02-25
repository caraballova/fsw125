// notes.js

// node.js
// local JS runtime enviroment


// es6 syntacical sugar over module.exports / require
// import WhateverComponent from '../whateverComponent'
// export defualt WhateverComponent


// module.exports/export and require/import





// OOP 
// 4 pillars => abstraction, encapsulation, polymorphism, inheritence
// modularization === abstraction and encapsulation (2 pillars of OOP)
// better or less conflicting naming across large projects
// more easily readable
// easier to debug
// single source of truth









// language has 1st class functions if we can treat those functions like any given variable
// 
// 
// 

function callbackExample(num1, num2) {
    return num1 + num2
}

function hofExample(cb, add1, add2) {
    const result = cb(add1, add2);
    console.log(result)
}

// HOF === higher order components take in one component as an argument via props and then return a new component
// hofExample(callbackExample, 4, 5);

const exampleStoring = callbackExample;
// console.log(exampleStoring)

// 3 ways to invoke fx in js
// 
// 
// 




// closure & scoping
// var (globally scoped/function scoped)
// let, const (block scoped)

function closureExample() {
    const exampleVariable = 'exampleVariable'
    // console.log(this)
    
    function anotherFunction() {
        console.log(exampleVariable);
        const anotherVariable = 5
        // console.log(this)
        debugger;
        const thisVar = this;
    }

    anotherFunction()
}

// closureExample()

// console.log(this)
// arrow functions do NOT create closure and therefore have no lexical binding of this and by extension do not create their won scop
const arrowFunction = () => {
    // console.log(this)
}

// console.log(exampleVariable);


// JS call stack (LIFO) data structure 
// single threaded
// supermarket you are checking out in a cashier line


// Node event loop is async non-blocking I/O
// multi-threaded (kernel)
// supermarket you are checking out with the self service kiosks


