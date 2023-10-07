const fs = require("fs");
const prompt = require("prompt-sync")();

let storge =  fs.readFileSync("db.json");
let  obj = JSON.parse(storge);
console.log(obj);

while(true) {
    console.log("1 = read user\n 2 = delete user \n  3 = update user \n 4 = create user");
    const input = prompt("Enter choice: ");
    if (input == 1) {
        console.log(readUser(prompt("Enter the ID: ")));
    }
    else if (input == 2) {
        deleteUser(prompt("Enter the ID"));
    }
    else if (input == 3) {

        updateUser(prompt("Enter the name"));
        updateUser(prompt("Enter the age "));
        updateUser(prompt("Enter the city "));
    }
    else if (input == 4) {
        createUser(prompt("Enter the name"));
        createUser(prompt("Enter the age"));
        createUser(prompt("Enter the city"));
    }
}

function readUser(id){
    return obj[id];
}
function deleteUser(id){
    delete users[id]
}
function updateUser(id, name, age, city){

       if(users[id]=== undefined){
        console.log("the user is not defined");
       }
       else users[id]={
        name,
        age,
        city 
       }
       

}
function createUser(id, name, age, city){

    users[id]={
     name,
     age,
     city
    }
    let dateToString= JSON.stringify(users)
    fs.writeFileSync("db.json", dateToString)

}
