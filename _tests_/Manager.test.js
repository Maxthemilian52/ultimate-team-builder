const Manager = require("../lib/Manager");

test("Create office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Max", 2, "max@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("OfficeNumber return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Max", 2, "max@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Role Test.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Max", 2, "max@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});