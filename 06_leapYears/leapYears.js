const leapYears = function(year) {
const isLeapYear = year % 4 === 0;
const isCentury = year % 100 === 0;
const isDivisibleByFourHundred = year % 400 === 0;
    
if (isLeapYear && (!isCentury || isDivisibleByFourHundred))
{return true}
else
{return false}
};

// Do not edit below this line
module.exports = leapYears;
