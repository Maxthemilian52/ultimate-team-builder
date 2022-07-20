class Employee {
    constructor (name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    employeeName () {
        return this.name;
    }
    employeeEmail () {
        return this.email;
    }
    employeeId () {
        return this.id;
    }
    getRole () {
        return "Employee"
    }
}

module.exports = Employee;