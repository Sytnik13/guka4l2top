$("#toggle-menu").click(function () {
    $("#toggle-menu").toggleClass("btn-active");
    $(".nav-it").toggleClass("nav-it-show");
});
$("#toggle-filter").click(function () {
    $(".filter-server").toggleClass("filter-server-hide");
});
$(function () {
   $('#datetimepicker1').datetimepicker(
     {pickTime: false, language: 'ru'}
   );
 });
 $(function () {
    $('#datetimepicker2').datetimepicker(
      {pickTime: false, language: 'ru'}
    );
  });
