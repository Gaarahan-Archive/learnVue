import $ from 'jquery'

$(function (){
  $('ul li:nth-child(even)').css('background-color', 'green');
  $('ul li:nth-child(odd)').css('background-color','lightgreen');
});