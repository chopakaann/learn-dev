const greeting = require("./index_1.js");

test("say greeting with customer", () => {


    const greetingMsg = greeting("Ann");
    expect(greetingMsg).toBe("Hello Ann"); 

});
