// const menu = document.querySelector('nav li');

$('nav li').mouseenter(function () {
  $(this).children('.sub').stop().slideDown(300);
});
$('nav li').mouseleave(function () {
  $(this).children('.sub').stop().slideUp(300);
});