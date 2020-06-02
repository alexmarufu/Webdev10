$(function () {

  
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $("#navbarNav").click(function (event) {
    $(event.target).focus();
  });
});

//email sent

$(document).ready(function(){
  $(document).ajaxStart(function(){
    $("#load").css("display",
    "block");
  });
  $(document).ajaxComplete(function(){
    $("#wait").css("display", "none");
  });
  $("#about").click(function(){
    $("#main-container").load("files/about.html")
  });

  $("#contact").click(function(){
    $("#main-container").load("files/contacts.html")
  });

  $("#more").click(function(){
    $("#main-container").load("files/more.html")
  });

});

function loadCv() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("cv").innerHTML = this.responseText
    }
  };
  xhttp.open("GET", "cv.txt", true);
  xhttp.send();
}

function loadLetter() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("cv").innerHTML = this.responseText
    }
  };
  xhttp.open("GET", "letter.txt", true);
  xhttp.send();
}