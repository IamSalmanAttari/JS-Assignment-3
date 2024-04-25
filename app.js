var eidUlAdha = new Date("17 jun 2024")
var eidDate = new Date("17 jun 2024").getTime();
var todaysDate = new Date().getTime();
var timeLeft = eidDate - todaysDate;
var eidMonth = new Date("17 jun 2024").getMonth();
var todaysMonth = new Date().getMonth();
var monthsLeft = eidMonth - todaysMonth;
var formula = timeLeft  / (1000 * 60 * 60 * 24)
var formula1 = timeLeft  / (1000 * 60 * 60)
var formula2 = timeLeft  / (1000 * 60 )
var formula3 = timeLeft  / (1000)

document.write(`<b> Eid ul Adha is on : ${eidUlAdha.toDateString()} <br> <br>  Months left : ${monthsLeft} <br> <br> Days left : ${formula.toFixed()} <br><br>  hours left : ${formula1.toFixed()} <br> <br> Mins left : ${formula2.toFixed()} <br><br>  Sec left : ${formula3.toFixed()} `);


