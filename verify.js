/*
Developers: Greg Pugh and Frankie Barrios
Date:       10/23/18
Purpose:    Javascript Form Validation
*/

//Made global due to all of our functions utilizing this var
var isValid = true;

//Checks Name Validity
function nameValid(frm) {
<<<<<<< HEAD
    var name = /^[a-zA-Z]/;
=======
    var name = /[0 -9_. + -]/;
>>>>>>> 3c2b7108aff8bdb0974669d385aedabbdfdc1fcf
    if (name.test(frm.name.value) || frm.name.value == "") {
        isValid = false;
        frm.name.style.backgroundColor = "red";
        //document.getElementById("error").style.display = "block";
    }
    // return isValid;
}

//Checks Email Validity
function emailValid(frm){
<<<<<<< HEAD
    var email = /[a - zA - Z0 -9_. + -] @[a - zA - Z0 - 9 -]\.[a - zA - Z0 - 9 -.]/ ;

    if (email.test(frm.email.value) || frm.email.value == ""){
=======
    var email = /[a - zA - Z0 -9_. + -]@[a - zA - Z0 - 9 -]\.[a - zA - Z0 - 9 -.]/ ;

    if (email.test(frm.email.value)|| frm.email.value == "") {
>>>>>>> 3c2b7108aff8bdb0974669d385aedabbdfdc1fcf
      isValid = false;
      frm.email.style.backgroundColor = "red";
     // document.getElementById("error").style.display = "block";
    }
    //return isValid;
}


function validate(frm) {
    var phone = /d{3}[-|.| ]\d{3}[-|.| ]\d{4}/;

    if (phone.test(frm.phoneNumber.value)|| frm.phoneNumber.value =="") {
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
   return isValid;  
}


    
