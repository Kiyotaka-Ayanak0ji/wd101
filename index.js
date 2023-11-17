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


const displayEntries = () => {
    const entries = retrieveEntries();
    
    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class = 'mx-auto border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class = 'mx-auto border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class = 'mx-auto border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class = 'mx-auto border px-4 py-2'>${entry.dob}</td>`;
        const termsandConditionsCell = `<td class = 'mx-auto border px-4 py-2'>${entry.acceptedTermsandConditions}</td>`;
        
        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${termsandConditionsCell}</tr>`;
        return row;
    }).join('\n');
    
    const table = `<table class = 'table-auto w-full'<tr>
    <th class = 'px-4 py-2 mx-auto my-auto font-semi-bold underline text-l'> Name </th>
    <th class = 'px-4 py-2 mx-auto my-auto font-semi-bold underline text-l'> Email </th>
    <th class = 'px-4 py-2 mx-auto my-auto font-semi-bold underline text-l'> Password </th>
    <th class = 'px-4 py-2 mx-auto my-auto font-semi-bold underline text-l'> Dob </th>
    <th class = 'px-4 py-2 mx-auto my-auto font-semi-bold underline text-l'> Accepted terms? </th>
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
    const acceptedTermsandConditions = document.getElementById("acceptTerms").checked;
    
    
    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsandConditions
    }
    
    userEntries = retrieveEntries();
    userEntries.push(entry);
    
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    }

    let curr = new Date();
    
    let maxD = new Date(curr);
    maxD.setFullYear(maxD.getFullYear() - 18);
    
    let minD = new Date(curr);
    minD.setFullYear(minD.getFullYear() - 56);
    
    document.getElementById("dob").setAttribute("max", maxD.toISOString().slice(0, 10));
    document.getElementById("dob").setAttribute("min", minD.toISOString().slice(0, 10));
    document.getElementById("form").addEventListener("submit", submit);
    
    displayEntries();
    userForm.reset();
}

userForm.addEventListener("submit",saveUserForm);
displayEntries();
