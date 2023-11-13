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

userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class = 'border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class = 'border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class = 'border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class = 'border px-4 py-2'>${entry.dob}</td>`;
        const termsandConditionsCell = `<td class = 'border px-4 py-2'>${entry.acceptedTermsandConditions}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${termsandConditionsCell}</tr>`;
        return row;
    }).join('\n');

    const table = `<table class = 'table-auto w-full'<tr>
     <th class = 'px-4 py-2'> <u> Name </u> </th>
     <th class = 'px-4 py-2'> <u> Email </u> </th>
     <th class = 'px-4 py-2'> <u> Password </u> </th>
     <th class = 'px-4 py-2'> <u> dob </u> </th>
     <th class = 'px-4 py-2'> <u> accepted terms? </u> </th>
     </tr>${tableEntries} </table>`;

    let details = document.getElementById("user-entries");
    details.innerHTML = table;
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

    if(Number(dob.substring(6,9)) < 2005 || Number(dob.substring(6,9)) > 1968){
        userEntries.push(entry);
    }
    
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
}


userForm.addEventListener("submit",saveUserForm);
displayEntries()
