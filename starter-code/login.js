console.log("login.js loaded");
let userLogin = {userName: "peanutbutter", userPassword: "jelly"}

function checkLogin(){
  let loginCheck = prompt(`Enter password for user ${userLogin.userName}.`);
  if (loginCheck != userLogin.userPassword){
    alert ("That password is incorrect. Please try again.");
      checkLogin()
  } else{alert ("That password is correct!");}
}

checkLogin()
