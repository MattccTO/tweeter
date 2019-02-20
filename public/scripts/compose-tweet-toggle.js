$(document).ready(() => {
  $('.composeButton').click(function () {
    $('.new-tweet').slideToggle(1000, function () {
      $('textarea').focus();
    });
  });
});
