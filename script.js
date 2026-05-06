function login() {
  const password = document.getElementById("password").value;

  if (password === "admin123") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Password salah";
  }
}
