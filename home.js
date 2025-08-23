const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("accunt-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    // pin
    const pin = parseInt(document.getElementById("add-pin").value);
    // console.log(bank, accountNumber, amount, pin);
    const availableBlance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(availableBlance);
    const totalAvailabaleBalance = availableBlance + amount;
    // console.log(totalAvailabaleBalance);
    if (accountNumber.length < 11) {
      alert("Please provaid valid account number");
      return;
    }
    // pin arr jonno
    if (pin !== validPin) {
      alert("Please Provaid a Valid Pin Number");
      return;
    }
    // balance add korbo
    document.getElementById("available-balance").innerText =
      totalAvailabaleBalance;
  });
