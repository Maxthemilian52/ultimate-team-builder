const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Maxthemilian";
    const employeeInstance = new Engineer("Max", 2, "max@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Maxthemilian";
    const employeeInstance = new Engineer("Max", 2, "max@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Max", 2, "max@gmail.com", "Maxthemilian");
    expect(employeeInstance.getRole()).toBe(returnValue);
});