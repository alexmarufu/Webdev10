$(document).ready(function(){
  $(document).ajaxStart(function() {
    $("#load").css("display",
    "block");
  });

  $(document).ajaxComplete(function() {
    $("#load").css("display", "none");
  });

  ////
  $(document).ajaxStart(function() {
    $("#load").css("display",
    "block");
  });

  $(document).ajaxComplete(function() {
    $("#load").css("display", "none");
  });
  ///
  $(document).ajaxStart(function() {
    $("#load").css("display",
    "block");
  });

  $(document).ajaxComplete(function() {
    $("#load").css("display", "none");
  });//
  $(document).ajaxStart(function() {
    $("#load").css("display",
    "block");
  });

  $(document).ajaxComplete(function() {
    $("#load").css("display", "none");
  });
  //



  $("#home").click(function() {
    $("#main-container").load("files/home.html"),
    $("ul").css("left", "-100%")
  });

  $("#about").click(function() {
    $("#main-container").load("files/about.html")
    $("ul").css("left", "-100%")
  });

  $("#contact").click(function() {
    $("#main-container").load("files/contacts.html")
    $("ul").css("left", "-100%")
  });

  $("#more").click(function() {
    $("#main-container").load("files/more.html"),
    $("ul").css("left", "-100%")
  });

//////
$(".home").click(function() {
    $("#main-container").load("files/home.html"),
    $("ul").css("left", "-100%")
  });

  $(".about").click(function() {
    $("#main-container").load("files/about.html")
    $("ul").css("left", "-100%")
  });


 $(".contact").click(function() {
    $("#main-container").load("files/contacts.html")
    $("ul").css("left", "-100%")
  });

 $(".more").click(function() {
    $("#main-container").load("files/more.html"),
    $("ul").css("left", "-100%")
  });
/////

  $(".checkbtn").click(function() {
    $("ul").css("left", "0");
   });
   
  $(".btn1").click(function() {
    $("#cv").load("files/cv.txt");
   });

  $(".btn2").click(function() {
    $("#letter").load("files/letter.txt");
   });
////////
});