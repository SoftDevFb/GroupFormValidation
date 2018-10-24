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
        //document.getElementById("error").style.display = "block";
    }
    // return isValid;
}

//Checks Email Validity
function emailValid(frm){
    var email = /[a - zA - Z0 -9_. + -] @[a - zA - Z0 - 9 -]\.[a - zA - Z0 - 9 -.]/ ;

    if (email.test(frm.email.value) || frm.email.value == ""){
      isValid = false;
      frm.email.style.backgroundColor = "red";
      document.getElementById("error").style.display = "block";
    }
    //return isValid;
}


function validate(frm) {
    var phone = /d{3}[-|.| ]\d{3}[-|.| ]\d{4}/;

    if (phone.test(frm.phoneNumber.value)) {
        isValid = false;
        frm.phoneNumber.style.backgroundColor = "red";

    }

    //return isValid;
}

//Runs all of our functions in one onClick
function valForm(frm) {
    nameValid(frm);
    emailValid(frm);
    validate(frm);
    if (isValid == false) {
        document.getElementById("error").style.display = "block";
    }
    else if (isValid == true) {
        document.getElementById("error").style.display = "none";
    }
   return isValid;  
}


    
