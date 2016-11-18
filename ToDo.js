$(document).ready(function() {
  $("#add_button").click(function(event) {
    event.preventDefault();
    $li = $('<li class="animated fadeInRightBig" id="new_li"></li>');
    $li.text($("#add_to").val());
    $li.click(function(event) {
      event.preventDefault();
      $(this).remove();
    });
    $(".do_list").append($li);
    $('#add_to').val('');
  });
  $('#sub1').click(function() {
    var $todo1 = $('.do_list :first-child').text();
    var $todo2 = $('.do_list :nth-child(2)').text();
    var $todo3 = $('.do_list :nth-child(3)').text();
    var $todo4 = $('.do_list :nth-child(4)').text();
    var $todo5 = $('.do_list :nth-child(5)').text();
    var $todo6 = $('.do_list :nth-child(6)').text();
    var $todo7 = $('.do_list :nth-child(7)').text();
    var $todo8 = $('.do_list :nth-child(8)').text();
    localStorage.setItem('todo1', $todo1);
    localStorage.setItem('todo2', $todo2);
    localStorage.setItem('todo3', $todo3);
    localStorage.setItem('todo4', $todo4);
    localStorage.setItem('todo5', $todo5);
    localStorage.setItem('todo6', $todo6);
    localStorage.setItem('todo7', $todo7);
    localStorage.setItem('todo8', $todo8);
  });

});
