// const sayHelloCustomer = require("./cafe_1.js");

const {sayHelloCustomer, noticeOrderMessage} = require("./cafe_1.js");

test("VIP customer walk in cafe", () => {

    const sayHelloCustomerMsg = sayHelloCustomer("คุณแอน");
    expect(sayHelloCustomerMsg).toBe("สวัสดีค่ะ คุณแอน วันนี้รับอะไรดีคะ"); 

});

test("Other customer walk in cafe", () => {

    const sayHelloCustomerMsg = sayHelloCustomer("");
    expect(sayHelloCustomerMsg).toBe("สวัสดีค่ะ คุณลูกค้า รับอะไรดีคะ"); 

});


test("notice order in progress", () => {

    const aleartMessage = noticeOrderMessage("Ann","In Process","กาแฟเย็น");
    expect(aleartMessage).toBe("กาแฟเย็น ของคุณ Ann กำลังทำอยู่นะคะ กรุณารอสักครู่ค่ะ"); 
  
});

test("notice order Success", () => {

    const aleartMessage = noticeOrderMessage("Parn","Success","อเมริกาโน่");
    expect(aleartMessage).toBe("อเมริกาโน่ ของคุณ Parn เสร็จแล้ว เชิญรับได้ที่เค้าเตอร์ค่ะ"); 
   
});

test("notice order not Success", () => {

    const aleartMessage = noticeOrderMessage("Noon","Not Success","ชาเย็น");

    // เคสนี้ ถ้าไม่ใส่ StatusOrder ได้ เนื่องจาก จะไปตกเงื่อนไขสุดท้ายของ Fuction 
    // const aleartMessage = noticeOrderMessage("Noon","","ชาเย็น");
    expect(aleartMessage).toBe("กำลังทำชาเย็น ของคุณ Noon อยู่นะคะ กรุณารอสักครู่ค่ะ"); 

  
});
