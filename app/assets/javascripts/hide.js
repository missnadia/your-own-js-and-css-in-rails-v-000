function hideWhenClicked(hide) {
  $("#hide_this").click(function(hide) {
    $("#hide_this".target).hide();
  });
}

$("hide_this").click(hideWhenClicked)
