const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const dataBase = require("./dataBase");
require("console.table")

init();

function init() {
    const logoText = logo({name: "Employee Manager" }).render();

    console.log(logoText);
    loadMainPrompts();
}

function loadMainPrompts() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {   name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {   
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {   
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {   
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {   
                    name: "VIEW All Role",
                    value: "VIEW_ROLES"
                },
                {   
                    name: "ADD Role",
                    value: "ADD_ROLE"
                },
                {   
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {   
                    name: "VIEW All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {   
                    name: "ADD Department",
                    value: "ADD_DEPARTMENT"
                },
                {   
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "View Total Utilized Budget By Department",
                    value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                viewEmployeesByDepartment();
                 break;
            case "VIEW_EMPLOYEES_BY_MANAGER":
                viewEmployeesByManager();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "UPDATE_EMPLOYEE_MANAGER":
                updateEmployeeManager();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "REMOVE_DEPARTMENT":
                removeDepartment();
                break;
            case "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT":
                viewUtilizedBudgetByDepartment();
                break; 
            case "VIEW_ALL_ROLES":
                viewAllRoles();
                break; 
            case "ADD_ROLE":
                addRole();
                break;  
            case "REMOVE_ROLE":
                removeRole();
                break;  
            case "QUIT":
                quit();
                break;                                       
        }
    }
    )
}

function viewEmployees() {
    dataBase.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        then(() => loadMainPrompts());
}