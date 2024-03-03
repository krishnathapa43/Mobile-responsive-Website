const signupForm = document.forms.signup;

const nameInput = signupForm.name;
const emailInput = signupForm.email;
const passwordInput = signupForm.password;
const confirmpasswordInput = signupForm.confirmpassword;
const submitButton = document.getElementById("submitButton");
hasError = false;

submitButton.addEventListener("click",function(e){
    e.preventDefault();

    if(nameInput.value.trim() ==""){
        const nameGroup = document.getElementById("nameGroup");
        const nameMessage = document.querySelector("#nameGroup .message");
        nameGroup.classList.add("error");
        nameMessage.textContent = "Name is required";
        hasError = true;
    }

    if(emailInput.value == ""){
        const emailGroup = document.getElementById("emailGroup");
        const emailMessage = document.querySelector("#emailGroup .message");
        emailGroup.classList.add("error");
        emailMessage.textContent = "Email is required";
        hasError = true;
    }

    const isEmail = /^\w+@\w+.\w{3}$/.test(emailInput.value);
    if(!isEmail){
        const emailGroup = document.getElementById("emailGroup");
        const emailMessage = document.querySelector("#emailGroup .message");
        emailGroup.classList.add("error");
        emailMessage.textContent = "Must be in email format";
        hasError = true;
    }

     
    if(passwordInput.value != confirmpasswordInput.value){
        const passwordGroup = document.getElementById("passwordGroup");
        const passwordMessage = document.querySelector("#passwordGroup .message");
        passwordGroup.classList.add("error");
        passwordMessage.textContent = "password doesn't match";
        hasError = true;
    }

    if(! hasError){
        signup.submit();
    }
   
    
});
