document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if(!user || ! pass){
    alert("Please fill in both fields.");
    return;
  }

  if(user == "Ritesh@62" && pass == "62095"){
    alert("Login Successful");
    window.location.href = "Profile.html";
  }else{
    alert("Invalid credentials.");
  }
});

document.getElementById("forgetLink").addEventListener("click",function(e){
  e.preventDefault();
  alert("password reset flow goes here.")
});




