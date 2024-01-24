/// FAHRENHEIT FINDER

const measureFahrenheit = function () {
  AnyObject = {
    type: `temp`,
    value: Number(prompt(`Type Current Degrees Celsius`)),
  };
  const Fahrenheit = AnyObject.value * 1.8 + 32; // formula
  return console.log("The Fahrenheit is " + Fahrenheit);
};
measureFahrenheit();

/*
1. Create a Function with an object2;
2. Take the value from propmt (i.e a number);
3. use Number() to avoid creating a string;
4. create a variable called Fahrenheit to add the 2 values :-
[1] propmt value (xyz) + [2] 32 (i.e fixed for finding Fahrenheit from Degrees)];
5. Call the function (measureFahrenheit());
*/
