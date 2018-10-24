/*
Developers: Greg Pugh and Frankie Barrios
Date:       10/23/18
Purpose:    Javascript Form Validation
*/

//Made global due to all of our functions utilizing this var
var isValid = true;

//Checks Name Validity
function nameValid(frm) {
    var name = /[0 -9_. + -]/;
    if (name.test(frm.name.value) || frm.name.value == "") {
        isValid = false;
        frm.name.style.backgroundColor = "red";
     //   document.getElementById("error").style.display = "block";
   }
   // return isValid;
}

//Checks Email Validity
function emailValid(frm) {
    var email = /[a - zA - Z0 -9_. + -] @[a - zA - Z0 - 9 -]\.[a - zA - Z0 - 9 -.]/;

    if (email.test(frm.email.value) || frm.email.value == "") {
        isValid = false;
        frm.email.style.backgroundColor = "red";
        // document.getElementById("error").style.display = "block";
    }
    //return isValid;
}

function radioValidation(frm) {
 if(frm.gender[0].checked == false && frm.gender[1].checked == false && frm.gender[2].checked == false){
    isValid = false;
    male.style.backgroundColor = "red";
    female.style.backgroundColor ="red";
    other.style.backgroundColor="red";
  }
}

    function selectValidate(frm) {
        if (frm.cars[0].selected) {

        }

    }

    function validate(frm) {
        var phone = /d{3}[-|.| ]\d{3}[-|.| ]\d{4}/;

        if (phone.test(frm.phoneNumber.value) || frm.phoneNumber.value == "") {
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
        radioValidation(frm);
        if (isValid == false) {
            document.getElementById("error").style.display = "block";
        }
        return isValid;
    }
