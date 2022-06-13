// title hover effect
// $('#title li').on('click', function(){
//   $('#title').find(".hover").removeClass('hover');
//   $(this).addClass('hover');
// });



filterSelection("radio")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("contentsBox_js");
  // All button
  // if (c == "radio") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("title");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("hover");
    current[0].className = current[0].className.replace(" hover", "");
    this.className += " hover";
  });
}





function search() {
  let search = document.getElementById("keyword").value;
  let listInner = document.getElementsByClassName("contentsBox_js");
  let s = document.getElementById("selec");
  let selec = s.options[s.selectedIndex].text;

  for (let i = 0; i < listInner.length; i++) {
    let ad = listInner[i].getElementsByClassName("ad_js");
    let client = listInner[i].getElementsByClassName("client_js");
    listInner[i].classList.remove("show");
    
    if (selec === "제목"){
      if (ad[0].innerText.indexOf(search) != -1) {
        // listInner[i].style.display = "block";
        listInner[i].classList.add("show");
      } else {
        // listInner[i].style.display = "none"
        listInner[i].classList.add("hide");
      }
    } else if (selec === "제작처") {
      if (client[0].innerText.indexOf(search) != -1) {
        // listInner[i].style.display = "block";
        listInner[i].classList.add("show");
      } else {
        // listInner[i].style.display = "none"
        listInner[i].classList.add("hide");
      }
    }
  }
}


// audio modal
$('.box').click(function(){
  $(this).siblings('.audioOverlay').removeClass('hide');
  $('body').css({"overflow":"hidden"});
});

// audio modal exit
$('.exit').click(function(){
  $('.audioOverlay').addClass('hide');
  $('body').css({"overflow":"auto"});
});