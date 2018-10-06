function hideWhenClicked(hide) {
  $("#hide_this").click(function(hide) {
    $("#hide_this").hide();
  });
}

$("hide_this").click(hideWhenClicked)
