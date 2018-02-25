# time-format
javascript time&amp;date simple format

# install
npm install date-simple-format --save

# example
const format = require("date-simple-format");


let time1 = format();

console.log(`time1:${time1}`);


let time2 = format("Sun Feb 25 2018 10:57:39 GMT+0800 (CST)", "yyyy-MM-dd");

console.log(`time2:${time2}`);


let time3 = format(1519527578, "yyyy-MM-dd hh:mm:ss");

console.log(`time3:${time3}`);

--result

time1:10:55:08

time2:2018-02-25

time3:2018-02-25 10:59:38



