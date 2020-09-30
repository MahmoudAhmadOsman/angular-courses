$(document).ready(function () {
  $(".modal .modal-body .chatbot input[type=text]").focus(function () {
    $("form#y-form-chat").css("display", "flex").fadeIn(2000);
  });
});
