'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) ||money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start ();


 



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],     
    savings: true

};

function chooseExpense () {
    for (let i = 0; i < 2; i++) {   
         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
             b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a]=b;
        }
        else {
               console.log("bad rasult");
               i --;
        } 
    }
}


 chooseExpense ();

//============================================================================

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay );

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
 

function chekSavings() {
    if (appData.savings==true) {
        let save = +prompt("Какова сума накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
}

chekSavings ();


//=============================================
let dayBudget = (appData.budget/30);

function detectDayBudget () {
    alert ("Ваш дневной бюджет: " + dayBudget);
}

detectDayBudget ();


//=============================================
function detectLevel () {
    
    appData.moneyPerDay = (appData.budget / 30).toFixed();
   
    if(appData.moneyPerDay < 100) {
             console.log("Минимальный уровень достатка");
         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
             console.log("Средний уровень достатка");
         } else if (appData.moneyPerDay > 2000) {
             console.log("Высокий уровень достатка");
         } else {
             console.log("Произошла ошибка");
         }
}

detectLevel ();

//=============================================

function optionalExpenses () {
    let i = 0;
    
    while ( i < 3 ) {
        let a = prompt ("Статья необязательных расходов?", '');
                 if ( (typeof(a)) === "string" && (typeof(a)) != null   && a != '' ) { 
            
            console.log ("done");
            
            appData.optionalExpenses[i]=a;
            console.log(appData.optionalExpenses);
                    
        }
    else {
        console.log ("ошибка, чтото ввели не так");
        i --;
    }
    i++;
    }
}
 optionalExpenses ();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}

//chooseOptExpenses();

//console.log(appData);

