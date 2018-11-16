var moment = require("../../../../node_modules/moment");

var wrapped = moment(new Date());
console.log(wrapped);

var date = wrapped.toDate();
console.log(date);
