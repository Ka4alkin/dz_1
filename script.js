'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) ||money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
//start ();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],     
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {   
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
       
           if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
           a != '' && b != '' && a.length < 50 ) {
               console.log("done");
               appData.expenses[a]=b;
           }
           else {
                  console.log("bad rasult");
                  i --;
           } 
       }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ваш дневной бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
    
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
    },
    chekSavings: function() {
        if (appData.savings==true) {
            let save = +prompt("Какова сума накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        let items;
        while( typeof(items) != 'string' || items == "" || items == null ) {
             items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        } 
       
         appData.income = items.split(', ');
         appData.income.push(prompt('Может что-то ещо?'));
         appData.income.sort();

         appData.income.forEach(function(i,item){
             console.log(item,i);
         });
    }
};

// let x = 5; 
// alert(x++);
 
alert( "123"[2] );
 

// function ggg(){

//     let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

//     if (typeof(items) != "string" || items == "" || typeof(items) == null) {
//         console.log("Вы ввели некорректные данные или не ввели их вовсе");
//     } else {
//         appData.income = items.split(", ");
//         appData.income.push(prompt("Может что-то еще?"));
//         appData.income.sort();
//     }

//     appData.income.forEach (function (itemmassive, i) {
//         alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
//     });}

//  var a;
    
// do  {
//     a  = prompt('Веедите чет','');

// } while  ( isNaN(a) ||sfsdf a == '' || a == null);


//  console.log(a);

// let a;

// a = prompt('Веедите чет','');

// if ( isNaN(a) )
// {
//     alert("нужно ввести число");
//     a = prompt('Веедите чет','');sd
// } 

// console.log(a);
 
    //  let money = +prompt("Ваш бюджет наs месяц?", '');
    // let time = prompt("Введите дату в формате YYYY-MM-DD", '');

    // while(isNaN(money) ||money == "" || money == null ) {
    //     money = +prompt("Ваш бюджет на месяц?", '');
    // }

//============================================================================

// appData.moneyPerDay = (appData.budget / 30).toFixed();

// alert("Ежедневный бюджет: " + appData.moneyPerDay );

// if(appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний уровень достатка");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Высокий уровень достатка");
// } else {
//     console.log("Произошла ошибка");
// }
 

 

//=============================================
 
//=============================================
 
//=============================================

 
 