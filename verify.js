/*
Developers: Greg Pugh and Frankie Barrios
Date:       10/23/18
Purpose:    Javascript Form Validation
*/
//Made global due to all of our functions utilizing this var
var isValid = true;

//Checks Name Validity
function nameValid(frm) {
    if (frm.name.value == "" || frm.name.value < 6) {
        isValid = false;
        frm.name.style.backgroundColor = "red";
        document.getElementById("error").style.display = "block";
    }
   // return isValid;
}

//Checks Email Validity
function emailValid(frm){
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (frm.email.value == "" || frm.email.value != email) {
        isValid = false;
        frm.email.style.backgroundColor = "red";
        document.getElementById("error").style.display = "block";
    }
    //return isValid;
}


function validate(frm){
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(frm.phoneNumber.value == ""){
    isValid = false;
    frm.phoneNumber.style.borderColor = "red";
    
    }

    if(frm.phoneNumber.value != phone){
    isValid = false;
    frm.phoneNumber.style.borderColor="blue"

    }
    
//return isValid;
}

//Runs all of our functions in one onClick
function valForm(frm){
  nameValid(frm);
  emailValid(frm); 
  validate(frm); 
  return isValid; 
    
}