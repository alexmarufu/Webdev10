$(function () {

  
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});



//prints home page
(function (global) {

var business = {}
var homeHtml = "files/home.html";
//loading
var insertHtml = function (selecter, html) {
    var targetElem = document.querySelector(selecter);
    targetElem.innerHTML = html;
};

//
var showLoading = function (selecter) { 
    var html = "<div class =text-center>";
    html +="<img src= 'images/ajax-loader.gif></div>";
    insertHtml(selecter, html);
};


//page load
document.addEventListener(DOMContentLoaded, function (event){
//onload
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
    .innerHTML = responseText;
  },
  false);
});

global.$business = business;

})(window);


function loadItems() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "files/items.html", true)
  xhttp.send();
}

//items sold
function itemSold() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "files/item-sold.html", true)
  xhttp.send();
}

