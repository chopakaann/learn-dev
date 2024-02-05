// function greeting (customerName) {

//     return "Hello " + customerName;
// }

// console.log(greeting("Ann"));

// module.exports = greeting;

function greeting (customerName) {

    if (customerName === "" ){
        return "Hello คุณลูกค้า";

        }
        return "Hello " + customerName;
    }
    
    console.log(greeting());
    
    module.exports = greeting;
