const visibilityBtn = document.getElementById("showBtn");
visibilityBtn.addEventListener("click",toggleVisibility);

function toggleVisibility() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  }else {
    passwordInput.type="password";
  }
};

function checkData() {
  if( document.myForm.name.value === "" ) {
     alert( "Please provide your name!" );
     document.myForm.name.focus() ;
     return false;
  }
  if( document.myForm.surn.value === "" ) {
     alert( "Please provide your Surname!" );
     document.myForm.surn.focus() ;
     return false;
  }
  if( document.myForm.password.value === "" ) {
     alert( "Please provide your Email!" );
     document.myForm.password.focus() ;
     return false;
   }
  if( document.myForm.email.value === "" ) {
     alert( "Please provide your Email!" );
     document.myForm.email.focus() ;
     return false;
  }
   return( true );
}
