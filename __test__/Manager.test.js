const Manager = require("../lib/Manager");

test("creates manager", ()=> {
    const manager = new Manager("Jake", "jake@alt.com", "1234567890")

    expect(manager.name).toEqual("Jake");
    expect(manager.email).toEqual("jake@alt.com");
    expect(manager.phoneNumber).toEqual("1234567890");
})