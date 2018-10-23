/*
Developers: Greg Pugh and Frankie Barrios
Date:       10/23/18
Purpose:    Javascript Form Validation
*/
function isValid(frm) {
    var isValid = true;
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (frm.email.value == "" || frm.email.value != email) {
        isValid = false;
        frm.email.style.backgroundColor = "red";
        document.getElementById("error").style.display = "block";
    }
}

function validate(frm){
    var isValid = true;
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(frm.phoneNumber.value == ""){
    isValid = false;
    frm.phoneNumber.style.borderColor = "red";
    
    }

    if(frm.phoneNumber.value != phone){
    isValid = false;
    frm.phoneNumber.style.borderColor="blue"

    }
    
return isValid;
}

function valForm(){
    isValid();
    validate();
}