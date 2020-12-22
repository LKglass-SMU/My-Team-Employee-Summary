// TODO: Write code to define and 
//export the Employee class

//the instance of the object i have to create which will automatically create a prototype

let PersonA = function(id, email) {
      this.id = id;
      this.email = email
    }
   //this is a method being added to the prototype 
    PersonA.prototype.getDetails = function() {
        return `ID: ${this.id} : ${this.email}`;
    }
//this is my prototype
//getDetails returns: name, id and email
//when I use new it will return an object
let team = new PersonA(00, "smucompany@gitlab.com");
console.log(team.getDetails());

//my new class makes the connection to PersonA and adds 3rd property 
let EmployeeB = function(id, email, github) {
        PersonA.call(this, id, email);
        this.github = github;
    }

//this creates the link between the 2 
Object.setPrototypeOf(EmployeeB, PersonA.prototype);
EmployeeB.prototype.employeeInfo = function() {
    return `ID:${this.id} Email: ${this.email} GitHub: ${this.github}`;
};
let kendra = new EmployeeB(40, "kendra@gmail.com", "smu.team.kendra");
console.log(kendra.employeeInfo());

let tyler = new EmployeeB(50, "tyler@yahoo.com", "smu.team.kendra");
console.log(tyler.employeeInfo());

let henry = new EmployeeB(60, "henry@gmail.com", "smu.team.kendra");
console.log(henry.employeeInfo());

let bruce = new EmployeeB(70, "bruce@yahoo.com", "smu.team.kendra");
console.log(bruce.employeeInfo());

let netreia = new EmployeeB(80, "netreia@gmail.com", "smu.team.kendra");
console.log(henry.employeeInfo());

// use inquirer to gather information about the development team members,
// and create objects for each (using the correct classes as blueprints!)
