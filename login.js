function login(user){
  if(!user){ return false; }
  // validacion de email
  if(!/^\S+@\S+\.\S+$/.test(user.email)){ return false; }

  // generar token
  user.token = generateToken(user);
  return true;
}
