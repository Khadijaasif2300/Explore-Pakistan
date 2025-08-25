$(document).ready(function(){
  $(".fa-bars").click(function(){
    $(".header ul").addClass("active");
    $(this).hide();
    $(".fa-xmark").show();
  });

  $(".fa-xmark").click(function(){
    $(".header ul").removeClass("active");
    $(this).hide();
    $(".fa-bars").show();
  });

  

  $("#home").click(function(){
    window.open("index2.html", "_blank");
  });

  $("#provinces").click(function(){
    window.open("provinces.html", "_blank");
  });

  $("button").click(function(){
    window.open("index.html", "_blank");
  });
});
