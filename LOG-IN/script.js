let users = JSON.parse(localStorage.getItem("users")) || [];


const signupBox = document.getElementById("signupBox");
const loginBox = document.getElementById("loginBox");
const successBox = document.getElementById("successBox");
const successText = document.getElementById("successText");


function showSignup(){
  signupBox.classList.remove("hidden");
  loginBox.classList.add("hidden");
  successBox.classList.add("hidden");
}

function showLogin(){
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
  successBox.classList.add("hidden");
}

function backToLogin(){
  showLogin();
}


function resetSignup(){
  document.getElementById("signupUsername").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("signupMsg").textContent = "";
}

function resetLogin(){
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginMsg").textContent = "";
}


function signup(){
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const msg = document.getElementById("signupMsg");

 
  if(!username || !password){
    msg.textContent = "Username and Password are required";
    msg.className = "error";
    return;
  }
  if(password.length < 6){
  msg.textContent = "Password must be at least 6 characters";
  msg.className = "error";
  return;
}

  const exists = users.find(u => u.username === username);

  if(exists){
    msg.textContent = "User already exists";
    msg.className = "error";
    return;
  }

  users.push({username, password});
  localStorage.setItem("users", JSON.stringify(users));

  msg.textContent = "Successfully signed up!";
  msg.className = "success";

  setTimeout(() => {
    showLogin();
  }, 1200);
}


function login(){
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const msg = document.getElementById("loginMsg");

  if(!username || !password){
    msg.textContent = "All fields are required";
    msg.className = "error";
    return;
  }

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if(!user){
    msg.textContent = "Invalid username or password";
    msg.className = "error";
    return;
  }

  successText.textContent = "Successfully logged in!";
  showSuccess();
}


function showSuccess(){
  signupBox.classList.add("hidden");
  loginBox.classList.add("hidden");
  successBox.classList.remove("hidden");
}