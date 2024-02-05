const sayHello = require("./cafe_1.js");

test("VIP customer walk in cafe", () => {

    const sayHelloCustomerMsg = sayHello("คุณแอน");
    expect(sayHelloCustomerMsg).toBe("สวัสดีค่ะ คุณแอน วันนี้รับอะไรดีคะ"); 

});

test("Other customer walk in cafe", () => {

    const sayHelloCustomerMsg = sayHello("");
    expect(sayHelloCustomerMsg).toBe("สวัสดีค่ะ คุณลูกค้า รับอะไรดีคะ"); 

});
