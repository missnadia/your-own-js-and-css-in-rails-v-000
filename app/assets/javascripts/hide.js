function hideWhenClicked(hide) {
  $("#hide_this").click(function() {
    $("#hide_this").remove();
  });
}

$("hide_this").click(hideWhenClicked)
