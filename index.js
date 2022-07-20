const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the first and last name of your manager'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter employee ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter manager office number.'
        },
    ])
    .then((data) => {
        
    })
}