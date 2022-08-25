$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.shopping').find('div.group').removeClass('group_active').eq($(this).index()).addClass('group_active');
         
        });
    });