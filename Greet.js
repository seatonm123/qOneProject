
var currentdate = new Date();
var datetime = currentdate.getMonth()+1 + "/"
                + (currentdate.getDate())  + "/"
                + currentdate.getFullYear() + " at "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();

$(document).ready(function(){
  $('#clock_time').append(datetime);
  $('.sub1').click(function () {
  var $name = $('#name').val();
  var $ing1 = $('#ingredients1').val();
  var $ing2 = $('#ingredients2').val();
  var $ing3 = $('#ingredients3').val();
  localStorage.setItem('nameInput', $name);
  localStorage.setItem('ingredients1', $ing1);
  localStorage.setItem('ingredients2', $ing2);
  localStorage.setItem('ingredients3', $ing3);
});
});
