// develop: generar token (archivo login.js)
function login(user){
  if(!user){ return false; }
  // generate token
  user.token = generateToken(user); // suponiendo que existe generateToken
  return true;
}
