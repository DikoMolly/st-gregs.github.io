const email = document.getElementById("email");
const email__rst = document.getElementById("result");
const number = document.getElementById("number");
const num__rst = document.getElementById("number-result");
const enquire = document.getElementById("enquiries");
const enquire__rst = document.getElementById("enquiries-result");
const btn = document.getElementById("btnd");
const pattern = /^([aA-zZ]+[a-z0-9]*)+([A-Z0-9]*)+@+([a-z]*)+[.]+([a-z]{3})$/;
const number__pattern = /^([0-9]{11})$/

function validate(){
    if(pattern.test(email.value)) {
        email__rst.innerHTML="";
        
    }
    else if (email.value === "") {
        email__rst.innerHTML="email field is empty"
    }
    else{
        email__rst.innerHTML="invalid email address";
    }
    if (number__pattern.test(number.value)) {
        num__rst.innerHTML = "";
    }
    else if (number.value=== "") {
        num__rst.innerHTML="number field is empty";
    }
    else{
        num__rst.innerHTML = "invalid number";
    }
    if(enquire.value === "") {
        enquire__rst.innerHTML="Enquiries is empty";
    }
    else if (enquire.value !== "") {
        enquire__rst.innerHTML="";
    }
    
}
















btn.onclick=function(){
    validate();
}

  

















