$(function () {
    $('.portfolio-item').on('click', function () {
        var item_num = $(this).attr('data-portfolio-item');
        alert(item_num);
    });
});