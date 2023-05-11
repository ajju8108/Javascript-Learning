const now = new Date()
const date1 = new Date('May 11 2023 14:47');
const date2 = new Date(2018, 4, 11, 9, 0)
console.log('now', now.toDateString(), 'date1', date1.toTimeString(), 'date2', date2.toISOString());