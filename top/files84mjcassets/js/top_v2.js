$(function() {
	
	$('.header_top').css('height',$(window).height());
	$('html,body').animate({ scrollTop: 0 });

	$('.catchcopy').on('inview', function(event, isInView) {
		if (isInView) {
			$('.catchcopy > *').each(function(i){
				$(this).delay(i * 400).queue(function(){
					$(this).addClass('disp');
				});
			});		
		}
	});
	
	setTimeout(function(){
		$('.top_kv .logo').addClass('disp');
	},1000);
	setTimeout(function(){
		$('body.home').addClass('on');
	},2500);
	setTimeout(function(){
		$('.scrolldown').fadeIn(1000);
	},3000);
	
	var headerH = $(".maeginHeader").outerHeight(true);
	var pos01 = 0;
	var pos02 = Math.round($("#cont_area02").offset().top-headerH);
	var pos03 = Math.round($("#cont_area03").offset().top-headerH);
	var pos04 = Math.round($("#cont_area04").offset().top-headerH);
	var pos05 = Math.round($("#cont_area05").offset().top-headerH);
	$(window).on('scroll',function(){
		var posScroll = $(window).scrollTop();
		if(pos01 <= posScroll && posScroll < pos02) {
			$("#list01").addClass('current').siblings('li').removeClass('current');
		} else if(pos02 <= posScroll && posScroll < pos03) {
			$("#list02").addClass('current').siblings('li').removeClass('current');
		} else if(pos03 <= posScroll && posScroll < pos04) {
			$("#list03").addClass('current').siblings('li').removeClass('current');
		} else if(pos04 <= posScroll && posScroll < pos05) {
			$("#list04").addClass('current').siblings('li').removeClass('current');
		} else if(pos05 <= posScroll && posScroll) {
			$("#list05").addClass('current').siblings('li').removeClass('current');
		}
	});
/*	
	function slider(){
		var current = $('.bg_slide .item.current'),
		//next = current.is(':last-child') ? $('.bg_slide .item').first() : current.next();
		next = current.next();
		next.addClass('current');
		current.removeClass('current');
		if($('.item.current.last').hasClass('current')){
			setTimeout(function(){
				$('body.home').addClass('bg_end');
			},5000);
		}
	}
	var setSlider = setInterval(slider, 5000);
*/

	
});


