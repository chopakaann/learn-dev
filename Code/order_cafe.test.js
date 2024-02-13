const orderCustomer = require("./order_cafe.js");


test("customer order cold green tea  and have glass ", () => {

    const totalPriceOrder = orderCustomer("ชาเขียว", "เย็น", "นำแก้วมา");
    expect(totalPriceOrder).toBe("เมนูชาเขียว เย็น นำแก้วมาราคา 55 บาท"); 

});

test("customer order cold  green tea  and not have glass ", () => {

    const totalPriceOrder = orderCustomer("ชาเขียว", "เย็น", "ไม่นำแก้วมา");
    expect(totalPriceOrder).toBe("เมนูชาเขียว เย็น ไม่นำแก้วมาราคา 60 บาท"); 

});

test("customer order hot green tea  and have glass ", () => {

    const totalPriceOrder = orderCustomer("ชาเขียว", "ร้อน", "นำแก้วมา");
    expect(totalPriceOrder).toBe("เมนูชาเขียว ร้อน นำแก้วมาราคา 50 บาท"); 

});

test("customer order hot  green tea  and not have glass ", () => {

    const totalPriceOrder = orderCustomer("ชาเขียว", "ร้อน", "ไม่นำแก้วมา");
    expect(totalPriceOrder).toBe("เมนูชาเขียว ร้อน ไม่นำแก้วมาราคา 55 บาท"); 

});

test("customer order cold cocao and have glass ", () => {

    const totalPriceOrder = orderCustomer("โกโก้", "เย็น", "นำแก้วมา");
    expect(totalPriceOrder).toBe("เมนูโกโก้ เย็น นำแก้วมาราคา 45 บาท"); 

});

test("customer order cold cocao and not have glass ", () => {

    const totalPriceOrder = orderCustomer("โกโก้", "เย็น", "");
    expect(totalPriceOrder).toBe("เมนูโกโก้ เย็น ราคา 50 บาท"); 

});
