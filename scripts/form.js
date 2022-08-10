const form = document.getElementById("signin");

form.addEventListener("submit", function (event)
{
	//Stop form submission
	event.preventDefault();

    //Check email address and password
    var result = checkLogin();

	//Validate the form
    if(result)
    {
        form.submit();
    }
   
});

function checkLogin()
{
    //Email address and password hardcoded
    let emailAddress = "test@test.com";
    let password = "test";
    
    let emailAddresElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");

    let emailAddresInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    if((emailAddresInput == emailAddress) && (passwordInput == password)) //Email and password correct
    {
        showMessage(form.elements["email"], "");
        emailAddresElement.classList.remove('is-invalid');
        emailAddresElement.classList.add('is-valid');
        
        showMessage(form.elements["password"], "");
        passwordElement.classList.remove('is-invalid');
        passwordElement.classList.add('is-valid');

        return true;
    }
    else if((emailAddresInput != emailAddress)) //Email incorrect (checking the password is not worthy)
    {
        showMessage(form.elements["email"], "The email address is not correct");
        emailAddresElement.classList.remove('is-valid');
        emailAddresElement.classList.add('is-invalid');

        showMessage(form.elements["password"], "");
        passwordElement.classList.remove('is-valid');
        passwordElement.classList.remove('is-invalid');

        return false;
    }   
    else if((emailAddresInput == emailAddress) && (passwordInput != password)) //Email is correct and password incorrect
    {           
        showMessage(form.elements["email"], "");
        emailAddresElement.classList.remove('is-invalid');
        emailAddresElement.classList.add('is-valid');

        showMessage(form.elements["password"], "The password is incorrect");
        passwordElement.classList.remove('is-valid');
        passwordElement.classList.add('is-invalid');
        return false;
    }

}

//Add a message to the corresponding input
function showMessage(input, message)
{
	//Set message in small element
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
}



