/* Q2. Write a program that takes day and month from the command line and prints true if
    day of month is between March 20 and June 20, false otherwise.*/

    const prompt = require('prompt-sync')();

    let date = prompt("Enter day Of the Month : ");
    let month = prompt("Enter month Of the Year : ");
    date = parseInt(date);
    month = parseInt(month);

if (date <= 20 && month <= 6 && month > 3 )
{
    console.log("True");
}

else if (date < 31 && date >= 20 && month >= 3 && month < 6 )
{ 
    console.log("True");
}

else if (date == 31 && month == 3 || month == 5 )
{
    console.log("True");
}

else
{
    console.log("False");
}