function generateEmployee(data) {
    if(data.name === "manager") {
        
    }
};

function employeeCards(arrayOfEmployees) {
    let result = `` 
    for(let emp of arrayOfEmployees)
//     <div class="bg-dark card" style="width: 15rem;">
//     <h5 class="text-light card-title">${data.manager.name}</h5>
//     <h6 class="text-light card-subtitle mb-2 text-muted">${data.manager.role}</h6>
//     <div class="card-body">
//         <div class="bg-light card-text">
//             <h5>ID: ${data.manager.id} </h5>
//         </div>
//         <div class="bg-light card-text">
//             <h5>Email: ${data.manager.email} </h5> 
//         </div>
//         <div class="bg-light card-text">
//             <h5>Office number: ${data.manager.officeNumber} </h5>
//         </div>
//     </div>
// </div>`
return result; 
}

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- Links -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container">
            ${employeeCards(arrayOfEmployees)}
            
        </div>
    </body>
    
    </html>`
};