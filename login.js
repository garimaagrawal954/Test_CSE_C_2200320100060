document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (username === "csec" && password === "csec") {
      window.location.href = "redi.html";
    } else {
      errorMessage.textContent = "Incorrect Username or Password";
    }
  });