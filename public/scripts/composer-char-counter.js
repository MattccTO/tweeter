// Change character counter based on input tweet string
$(document).ready(() => {
  $('textarea').on('input', function () {
    const charCount = this.value.length;
    const $count = $(this).parent().find('.counter');
    $count.text(function () {
      return 140 - charCount;
    });
    if (charCount > 140) {
      $count.addClass('negative');
    } else {
      $count.removeClass('negative');
    }
  });
});
