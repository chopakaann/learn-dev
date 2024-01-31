const sayHello  = require("./return.js");

test("say greeting with customer name ", () => {
    const greetingMsg = sayHello("Nong Ann");
    expect(greetingMsg ).tobe("Hi ! Nong Ann");
});

test("say greeting with customer name 2", () => {
    const greetingMsg = sayHello("");
    expect(greetingMsg ).tobe("Hi ลูกค้า");
});
