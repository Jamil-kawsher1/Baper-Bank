//deposit button and deposit money
const deposit = document.getElementById("addMoneyBtn");
console.log(deposit);
deposit.addEventListener("click", function () {
    //get the ammount want to Deposit
    const deposit = document.getElementById("addMoney");
    const depositvalue = deposit.value;
    const userInputDeposit = parseFloat(depositvalue);
    // const dipsositedAmmount = parseFloat(depositvalue);
    // console.log(depositvalue);
    //geting user inputed value and sum it with prevoius ammount
    const dispalyDeposit = document.getElementById("depositField");
    const prevousDeposited = dispalyDeposit.innerText;
    const previousammount = parseFloat(prevousDeposited);
    const finalDepostit = userInputDeposit + previousammount;


    dispalyDeposit.innerText = finalDepostit;
    deposit.value = "";

    //balance part
    const prevoiusbalance = document.getElementById("balaceDashboard");
    const prevoiusbalanceFloat = parseFloat(prevoiusbalance.innerText);
    const totalBalance = prevoiusbalanceFloat + userInputDeposit;
    prevoiusbalance.innerText = totalBalance;
})




// widthdrawal part

//adding widrawalButton Listener
const Widthdrwalbtn = document.getElementById("moneyOutBtn");
Widthdrwalbtn.addEventListener("click", function () {

    //getiing Previous ammount
    const gettingValueWidthdrawal = document.getElementById("widthdrawField");
    const prevoiusWidthdrwal = parseFloat(gettingValueWidthdrawal.innerText);
    //user inputed widthdrawal Ammount
    const inputFromWidthdrawal = document.getElementById("moneyOut");
    const userInputedWidthdrawal = parseFloat(inputFromWidthdrawal.value);
    inputFromWidthdrawal.value = "";
    gettingValueWidthdrawal.innerText = prevoiusWidthdrwal + userInputedWidthdrawal;
    //balance update
    const Gotedbalance = document.getElementById("balaceDashboard");
    const dshboardBalace = parseFloat(Gotedbalance.innerText);
    const finalBalance = dshboardBalace - userInputedWidthdrawal;
    Gotedbalance.innerText = finalBalance;




})




