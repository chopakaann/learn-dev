function sayHelloCustomer (customerName) {

    if (customerName === "" ){
        return "สวัสดีค่ะ คุณลูกค้า รับอะไรดีคะ";

        }
        return "สวัสดีค่ะ" +" "+ customerName+ " "+"วันนี้รับอะไรดีคะ";
    }
    
    console.log(sayHelloCustomer());
    
    module.exports = sayHelloCustomer;
