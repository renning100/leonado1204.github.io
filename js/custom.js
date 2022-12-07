jQuery(document).ready(function($){
	
	"use strict";	
	
		$('.qtyplus').click(function(e){
			e.preventDefault();
			var currentVal = parseInt($('input[name="quantity"]').val());
			if (!isNaN(currentVal)) {
				$('input[name="quantity"]').val(currentVal + 1);
			} else {
				$('input[name="quantity"]').val(0);
			}
		});
	
		$(".qtyminus").click(function(e) {
	
			e.preventDefault();
			var currentVal = parseInt($('input[name="quantity"]').val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$('input[name="quantity"]').val(currentVal - 1);
			} else {
				$('input[name="quantity"]').val(0);
			}
		});
	
	
	$("html").niceScroll({zindex:99999,cursorborder:"1px solid #424242"});
	//STICKY MENU...
	$("#menu-container").sticky({ topSpacing: 0 });
	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		var $menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(event){
		event.preventDefault();
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(400);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(400);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});
  
	/*Menu */
	function megaMenu() {
		var screenWidth = $(document).width(),
		containerWidth = $("#header .container").width(),
		containerMinuScreen = (screenWidth - containerWidth)/2;
		
		if( containerWidth == screenWidth ){
							
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();				
				
				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth ){
					var SwMinuOffset = screenWidth - ParentLeftPosition;
					var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
					marginFromLeftActual = (marginFromLeft) + 25;
					marginLeftFromScreen = "-"+marginFromLeftActual+"px";
					$(this).css('left',marginLeftFromScreen);
			  }
			});		
				
		} else {
		
		
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();
				
				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
				
					var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
					var marginLeftFromContainer = containerMinuScreen + marginFromLeft + 20;
					
					if( MegaMenuChildContainerWidth > containerWidth ){
						
						var MegaMinuContainer	= ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10; 			
						var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
						marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
						$(this).css('left',marginLeftFromContainerVal);
						
					} else {
						
						marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
						$(this).css('left',marginLeftFromContainer);
					
					}
				
				}
			});
		
		}
	}
	
	
	megaMenu();
	$(window).smartresize(function(){
		megaMenu();
	});

	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;

	//Menu Hover Start
	function menuHover() {
		$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(
			function(){
				if( $(this).find(".megamenu-child-container").length  ){
					$(this).find(".megamenu-child-container").stop().fadeIn('fast');
				} else {
					$(this).find("> ul.sub-menu").stop().fadeIn('fast');
				}
			},
			function(){
				if( $(this).find(".megamenu-child-container").length ){
					$(this).find(".megamenu-child-container").stop(true, true).hide();
				} else {
					$(this).find('> ul.sub-menu').stop(true, true).hide(); 
				}
			}
		);
	}//Menu Hover End

	if( !isMobile ){
		if( currentWidth > 767 ){
			menuHover();
		}
	}
	
		
	//MAIN MENU...
	$("#main-menu ul li:has(ul)").each(function(){
		$(this).addClass("hasSubmenu");
	});
	
	$(window).load(function() {
		
		//ISOTOPE CATEGORY...
		var $container = $('.dt-sc-portfolio-container');	
		var $gw = 16;
		
		$('.dt-sc-sorting-container a').click(function(){ 
			$('.dt-sc-sorting-container').find('a').removeClass('active-sort');
			$(this).addClass('active-sort');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				},
				masonry: {
					columnWidth: $('.dt-sc-portfolio-container .portfolio').width(),
					gutterWidth: $gw
				}
			});
			return false;
		});
		
		//ISOTOPE...
		if($container.length){
			$container.isotope({ 
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				},
				masonry: {
					columnWidth: $('.dt-sc-portfolio-container .portfolio').width(),
					gutterWidth: $gw
				}
			});
		}
				
	});

	//GOOGLE MAPS...
	var $map = $('#map');
	if( $map.length ) {
		$map.gMap({
			scrollwheel: false,
			address: 'No: 58 A, East Madison St, Baltimore, MD, USA',
			zoom: 16,
			markers: [ { 'address' : 'No: 58 A, East Madison St, Baltimore, MD, USA' } ]
		});
	}
	
	//PRETTYPHOTO...	
	var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
	if($pphoto.length){
		//PRETTYPHOTO...
		$("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({ 
			hook:'data-gal',
			show_title: false,
			social_tools: false,
			deeplinking: false
		});
	}
	
		 
	 //GALLERY SLIDESHOW...
	if($(".add-slider, .portfolio-slider, .about-slider").length) {
		$('.add-slider, .portfolio-slider, .about-slider').bxSlider({
			auto:false, video:false, useCSS:false, pager:'true', autoHover:true, adaptiveHeight:true
		});
	}
		
	//TWITTER TWEETS...
	$("#tweets_container").tweet({
		modpath: 'js/twitter/',
		username: "envato",
		count: 3,
		loading_text: "loading tweets...",
		join_text: '<i class="icon-twitter"></i>',
		template: "{join} {time}, {text}"
	});
	
	//GO TO TOP...
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
	
	//NEWSLETTER AJAX SUBMIT...
	$('form[name="frmnewsletter"]').submit(function () {
		
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_subscribe_msg').html(response);
					$('#ajax_subscribe_msg').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="frmnewsletter"]').validate({
		rules: { 
			mc_email: { required: true, email: true }
		},
		errorPlacement: function(error, element) {
			element.parent('p').addClass('error');
		}
	});

	//CONTACT FORM VALIDATION & MAIL SENDING....
	$('form[name="frcontact"]').submit(function () {
		
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_contact_msg').html(response);
					$('#ajax_contact_msg').slideDown('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="frmcontact"]').validate({
		rules: { 
			txtname: { required: true },
			txtemail: { required: true, email: true },
			txtsubject: { required: true }
		},
		errorPlacement: function(error, element) { }
	});

	//CONTACT FORM VALIDATION & MAIL SENDING....
	$('form[name="admissionform"]').submit(function () {
		
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_admission_msg').html(response);
					$('#ajax_admission_msg').slideDown('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="admissionform"]').validate({
		rules: { 
			txtname: { required: true },
			txtage: { required: true },
			txtcourse: { required: true }
		},
		errorPlacement: function(error, element) { }
	});
	
	//Parallax Sections...
	$('.dt-sc-parallax-section').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible == true) {
				$(this).parallax("50%", 0.3, true);
			} else {
				$(this).css('background-position','');
			}
		});
	});
	
	
	
});

// animate css + jquery inview configuration
(function ($) {
    "use strict";
    $(".animate").each(function () {
        $(this).one('inview', function (event, visible) {
            var $delay = "";
            var $this = $(this),
                $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
            $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;

            if (visible === true) {
                setTimeout(function () {
                    $this.addClass($animation);
                }, $delay);
            } else {
                setTimeout(function () {
                    $this.removeClass($animation);
                }, $delay);
            }
        });
    });
})(jQuery);