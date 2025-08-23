// login button
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = 1327822021;
    const pinNuber = 1234;
    const mobileNumbervalue = document.getElementById("mobile-number").value;
    const mobileNumberValueConvert = parseInt(mobileNumbervalue);
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConvert = parseInt(pinNumberValue);

    if (
      mobileNumberValueConvert === mobileNumber &&
      pinNumberValueConvert === pinNuber
    ) {
      window.location.href = "./home.html";
    } else {
      alert("Invaild Credentital");
    }
  });
