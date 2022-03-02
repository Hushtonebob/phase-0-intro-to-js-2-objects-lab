// Write your solution in this file!
const employee = {
name:`Bob`,
streetAddress: `Abbey Rd`,
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newObj = {...employee}
    newObj.name = "Sam";
    newObj.streetAddress = "11 Broadway";
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway";
return employee;
}

function deleteFromEmployeeByKey(employee) {
    const newObj = {...employee}
    delete newObj.name;
return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    delete employee.streetAddress;    
return employee;
}
