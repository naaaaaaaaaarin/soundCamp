/* $('nav.pc li').mouseenter(function () {
  $(this).children('.sub').stop().slideDown(300);
});
$('nav.pc li').mouseleave(function () {
  $(this).children('.sub').stop().slideUp(300);
});
$('nav.pc li').click(function () {
  $(this).children('.sub').stop().slideToggle(300);
}); */

// tab, mobile
$('header .ham').click(function(){
  $('nav.mobile').stop().slideToggle(300);
  if($('header .ham div').hasClass('menu'));
});
