$(document).ready(function() {


  $("#showfits").click(function() {
    $("#fixts").show();
    $("#tonament").hide();
  });

  $("#showtonas").click(function() {
    $("#tonament").show();
    $("#fixts").hide();
  });

    $("#showform").click(function() {
      $("#regiform").show();
    });

    $("#showevents").click(function() {
      $("#events").show();
    });
});
