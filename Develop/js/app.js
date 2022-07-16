var saveBtn = document.querySelector('.btn')
var container = document.querySelector('.container')
const textarea = document.querySelector('textarea')
//Date and time
function date() {
    $('#currentDay').text(moment().format('MMMM Do YYYY h:mm:ss a'))
}
setInterval(date, 1000)
date()
// event listener for buttons to save
$('.container').on('click', '.btn', save)
//save function to local storage
function save(event) {
    var clicked = event.target
    var parent = $(clicked).parent()
    var textArea = parent.find('textarea').val()
    let time = $(this).siblings('textarea').attr(`id`);
    localStorage.setItem(time, JSON.stringify(textArea))
}
//get item from local storage
var hour1 = JSON.parse(localStorage.getItem('9'))
var hour2 = JSON.parse(localStorage.getItem('10'))
var hour3 = JSON.parse(localStorage.getItem('11'))
var hour4 = JSON.parse(localStorage.getItem('12'))
var hour5 = JSON.parse(localStorage.getItem('13'))
var hour6 = JSON.parse(localStorage.getItem('14'))
var hour7 = JSON.parse(localStorage.getItem('15'))
var hour8 = JSON.parse(localStorage.getItem('16'))
var hour9 = JSON.parse(localStorage.getItem('17'))
//adding the local storage to the page
$('#9').text(hour1)
$('#10').text(hour2)
$('#11').text(hour3)
$('#12').text(hour4)
$('#13').text(hour5)
$('#14').text(hour6)
$('#15').text(hour7)
$('#16').text(hour8)
$('#17').text(hour9)
//time checker for css styling
var currentTime = moment().hour()
console.log(currentTime);
for ( i = 9; i < 18; i++) {
    if (i < currentTime) {
        $(`#${i}`).addClass('past')
    } else if ((i + 9) == currentTime) {
        $(`#${i}`).addClass('present')
    } else  {
        $(`#${i}`).addClass('future')
    }
} 
