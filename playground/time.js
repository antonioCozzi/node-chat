var moment = require('moment')

// var date = moment();
// date.add(100, 'year').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))

var createdAt = 1234;
var clock = moment(createdAt);
console.log(clock.format("hh:mm A"))