const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")

const inquirer = require("inquirer")
const fs = require("fs")
const allEmployees = []
// const generateHTML = require ("./generatehtml.js")



const generateHTML = ({ name, id, email, github, officeNumber, school }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${id}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;



function checkRole() {
    let roleQuestions = [
        {
            type: 'list',
            name: 'role',
            message: 'What is your role at the company',
            choices: ["Manager", "Engineer", "Intern", "quit"]
        }
    ]
    inquirer.prompt(roleQuestions).then((data) => {
        if (data.role === "Manager") {
            inquirer.prompt(managerQuestions).then((data) => {
                console.log(data)
                const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
                allEmployees.push(manager)
                checkRole()
            })
        }else if(data.role === "Engineer"){
            inquirer.prompt(engineerQuestions).then((data) => {
                console.log(data)
                const engineer = new Engineer(data.name, data.id, data.email, data.github)
                allEmployees.push(engineer)
                checkRole()
            });
        }else if(data.role === "Intern"){
            inquirer.prompt(internQuestions).then((data) => {
                console.log(data)
                const intern = new Intern(data.name, data.id, data.email, data.school)
                allEmployees.push(intern)
                checkRole()
            })   
        }
        else if(data.role === "quit"){
            console.log(allEmployees)
            console.log(allEmployees[0].name)
            for (let i = 0; i < allEmployees.length; i++) {
                const employee = allEmployees[i];
                console.log(employee.getRole())
            }
            // fs.writeFile("./dist/employee.html", function(err){
            //     if(err) 
            //     console.log(err);
            // })
        }

    })
}
checkRole()




function generateEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username',
        },
])}

    function generateIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did you go to?',
            },
        ])}

        function generateManager() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your ID number?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email?',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your office number',
                },
            ])

        }








// const managerQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your ID?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email?',
//     },
//     {
//         type: "input",
//         name: "officeNumber",
//         message: "What is your office number?"
//     }
// ]

// const engineerQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your ID?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email?',
//     },
//     {
//         type: "input",
//         name: "github",
//         message: "What if your github username"
//     },
// ]

// const internQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your ID?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email?',
//     },
//     {
//         type: "input",
//         name: "school",
//         message: "What school are you attending"
//     }
// ]
// html.push(team
//     .filter(employee => employee.getRole() === "Manager")
//     .map(manager => generateManager(manager))
// );
