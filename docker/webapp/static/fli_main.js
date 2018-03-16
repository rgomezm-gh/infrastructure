
//--> Valida email and password fields
function valida_login() {
  submitOK="true"
  var themessageOne = "You are required to complete the following fields:";
  var email=document.loginForm.email.value;
  var password=document.loginForm.password.value;
  if (email=="") {themessageOne = themessageOne + " - eMail address"; submitOK="false";}
  if (password=="") {themessageOne = themessageOne + " - Your password"; submitOK="false";}
  if (submitOK == "false") {
     alert(themessageOne);
     return false;
  }
  var themessageTwo = "Invalid value(s) for:";
  var emailFilter=/^.+@.+\..{2,3}$/;
  if (!(emailFilter.test(email))) {themessageTwo = themessageTwo + " - Invalid eMail"; submitOK="false";}
  if (submitOK == "false") {
    alert(themessageTwo);
    return false;
  } else {
    alert("Values OK ");
    return true;
 }
}

//--> Valida fields new account
function valida_newaccount() {
  submitOK="true"
  var themessageOne = "You are required to complete the following fields:";
  var firstname=document.newAccountForm.firstname.value;
  var lastname=document.newAccountForm.lastname.value;
  var mobilenumber=document.newAccountForm.mobilenumber.value;
  var mobilenumber2=document.newAccountForm.mobilenumber2.value;
  var emailaddress=document.newAccountForm.emailaddress.value;
  var emailaddress2=document.newAccountForm.emailaddress2.value;
  var newpassword=document.newAccountForm.newpassword.value;

  if (firstname=="") {themessageOne = themessageOne + " - First name"; submitOK="false";}
  if (lastname=="") {themessageOne = themessageOne + " - Last name"; submitOK="false";}
  if (mobilenumber=="") {themessageOne = themessageOne + " - Mobile number"; submitOK="false";}
  if (mobilenumber2=="") {themessageOne = themessageOne + " - Mobile number"; submitOK="false";}
  if (emailaddress=="") {themessageOne = themessageOne + " - eMail address"; submitOK="false";}
  if (emailaddress2=="") {themessageOne = themessageOne + " - eMail address"; submitOK="false";}
  if (newpassword=="") {themessageOne = themessageOne + " - Your password"; submitOK="false";}
  if (submitOK == "false") {
     alert(themessageOne);
     return false;
  }
  var themessageTwo = "Invalid value(s) for:";
  var emailFilter=/^.+@.+\..{2,3}$/;
  if (isProper(firstname)==false) {themessageTwo = themessageTwo + " - First Name"; submitOK="false";}
  if (isProper(lastname)==false) {themessageTwo = themessageTwo + " - Last Name"; submitOK="false";}
  if (isNaN(mobilenumber)) {themessageTwo = themessageTwo + " - Mobile number must be numeric "; submitOK="false";}
  if (!(emailFilter.test(emailaddress))) {themessageTwo = themessageTwo + " - Invalid eMail"; submitOK="false";}
  if (!(emailFilter.test(emailaddress2))) {themessageTwo = themessageTwo + " - eMail"; submitOK="false";}
  if (submitOK == "false") {
    alert(themessageTwo);
    return false;
  } 

  var themessageThree = "Value does not match for:";
  if (emailaddress != emailaddress2) {themessageThree = themessageThree + " - eMail"; submitOK="false";}
  if (mobilenumber != mobilenumber2) {themessageThree = themessageThree + " - Mobile Number"; submitOK="false";}
  if (submitOK == "false") {
    alert(themessageThree);
    return false;
  } else {
    alert("Values OK ");
    return true;
  }
}

function isProper(string) {
   if (!string) return false;
   if (string.length < 2) return false;
   var iChars = "*|, /\":!<>[]{}`\';()@&$#%";
   for (var i = 0; i < string.length; i++) {
      if (iChars.indexOf(string.charAt(i)) != -1)
         return false;
   }
   return true;
}

function isProperS(string) {
   if (!string) return false;
   if (string.length < 2) return false;
   var iChars = "*|,/\":!<>[]{}`\';()@&$#%";
   for (var i = 0; i < string.length; i++) {
      if (iChars.indexOf(string.charAt(i)) != -1)
         return false;
   }
   return true;
} 

