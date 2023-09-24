const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage() {
  const userJSON = JSON.stringify(user);
  localStorage.setItem('user', userJSON);  
}

function recoverFromLocalStorage(){
  return JSON.parse(localStorage.getItem('user'));
  
}
saveUserToLocalStorage();
console.log(recoverFromLocalStorage())
