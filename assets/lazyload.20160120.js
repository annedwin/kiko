
const dateHtml = document.querySelector('.date');
const date = new Date();

const yearHtml = document.querySelectorAll('.year');
yearHtml.forEach(item => {
  item.textContent = date.getFullYear();
})
let todayDay = document.querySelector('.todayDayCurrent');
const transactionsHtml = document.querySelectorAll('.transaction__date');
transactionsHtml.forEach(item => {
  let x = item.getAttribute('data-num');
  let today = new Date();
  today.setDate(date.getDate() - x);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  item.textContent = `${months[today.getMonth()]} ${today.getDate()}`;
});

let dayNames = new Array("Domingo", "Lunes", "Martes", "Miércoles",
    "Jueves", "Viernes", "Sábado");
let monthNames = new Array(
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
let dayOfTheWeek = date.getDay();
date.setTime(date.getTime() - 0 * 24 * 60 * 60 * 1000);
const timestamp = document.querySelectorAll('.timestamp');
timestamp.forEach(item => {
  item.textContent = dayNames[(date.getDay())] + ", " + date.getDate() + " " + monthNames[(date
      .getMonth())] + ", " + date.getFullYear();
});
todayDay.innerHTML = dayNames[(date.getDay())] + ", " + date.getDate() + " " + monthNames[(date
    .getMonth())] + ", " + date.getFullYear();

