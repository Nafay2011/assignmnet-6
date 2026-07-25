// Task 1

for (var i = 1; i <= 20; i++)
{
    document.write(i);
    document.write("<br>");
}


// Task 2

for (var i = 20; i >= 1; i--)
{
    document.write(i);
    document.write("<br>");
}


// Task 3

for (var i = 1; i <= 50; i++)
{
    if (i % 2 == 0)
    {
        document.write(i);
        document.write("<br>");
    }
}


// Task 4

for (var i = 1; i <= 50; i++)
{
    if (i % 2 != 0)
    {
        document.write(i);
        document.write("<br>");
    }
}


// Task 5

var i = 1;

while (i <= 15)
{
    document.write(i);
    document.write("<br>");
    i++;
}


// Task 6

var i = 15;

while (i >= 1)
{
    document.write(i);
    document.write("<br>");
    i--;
}


// Task 7

var number = prompt("Enter a number");

for (var i = 1; i <= 10; i++)
{
    document.write(number + " x " + i + " = " + number * i);
    document.write("<br>");
}


// Task 8

for (var i = 10; i >= 1; i--)
{
    document.write(i);
    document.write("<br>");
}

document.write("Blast Off");


// Task 9

var number = prompt("Enter a number");

for (var i = 1; i <= number; i++)
{
    document.write(i);
    document.write("<br>");
}


// Task 10

var start = prompt("Enter first number");
var end = prompt("Enter second number");

for (var i = start; i <= end; i++)
{
    document.write(i);
    document.write("<br>");
}