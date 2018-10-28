/*
Developers: Greg Pugh and Frankie Barrios
Date:       10/23/18
Purpose:    Javascript Form Validation
*/

//Made global due to all of our functions utilizing this var
var isValid = true;

//Checks Name Validity
function nameValid(frm) {
    var name = /[0 -9_. + -] + [0 -9_. + -]/;
    if (name.test(frm.name.value) || frm.name.value == "" || frm.name.value.length < 6) {
        isValid = false;
        frm.name.style.backgroundColor = "red";
    } else {
        frm.name.style.backgroundColor = "white";
    }
}

//Checks Email Validity
function emailValid(frm) {
    var email = /[a - zA - Z0 -9_. + -] @[a - zA - Z0 - 9 -]\.[a - zA - Z0 - 9 -.]/;

    if (email.test(frm.email.value) || frm.email.value == "") {
        isValid = false;
        frm.email.style.backgroundColor = "red";
        // document.getElementById("error").style.display = "block";
    } else {
        frm.email.style.backgroundColor = "white";
    }
    //return isValid;
}

function radioValidation(frm) {
    if (!frm.gender[0].checked && !frm.gender[1].checked && !frm.gender[2].checked) {
        isValid = false;
        for (i = 0; i < 3; i++) {
            frm.gender[i].style.outline = "1px solid red";
        }
    } else {
        for (i = 0; i < 3; i++) {
            frm.gender[i].style.outline = "none";
        }
    }
}

function selectValidate(frm) {
    if (frm.cars.selectedIndex == 0) {
        frm.cars.style.border = "1px solid red";
        isValid = false;
    } else frm.cars.style.border = "none"

}

function validate(frm) {
    var phone = /d{3}[-|.| ]\d{3}[-|.| ]\d{4}/;

    if (phone.test(frm.phoneNumber.value) || frm.phoneNumber.value == "") {
        isValid = false;
        frm.phoneNumber.style.backgroundColor = "red";
    } else {
        frm.phoneNumber.style.backgroundColor = "white";
    }

    //return isValid;
}

//Runs all of our functions in one onClick
function valForm(frm) {

    nameValid(frm);
    emailValid(frm);
    validate(frm);
    radioValidation(frm);
    selectValidate(frm);
    if (isValid == false) {
        document.getElementById("error").style.display = "block";        
    }

    return isValid;
}