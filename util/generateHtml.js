function employeeCards(arrayOfEmployees) {
    let manager = []
    let engineers = [];
    let interns = [];
    console.log("hi");
    for (let i = 0; i < arrayOfEmployees.length; i++) {
        if (arrayOfEmployees[i].role == "Manager") {
            manager[i] =
                `<div class="bg-dark card">
                    <h5 class="text-light card-title">${arrayOfEmployees[i].name}</h5>
                    <h6 class="text-light card-subtitle mb-2 text-muted">${arrayOfEmployees[i].role}</h6>
                    
                    <div class="card-body">
                        <div class="bg-light card-text">
                            <h5>ID: ${arrayOfEmployees[i].id} </h5>
                        </div>
                        <div class="bg-light card-text">
                            <h5>Email: ${arrayOfEmployees[i].email} </h5>
                        </div>
                        <div class="bg-light card-text">
                            <h5>Office number: ${arrayOfEmployees[i].officeNumber} </h5>
                        </div>
                    </div>
                </div>`
        } else if (arrayOfEmployees[i].role == "Engineer") {
            engineers[i] = 
                `<div class="bg-dark card">
                        <h5 class="text-light card-title">${arrayOfEmployees.name}</h5>
                        <h6 class="text-light card-subtitle mb-2 text-muted">${arrayOfEmployees.role}</h6>
                        
                        <div class="card-body">
                            <div class="bg-light card-text">
                                <h5>ID: ${arrayOfEmployees.id} </h5>
                            </div>
                            <div class="bg-light card-text">
                                <h5>Email: ${arrayOfEmployees.email} </h5>
                            </div>
                            <div class="bg-light card-text">
                                <h5>Github: ${arrayOfEmployees.github} </h5>
                            </div>
                        </div>
                    </div>`
        } else if (arrayOfEmployees[i].role == "Intern") {
            interns[i] = `<div class="bg-dark card">
            <h5 class="text-light card-title">${arrayOfEmployees[i].name}</h5>
            <h6 class="text-light card-subtitle mb-2 text-muted">${arrayOfEmployees[i].role}</h6>
            
            <div class="card-body">
                <div class="bg-light card-text">
                    <h5>ID: ${arrayOfEmployees[i].id} </h5>
                </div>
                <div class="bg-light card-text">
                    <h5>Email: ${arrayOfEmployees[i].email} </h5>
                </div>
                <div class="bg-light card-text">
                    <h5>School: ${arrayOfEmployees[i].school} </h5>
                </div>
            </div>
        </div>`
        };
    };
    return `${manager} ${engineers} ${interns}`;
};

function generateHtml(arrayOfEmployees) {
    const cards = employeeCards(arrayOfEmployees);
    console.log(cards);
    return `< !DOCTYPE html >
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile</title>
                <!-- Links -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
                <link rel="stylesheet" href="./style/style.css">
            </head>

            <body>
                <div class="container">
                    ${cards};
                </div>
            </body>
    
    </html>`
};

module.exports = generateHtml;