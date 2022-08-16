$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.shop').find('div.group').removeClass('group_active').eq($(this).index()).addClass('group_active');
         
        });

      $('.minibtn').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-container').toggleClass('grid-container_active');
            $('.grid-tovar_jibiar').eq(i).toggleClass('grid-tovar_jibiar_active');
            
        })
      });
      $('.minibtnn').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerr').toggleClass('grid-containerr_active');
            $('.grid-tovar_jibiarr').eq(i).toggleClass('grid-tovar_jibiarr_active');
            $('.undoo').toggleClass('undoo_active');
        })
      });
      $('.minibtnnn').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerrr').toggleClass('grid-containerrr_active');
            $('.grid-tovar_jibiarrr').eq(i).toggleClass('grid-tovar_jibiarrr_active');
            $('.undooo').toggleClass('undooo_active');
        })
      });
      $('.undo').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-container').toggleClass('grid-container_active');
            $('.grid-tovar_jibiar').eq(i).toggleClass('grid-tovar_jibiar_active');
            $('.undo').toggleClass('undo_active');
        })
      });
      $('.undoo').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerr').toggleClass('grid-containerr_active');
            $('.grid-tovar_jibiarr').eq(i).toggleClass('grid-tovar_jibiarr_active');
            $('.undoo').toggleClass('undoo_active');
        })
      });
      $('.undooo').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerrr').toggleClass('grid-containerrr_active');
            $('.grid-tovar_jibiarrr').eq(i).toggleClass('grid-tovarrr_jibiar_active');
            $('.undooo').toggleClass('undooo_active');
        })
      });
      
      
    
$('.infobtn, .infobtnn, .infobtnnn').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.grid-element__jibiar_item').eq(i).toggleClass('grid-element__jibiar_item_active');
        $('.grid-element__jibiar_info').eq(i).toggleClass('grid-element__jibiar_info_active');
    })
});
$('.backbtn, .backbtnn, .backbtnnn').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.grid-element__jibiar_item').eq(i).toggleClass('grid-element__jibiar_item_active');
        $('.grid-element__jibiar_info').eq(i).toggleClass('grid-element__jibiar_info_active');
    })
  });

 
});