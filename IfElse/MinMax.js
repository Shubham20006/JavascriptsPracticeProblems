

/* Q1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum 
    and the maximum value. */


let a=Math.floor(Math.random()*1000);
console.log(a);
b=Math.floor(Math.random()*1000);
console.log(b);
c=Math.floor(Math.random()*1000);
console.log(c);
d=Math.floor(Math.random()*1000);
console.log(d);
e=Math.floor(Math.random()*1000);
console.log(e);

if (a>b && a>c && a>d && a>e)
{
    console.log( "Greater random number is :- " +a);
}
else if (b>c && b>d && b>e)
{
    console.log( "Greater random number is :- " +b);
}
else if (c>d && c>e)
{
    console.log( "Greater random number is :- " +c);
}
else if (d>e)
{
    console.log( "Greater random number is :- " +d);
}
else
{
    console.log( "Greater random number is :- " +e);
}