// Write your JavaScript here

function calculateChange(){

    let amountDue = document.getElementById('amount-due').value;
    let amountReceived = document.getElementById('amount-received').value;
    
    let change = ((amountReceived - amountDue) * 100).toFixed(2);

        let hundreds = Math.floor(change/10000);
        document.getElementById('hundreds-output').innerHTML = "Hundreds: " + hundreds;
        let hunChange = change % 10000;
    
        let fifties = Math.floor(hunChange/5000);
        document.getElementById('fifties-output').innerHTML = "Fifties: " + fifties;
        let fiftyChange = hunChange % 5000;
        
        let twenties = Math.floor(fiftyChange/2000);
        document.getElementById('twenties-output').innerHTML = "Twenties: " + twenties;
        let twentyChange = fiftyChange % 2000;

        let tens = Math.floor(twentyChange/1000);
        document.getElementById('tens-output').innerHTML = "Tens: " + tens;
        let tenChange = twentyChange % 1000;

        let fives = Math.floor(tenChange/500);
        document.getElementById('fives-output').innerHTML = "Fives: " + fives;
        let fiveChange = tenChange % 500;

        let dollars = Math.floor(fiveChange/100);
        document.getElementById('dollars-output').innerHTML = "Dollars: " + dollars;
        let dollarChange = fiveChange % 100;
    
        let quarters = Math.floor(dollarChange/25);
        document.getElementById('quarters-output').innerHTML = "Quarters: " + quarters;
        let quarterChange = dollarChange % 25;

        let dimes = Math.floor(quarterChange/10);
        document.getElementById('dimes-output').innerHTML = "Dimes: " + dimes;
        let dimeChange = quarterChange % 10;
    
        let nickels = Math.floor(dimeChange/5);
        document.getElementById('nickels-output').innerHTML = "Nickels: " + nickels;
        let nickelChange = dimeChange % 5;

        let pennies = Math.floor(nickelChange/1);
        document.getElementById('pennies-output').innerHTML = "Pennies: " + pennies;

        
        document.getElementById('change-output').innerHTML = "Change: " + (change/100).toFixed(2);
}

        //Code to get tests to pass with correct dollar amounts BELOW

        /*let dollars = Math.floor(change/100);
        document.getElementById('dollars-output').innerHTML = dollars;
        let dollarChange = change % 100;
    
        let quarters = Math.floor(dollarChange/25);
        document.getElementById('quarters-output').innerHTML = quarters;
        let quarterChange = dollarChange % 25;
    
        let dimes = Math.floor(quarterChange/10);
        document.getElementById('dimes-output').innerHTML = dimes;
        let dimeChange = quarterChange % 10;
    
        let nickels = Math.floor(dimeChange/5);
        document.getElementById('nickels-output').innerHTML = nickels;
        let nickelChange = dimeChange % 5;

        let pennies = Math.floor(nickelChange/0.99);
        document.getElementById('pennies-output').innerHTML = pennies;


        document.getElementById('change-output').innerHTML = "Change: " + (change/100).toFixed(2);

}*/