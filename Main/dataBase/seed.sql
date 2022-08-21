INSERT INTO department (id, name)
VALUES (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO roles (id, title, department_id, salary, department_id)
VALUES (1, "Sales Lead", "Sales", 100000, 001),
        (2, "Salesperson", "Sales", 80000, 001),
        (3, "Lead Engineer", "Engineering", 150000, 002),
         (4, "Software Engineer", "Engineering", 120000, 002),
        (5, "Account Manager", "Finance", 160000, 003),
        (6, "Accountant", "Finance", 125000, 003),
        (7, "Legal Team Lead", "Legal", 250000, 004),
        (8, "Lawyer", "Legal", 190000, 004);

INSERT INTO employees (employee_first_name, employee_last_name, role_id, manager_id)
VALUES ("John", "Doe", 001, NULL),
        ("Mike", "Chan", 002, 001),
        ("Ashley", "Rodriguez", 003, NULL),
        ("Kevin", "Tupik", 004, 003),
        ("Kunal", "Singh", 005, NULL),
        ("Malia", "Brown", 006, 005),
        ("Sarah", "Lourd", 007, NULL),
        ("Tom", "Allen", 008, 007);