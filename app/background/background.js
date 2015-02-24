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
  $(":text").next().html("<div class='input-group-addon'>" + $(":text").next().html()+"</div>");
});
