// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-btn");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// Menu slider

$("#key1").click(function () {
  var curr = $(".active");
  var nextImg = $(".slider1");
  var currKey = $(".active-key");
  var nextKey = $("#key1");

  if (nextImg.length != 0) {
    curr.removeClass("active");
    nextImg.addClass("active");
    currKey.removeClass("active-key");
    nextKey.addClass("active-key");
  }
});

$("#key2").click(function () {
  var curr = $(".active");
  var nextImg = $(".slider2");

  var currKey = $(".active-key");
  var nextKey = $("#key2");
  if (nextImg.length != 0) {
    curr.removeClass("active");
    nextImg.addClass("active");

    currKey.removeClass("active-key");
    nextKey.addClass("active-key");
  }
});
$("#key3").click(function () {
  var curr = $(".active");
  var nextImg = $(".slider3");

  var currKey = $(".active-key");
  var nextKey = $("#key3");

  if (nextImg.length != 0) {
    curr.removeClass("active");
    nextImg.addClass("active");
    currKey.removeClass("active-key");
    nextKey.addClass("active-key");
  }
});
$("#key4").click(function () {
  var curr = $(".active");
  var nextImg = $(".slider4");
  var currKey = $(".active-key");
  var nextKey = $("#key4");

  if (nextImg.length != 0) {
    curr.removeClass("active");
    nextImg.addClass("active");
    currKey.removeClass("active-key");
    nextKey.addClass("active-key");
  }
});
$("#key5").click(function () {
  var curr = $(".active");
  var nextImg = $(".slider5");
  var currKey = $(".active-key");
  var nextKey = $("#key5");

  if (nextImg.length != 0) {
    curr.removeClass("active");
    nextImg.addClass("active");
    currKey.removeClass("active-key");
    nextKey.addClass("active-key");
  }
});
