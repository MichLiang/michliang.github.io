function enableDarkMode() {
  $('.inner-switch').on('click', function () {
    if ($('body').hasClass('dark')) {
      $('body').removeClass('dark');
      $('.inner-switch').text('OFF');
      $('#sidebar-title-dark').hide();
      $('#sidebar-title-light').show();
    } else {
      $('body').addClass('dark');
      $('.inner-switch').text('ON');
      $('#sidebar-title-light').hide();
      $('#sidebar-title-dark').show();
    }
  });
}

$(document).ready(enableDarkMode);
