function sayHello (customerName) {

    if(customerName ){

        return "Hi ! " + customerName;
    }else{
        return "Hi ลูกค้า";

    }
    
}

let greeting = sayHello("Ann");

console.log(greeting);

module.exports = sayHello;
