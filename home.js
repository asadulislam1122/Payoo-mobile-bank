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

// cash out feture

// button
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // ###########
    const amount = parseInt(document.getElementById("withdraw-amount").value);

    const accountNumber = document.getElementById("agent-number").value;

    const pin = parseInt(document.getElementById("amount-pin").value);

    const availableBlance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(amount, availableBlance);
    const totalNewAvailabaleBalance = availableBlance - amount;
    // console.log(totalNewAvailabaleBalance);

    if (accountNumber.length < 11) {
      alert("Please provaid valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("Please Provaid a Valid Pin Number");
      return;
    }

    // balance add

    document.getElementById("available-balance").innerText =
      totalNewAvailabaleBalance;
  });

// toggeling feture

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-paraents").style.display = "none";
    document.getElementById("add-money-parents").style.display = "block";
  });
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parents").style.display = "none";
    document.getElementById("cash-out-paraents").style.display = "block";
  });

//
