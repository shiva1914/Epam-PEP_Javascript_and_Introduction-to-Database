function validEmail(email){
	return email.indexOf('@') != -1 && email.indexOf('.com') != -1;
}

function validPassword(password){
	return password.length>7;
}
function login(){
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	if(validEmail(email) && validPassword(password))
        alert ("Login successfully");
    else if(validEmail(email) == "" || validPassword(password) == "")
        alert("Please enter details!");
    else 
        alert("Invalid Credentials");
}
function register(){
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirm').value;
	if(validEmail(email) && validPassword(password)){
        if(password == confirmPassword)
            alert ("Registered successfully");
        else
			alert("Passwords donot match!");
    }
    else  if(validEmail(email) == "" || validPassword(password) == "" || confirmPassword == "")
        alert("Please enter details!");
    else
        alert("Invalid Email or Password");
}
