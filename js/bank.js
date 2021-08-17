//deposit button and deposit money
const deposit = document.getElementById("addMoneyBtn");
console.log(deposit);
deposit.addEventListener("click", function () {
    //get the ammount want to Deposit
    const deposit = document.getElementById("addMoney");
    const depositvalue = deposit.value;
    console.log(depositvalue);
    const dispalyDeposit = document.getElementById("depositField");

    dispalyDeposit.innerText = depositvalue;
    deposit.value = "";


})