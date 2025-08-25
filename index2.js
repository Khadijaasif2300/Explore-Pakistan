$(document).ready(function(){
  $("#go-btn").click(function(){
    $(".enter").slideUp(800).fadeOut(800, function(){
      window.open("provinces.html", "_blank");
    });
  });
});


