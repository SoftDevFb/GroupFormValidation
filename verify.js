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