
let userForm = document.getElementById("user-form");
let userEntries = [];

const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");
    if(entries){
        entries = JSON.parse(entries);
    }
    else{
        entries = [];
    }
    return entries;
}

let userEntries = retrieveEntries();
const displayEntries = () => {
    const entries = retrieveEntries();
    
}
const saveUserForm = (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsandConditions = document.getElementById("acceptTerms").value;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsandConditions
    }

    userEntries.push(entry);

    localStorage.setItem("user-entries",JSON.stringify(userEntries));
}

userForm.addEventListener("submit",saveUserForm);
