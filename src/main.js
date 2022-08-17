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

const inputs = document.querySelectorAll('.input');
console.log(inputs);
for (const input of inputs) {
    input.addEventListener('input',()=>{
        //console.log(countAvailableMoney());
        countAvailableMoney();
        calculationPercents();
    })
}
/*
const countAvailableMoney = () => {
    const incomeArray = [strToNum(incomeSalary),
        strToNum(incomeFreelance),
        strToNum(incomeExtra1),
        strToNum(incomeExtra2),
        strToNum(costsFlat),
        strToNum(costsTransport),
        strToNum(costsService),
        strToNum(costsLoans)];
    return incomeArray.reduce((previousValue,currentValue) =>{
        return previousValue + currentValue;
    })
};*/

const countAvailableMoney = ()=>{
    const totalPerMonth = strToNum(incomeSalary) +
        strToNum(incomeFreelance) +
        strToNum(incomeExtra1) +
        strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) +
        strToNum(costsTransport) +
        strToNum(costsService) +
        strToNum(costsLoans);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
};

const strToNum = (str) =>{
    return str.value ? parseInt(str.value) : 0;
};

moneyBoxRange.addEventListener('input', (ev)=>{
    const totalPercentElement = document.getElementById("total-percents");
    totalPercents = ev.target.value;
    totalPercentElement.innerHTML = totalPercents;
    calculationPercents();
});

const calculationPercents = ()=>{
    accumulation = ((totalMonth * totalPercents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
};


