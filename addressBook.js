var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

var printPerson = function(person) {
    console.log(person.firstName + " " + person.lastName)
};

// printPerson(contacts[0]);
// printPerson(contacts[1]);

// writing out screen to list out all the contacts

// Keeping the variable contactsLength local vs global
function list() {
    var contactsLength = contacts.length; 
    for (i = 0; i < contacts.length; i++){
        printPerson(contacts[i]);
    }
};

list();