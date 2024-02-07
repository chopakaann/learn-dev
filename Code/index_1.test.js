const greeting = require("./index_1.js");

test("say greeting with Other customer", () => {

    const greetingMsg = greeting("");
    expect(greetingMsg).toBe("Hello คุณลูกค้า"); 

});

test("say greeting with customer", () => {
    const greetingMsg = greeting("คุณแอน");
    expect(greetingMsg).toBe("Hello คุณแอน"); 

});
