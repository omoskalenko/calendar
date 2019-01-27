/* eslint-disable no-useless-catch */
import Calendar from './calendar/calendar.js'
import CalendarView from './calendar/calendar.view.js'

const calendar = new Calendar();
// eslint-disable-next-line no-unused-vars
const view = new CalendarView(calendar, document.querySelector('#root'));

console.log(calendar.currentMonth);

