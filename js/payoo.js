// login button
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login Button Click");
    console.log(event);
  });
