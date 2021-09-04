

/*
Using js short hand to declare variables
*/
let price = 49.99,
    productName = 'Hiking Boots',
    message = `Welcome to ${productName}`,
    discounted = true;



function getSecretMessage(value){
    let code = value * 42;
    return code;
}

let person = {
    name : 'Sunny',
    age: 31,
    parTime: false,
    getMessage: function() {
        return getSecretMessage(90);
    }
};
//Variable assignment
let secretCode = getSecretMessage(3);
let personMessage = person.getMessage();
    (price < 10) ? showMessage(secretCode) : showMessage(personMessage)
    
    