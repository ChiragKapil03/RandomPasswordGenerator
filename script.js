function generatePassword() {
    let passLength = document.getElementById('length');
    const length = passLength.value; 
    const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const low = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let capital = document.getElementById("checkbox1");
    let lower = document.getElementById("checkbox2");
    let numeric = document.getElementById("checkbox3");
    let symbols = document.getElementById("checkbox4");

    let char = ""; 
    let password = "";

    if (capital.checked) {
        char += cap;
    }
    if (lower.checked) {
        char += low;
    }
    if (numeric.checked) {
        char += num;
    }
    if (symbols.checked) {
        char += sym;
    }

    if (char.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    
    passwordField.select();
    // passwordField.setSelectionRange(0, 99999); 
    
    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy password");
        });
}
