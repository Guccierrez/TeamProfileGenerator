

const generateAllEmployees = allEmployees => {
    const html = [];
    
    
    const genManager = manager => {
        return `
        <div class="card employee-card mr-4 ml-4 mb-3">
        <div class="card-header text-center">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        <li class="list-group-item">Room Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
        `;
    };
    
    const genEngineer = engineer => {
        return `
<div class="card employee-card mr-4 ml-4 mb-3">
<div class="card-header text-center">
<h2 class="card-title">${engineer.getName()}</h2>
<h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item">ID: ${engineer.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
<li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
</ul>
</div>
</div>
`
};

const genIntern = intern => {
    return `
    
    <div class="card employee-card mr-4 ml-4 mb-3 ">
    <div class="card-header text-center">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fa fa-graduation-cap mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>
    </div>
    
    
    `
}

html.push(allEmployees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => genManager(manager))
    );
    html.push(allEmployees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => genEngineer(engineer))
        );
        html.push(allEmployees
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => genIntern(intern))
            );
            
            return html.join("");
            
        }
        
        
        module.exports = allEmployees => {
            return`
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
            </head>
            
            <body>
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00FFFF" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,58.7C960,32,1056,32,1152,69.3C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                     <header class="blog-header col-12 pb-4">
                         <div class="col-12 text-center">
                             <H1 class="blog-header-logo fw-bold" >Gucci's Team Generator</h1>
                             </div>
                         </header>
            <div class="container-fluid">
            <div class="row">
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateAllEmployees(allEmployees)}
            </div>
            </div>
            </div>
            </body>
            </html>
            `
        }

        // const generateAllEmployees = allEmployees
        // const html = [];
        
        
        
        
        
        // html.push(GenerateAllEmployees
        //     .filter(employee => employee.getRole() === "Manager")
        //     .map(manager => generateManager(manager))
        // );
        
        // html.push(GenerateAllEmployees
        //     .filter(employee => employee.getRole() === "Engineer")
        //     .map(engineer => generateEngineer(engineer))
        //     );
            
        //     html.push(GenerateAllEmployees
        //         .filter(employee => employee.getRole() === "Intern")
        //         .map(intern => generateIntern(intern))
        //         .join("")
        //     );
            
            
        
        //
        
        
        
        
        
        
        
        
        // module.exports = allEmployees => {
        
           // return `
            // write intial html
            // 
            // 
            // 
            // 
            // 
            // 
            //`
        
        
        // }
        
        // <!DOCTYPE html>
        // <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Gucci's Team Generator</title>
                
        //         <link rel="stylesheet" href="./assets/style.css">
        //         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
        //     </head>
            
        //     <body class="bg-info">
        //         <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00FFFF" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,58.7C960,32,1056,32,1152,69.3C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        //         <header class="blog-header col-12 pb-4">
        //             <div class="col-12 text-center">
        //                 <H1 class="blog-header-logo fw-bold" >Gucci's Team Generator</h1>
        //                 </div>
        //             </header>
        
        
        //             <div>
        //             generateEmployees(allEmployees)
        //             </div>
        
        
        
        
        //                 let generateManager = manager => {
        //                     return`
        //             <div class="card employee-card mr-4 ml-4 mb-3">
        //                 <div class="card-header text-center">
        //                     <h2 class="card-title">${manager.getName()}</h2>
        //                     <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${manger.getRole}</h3>
        //                 </div>
        //                 <div class="card-body">
        //                     <ul class="list-group">
        //                         <li class="list-group-item">ID: ${manager.getId}</li>
        //                         <li class="list-group-item">Email: <a href="mailto:${manager.getEmail}">${manager.getEmail}</a></li>
        //                         <li class="list-group-item">Room Number: {manager.getOfficeNumber}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             `;
        //         }
        
        
        //             let generateEngineer = engineer => {
        //                 return `
        //             <div class="card employee-card mr-4 ml-4 mb-3">
        //                 <div class="card-header text-center">
        //                     <h2 class="card-title">${engineer.getName()}</h2>
        //                     <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${engineer.getRole}</h3>
        //                 </div>
        //                 <div class="card-body">
        //                     <ul class="list-group">
        //                         <li class="list-group-item">ID: ${engineer.getId}</li>
        //                         <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail}">${enginer.getEmail}</a></li>
        //                         <li class="list-group-item">Github: {engineer.getGithub}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             `;
        //         };
        
        //                let generateIntern = intern => {
        
        //                    <div class="card employee-card mr-4 ml-4 mb-3">
        //                        <div class="card-header text-center">
        //                            <h2 class="card-title">${intern.getName()}</h2>
        //                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole}</h3>
        //                         </div>
        //                         <div class="card-body">
        //                             <ul class="list-group">
        //                                 <li class="list-group-item">ID: ${intern.getId}</li>
        //                                 <li class="list-group-item">Email: <a href="mailto:${intern.getEmail}">$intern.getEmail</a></li>
        //                                 <li class="list-group-item">School: {intern.getSchool}</li>
        //                             </ul>
        //                         </div>
        //                     </div>
                            
        //                     `;
        //                 };
        
                    
                        
        //             </body>
        //             </html>