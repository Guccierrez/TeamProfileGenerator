const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")

const inquirer = require("inquirer")
const fs = require("fs")
const allEmployees = []
const renderHTML = require ("./src/renderHTML")


function generateEmployee() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role at the company',
            choices: ["Manager", "Engineer", "Intern", "quit"]
        },
    ])


     .then((answers) => {


        if (answers.role === "Manager") {
            console.log(answers)
          generateManager()

            } else if(answers.role === "Engineer"){
           console.log(answers)
            generateEngineer()

            }else if(answers.role === "Intern"){
            console.log(answers)
               generateIntern()

            } else{ 
            console.log("done")
                printcard();
            } 
     });
 }





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
]).then(response => {
    let engineer = new Engineer(response.name, response.id, response.email, response.officeNumber)

    allEmployees.push(engineer)
    generateEmployee()
})
}


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
        ]).then(response => {
            let intern = new Intern(response.name, response.id, response.email, response.school)
    
            allEmployees.push(intern)
            // insert add new member function here**
            generateEmployee()
        })
    }
    





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
                    name: 'officeNumber',
                    message: 'What is your office number',
                },
            ]).then(response => {
                let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        
                allEmployees.push(manager)
                // insert add new member function here**
                generateEmployee()
            })
        }
        function printcard(){
        fs.writeFile('generate-index.html', renderHTML(allEmployees), (err) =>
          err ? console.log(err) : console.log('yezzur html has dun been generated')
        );
        }
    generateEmployee()