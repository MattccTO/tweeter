//  Toggle compose tweet box visibility
$(document).ready(() => {
  $('.composeButton').click(function () {
    $('.new-tweet').slideToggle(400, function () {
      $('textarea').focus();
    });
  });
});
