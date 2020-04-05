$(function () {
    $('.portfolio-item').on('click', function () {
        var item_num = $(this).attr('data-portfolio-item');
        $('.portfolio-item-' + item_num).fadeIn();
    });
});