$(function(){
    // Burger menu
    $('.burger-trigger, .nav-item').click(function(){
        $('.navbar-toggler').toggleClass('open');
        // $('.navbar-collapse').toggleClass('opened');
        $('.navbar-collapse').slideToggle(400, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
        
    });
    $(document).click(function(event){
        if ($(event.target).closest('.burger-trigger').length) return;
        if( $('.navbar-collapse').css('display') === "block"){
                $('.navbar-collapse').removeAttr('style');
                $('.navbar-toggler').removeClass('open');
            }
        event.stopPropagation();
    });
    
    // Video
    $('.play-trigger').click(function(){
        $('.button-play').addClass('hide');
        $('.video-container').addClass('show');
        $('iframe')[0].setAttribute('src', 'https://www.youtube.com/embed/MBbaJpywBzg?rel=0&autoplay=1');
    });
    $('#closer-trigger').click(function(){
        $('.button-play').removeClass('hide');
        $('.video-container').removeClass('show');
        $('iframe')[0].setAttribute('src', 'https://www.youtube.com/embed/MBbaJpywBzg?rel=0');
    });

    //Scroll
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 100 }, t);
    });

    //Counters
    var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 1500
			});
			show = false;
		}
    });
    
    //Lightbox
    $('#partner').click(function(){
        $('.lightbox-section').addClass('show-lightbox');
        var w_top = $(window).scrollTop();              // Количество пикселей на которое была прокручена страница
		var w_height = $(window).height();              // Высота окна браузера
        var e_height = $('.lightbox').outerHeight();    // Полная высота лайтбокса
        var toplb = w_top + w_height/2 - e_height/2;
        $('.lightbox').css('top', toplb);
    });
    $('#close-lightbox, .layer').click(function(){
        $('.lightbox-section').removeClass('show-lightbox');
    });
})