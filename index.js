function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML=value;
}

function generatePassword() {
    var length = document.getElementById("length").value,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_=-+[]{}|;:',.<>?/",
        custom = document.getElementById("custom").value,
        password = "";
        copied = "Copied ✔";
    if (custom) {
        charset += custom;
    }
    for (var i = 0, n = charset.length; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").textContent = password;
    navigator.clipboard.writeText(password);
    document.getElementById("copied").textContent = copied;
    
}
