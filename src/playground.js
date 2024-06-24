// سه زمان به صورت رشته
let time1 = '2024-06-22T15:00:00'
let time2 = '2024-06-22T12:30:00'
let time3 = '2024-06-22T10:00:00'

// تبدیل رشته‌های زمانی به شیء Date
let date1 = new Date(time1)
let date2 = new Date(time2)
let date3 = new Date(time3)

let differenceInMillis1 = date1 - date2
let differenceInMillis2 = date2 - date3

let totalDifferenceInMillis = differenceInMillis1 + differenceInMillis2

console.log(totalDifferenceInMillis)

// let differenceInSeconds = Math.floor(totalDifferenceInMillis / 1000);
// let hours = Math.floor(differenceInSeconds / 3600);
// let minutes = Math.floor((differenceInSeconds % 3600) / 60);
// let seconds = differenceInSeconds % 60;

// console.log(`Total Difference: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`);
