$(document).ready(function () {
  $('#name').keypress(function (e) {
    if (e.which == 13) {
      $('#pw').focus();
    }
  });

  $('#pw').keypress(function (e) {
    if (e.which == 13) {
      check();
    }
  });
});

(function ($) {
  check = function () {
    if ($('#name').val() == '' || $('#pw').val() == '') {
      alert('name 또는 password를 입력하세요');
      $('#name').focus();
      return false;
    } else {
      alert('로그인 성공');
    }
  };
})(jQuery);
