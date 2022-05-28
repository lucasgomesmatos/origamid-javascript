import Countdown from './countdown.js';

const diasParaNatal = new Countdown('23 December 2022 23:59:59 GMT-03');

console.log(diasParaNatal);
console.log(diasParaNatal._timeStampDiff);
console.log(diasParaNatal._days);
console.log(diasParaNatal._hours);
console.log(diasParaNatal.total);