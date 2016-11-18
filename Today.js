var $name=localStorage.getItem('nameInput');
var $ing1=localStorage.getItem('ingredients1');
var $ing2=localStorage.getItem('ingredients2');
var $ing3=localStorage.getItem('ingredients3');
var $todo1=localStorage.getItem('todo1');
var $todo2=localStorage.getItem('todo2');
var $todo3=localStorage.getItem('todo3');
var $todo4=localStorage.getItem('todo4');
var $todo5=localStorage.getItem('todo5');
var $todo6=localStorage.getItem('todo6');
var $todo7=localStorage.getItem('todo7');
var $todo8=localStorage.getItem('todo8');

$(document).ready(function() {


  $('.big_name').text("Hello, " + $name);
  var $li1 = $('<li>');
  $li1.text($todo1);
  $('.do_it').append($li1);
  var $li2 = $('<li>');
  $li2.text($todo2);
  $('.do_it').append($li2);
  var $li3 = $('<li>');
  $li3.text($todo3);
  $('.do_it').append($li3);
  var $li4 = $('<li>');
  $li4.text($todo4);
  $('.do_it').append($li4);
  var $li5 = $('<li>');
  $li5.text($todo5);
  $('.do_it').append($li5);
  var $li6 = $('<li>');
  $li6.text($todo6);
  $('.do_it').append($li6);
  var $li7 = $('<li>');
  $li7.text($todo7);
  $('.do_it').append($li7);
  var $li8 = $('<li>');
  $li8.text($todo8);
  $('.do_it').append($li8);

  $('li').click(function () {
    (this).remove();
  });

});

var $nasa = function() {
  "use strict";

  var nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=DyRRQ7qoWdG6ou6XBLTVPCqYI7v82oPVP3e9t4fN';

  $.getJSON(nasaURL, function (data) {
      var $img = $('<img>');
      $img.attr('src', data.url);
      $('main #nasa').append($img);
    });
  };

var $flick = function() {

  var url="http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=inspiring&format=json&jsoncallback=?";

    $.getJSON(url, function (data) {
      var randomNum = Math.floor(Math.random() * 20);
      var randomGuy = data.items[randomNum];
      var $img = $('<img>');

      $img.attr("src", randomGuy.media.m);

      $('main #flick').prepend($img);
    });
};

var $chuck =  function() {
  var quoteURL = 'https://galvanize-cors-proxy.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json';
  $.getJSON(quoteURL, function(data) {
    console.log(data);
    var $p = $('<p class="quote"></p>');

    $p.text(data.quote);
    $('.quote_hold').append($p);
  });

};

var $recipe = function () {

var ing1 = $ing1;
var ing2 = $ing2;
var ing3 = $ing3;

  var recipeURL = 'https://galvanize-cors-proxy.herokuapp.com/http://www.recipepuppy.com/api/?i='+ing1+','+ing2+','+ing3+'&p=3';

  $.getJSON(recipeURL, function(data) {
    var $h4 = $('<h4 class="rec_head">');
    var $a = $('<a class="rec_description">Get Recipe!</a>');
    var randomNum = Math.floor(Math.random() * data.results.length);
    var randomGuy = data.results[randomNum];
    $h4.text(randomGuy.title);
    $a.attr('href', randomGuy.href);
    $('.recipe_header').append($h4);
    $('.recipe_header').append($a);

  });
};
$(document).ready($nasa);
$(document).ready($flick);
$(document).ready($chuck);
$(document).ready($recipe);
