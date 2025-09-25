// feature: validacion de email (archivo login.js)
function login(user){
  if(!user){ return false; }
  // nueva validacion: email
  if(!/^\S+@\S+\.\S+$/.test(user.email)){ return false; }
  return true;
}