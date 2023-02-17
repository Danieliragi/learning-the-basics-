function validation() {
  let userName = document.getElementById("username").value
  let passwordUser = document.getElementById("password").value

  let ageUser = document.getElementById("age").value;

  if (userName == "daniel" && passwordUser == "2020" && ageUser >= 20) {
    alert("successfully signup")
  }else {
    alert("wrong user")
  }
}   