$(function(){
  $("table").addClass("table table-striped");
  $("table").attr("border", 1);
  $("body").css("width", "75%");
  $("body").css("margin", "0 auto");
  $("center > table > tbody > tr > td > center > b").html("<h2>" + $("center > table > tbody > tr > td > center > b").html() + "</h2>");
  $("center > input").addClass("btn btn-default");
  $("table").removeAttr("border");
  $("table").css("border", "none");
  $(":text").addClass("form-control");
  $(":text").css("width", "25%");
  $("body").wrapInner("<div class='panel panel-default'></div>");
  $("body > center").find("center").wrapAll("<div class='panel-heading'></div>")
  $("form > table").wrap("<div class='panel-body'></div>");
  $("form > center").wrap("<div class='panel-footer'></div>");
  $("form > hr").remove();
  $(".panel-footer > center > hr").remove();
  $(".panel-footer").append("<br>");
  $(".panel-footer").prepend("<br>");
});
