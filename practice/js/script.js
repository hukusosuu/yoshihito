$(function(){
    new WOW().init();
    $('.drawar-btn').click(function(e) {
        $(this).toggleClass("click");
        })
        $('.drawar-btn').click(function(e) {
            $('.drawar-menu').toggleClass("click");
            })
            jQuery('a[href^="#"]').on('click', function() {
                var header = jQuery('.header').innerHeight();
                var id = jQuery(this).attr('href');
                var position = 0;
                if ( id != '#') {
                  position = jQuery(id).offset().top - header;
                }
                jQuery('html,body').animate({
                  scrollTop: position
                },
                300);
              });
              let $form = $( '#js-form' )
              $form.submit(function(e) { 
                $.ajax({ 
                 url: $form.attr('action'), 
                 data: $form.serialize(), 
                 type: "POST", 
                 dataType: "xml", 
                 statusCode: { 
                    0: function() { 
                      //送信に成功したときの処理 
                      $form.slideUp()
                      $( '#js-success' ).slideDown()
                    }, 
                    200: function() { 
                      //送信に失敗したときの処理
                      $form.slideUp()
                      $( '#js-error' ).slideDown()
                    }
                  } 
                });
                return false; 
              });

              let $submit = $( '#js-submit' )
              $( '#js-form input, #js-form textarea' ).on( 'change', function() {
                if(
                  $( '#js-form input[type="text"]' ).val() !== "" &&
                  $( '#js-form input[type="email"]' ).val() !== "" &&
                  $( '#js-form input[name="entry.1578364847"]' ).prop( 'checked' ) === true
                ) {
                  $submit.prop( 'disabled', false )
                  $submit.addClass( '-active' )
                } else {
                  $submit.prop( 'disabled', true )
                  $submit.removeClass( '-active' )
                }
              })

});