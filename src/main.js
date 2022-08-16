//income inputs
const incomeSalary = document.getElementById("income-salary");
const incomeFreelance = document.getElementById("income-freelance");
const incomeExtra1 = document.getElementById("income-extra-1");
const incomeExtra2 = document.getElementById("income-extra-2");

//costs inputs
const costsFlat = document.getElementById("costs-flat");
const costsService = document.getElementById("costs-services");
const costsTransport = document.getElementById("costs-transport");
const costsLoans = document.getElementById("costs-loans");

//total inputs
const totalMonthInput = document.getElementById("total-month");
const totalDayInput = document.getElementById("total-day");
const totalYearInput = document.getElementById("total-year");

let totalMonth, totalDay, totalYear;

const moneyBoxRange = document.getElementById("money-box-range");
const accumulationInput = document.getElementById("accumulation");
const spend = document.getElementById("spend");

let accumulation = 0;
let totalPercents = 0;
