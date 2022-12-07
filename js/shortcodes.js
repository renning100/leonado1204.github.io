jQuery.noConflict();
jQuery(document).ready(function($) {
	
	"use strict";
  
	//SKILL BARS...
	animateSkillBars();
	$(window).scroll(function(){ 
		animateSkillBars(); 
	});
  
	//TABS...
	if($('ul.tabs').length > 0) {
		$('ul.tabs').tabs('> .dt-sc-tabs_content');
	}
	
	if($('ul.dt-sc-tabs-frame').length > 0){
		$('ul.dt-sc-tabs-frame').tabs('> .dt-sc-tabs-frame-content');
	}
	
	if($('ul.tabs').length > 0) {
		$('ul.tabs').tabs('> .dt-sc-tabs_content');
	}
	
	if($('ul.dt-sc-tabs').length > 0){
		$('ul.dt-sc-tabs').tabs('> .dt-sc-tabs-content');
	}
  
	if($('.dt-sc-tabs-vertical-frame').length > 0){
	
		$('.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content');
		
		$('.dt-sc-tabs-vertical-frame').each(function(){
			$(this).find("li:first").addClass('first').addClass('current');
			$(this).find("li:last").addClass('last');
		});
		
		$('.dt-sc-tabs-vertical-frame li').click(function(){
			$(this).parent().children().removeClass('current');
			$(this).addClass('current');
		});
		
	}
  
	//Custom tab jquery works...
	if($('.tabs-framed').length > 0){
	
		$('.custom-tabs-frame').tabs('> .custom-tabs-content').parent();
		
		$('.custom-tabs-frame').each(function(){
			$(this).find("li:first").addClass('first').addClass('current');
			$(this).find("li:last").addClass('last');
		});
		
		$('.custom-tabs-frame li').click(function(){
			$(this).parent().children().removeClass('current');
			$(this).addClass('current');
		});
	
	}
  
	/*Toggle shortcode*/
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	jQuery('.dt-sc-toggle-frame-set').each(function(){
		var $this = jQuery(this),
		$toggle = $this.find('.dt-sc-toggle-accordion');
		
		$toggle.click(function(){
			if( jQuery(this).next().is(':hidden') ) {
				$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
				jQuery(this).toggleClass('active').next().slideDown();
			}
			return false;
		});
		
		//Activate First Item always
		$this.find('.dt-sc-toggle-accordion:first').addClass("active");
		$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});/* Toggle Shortcode end*/
  
  
	//TOOLTIP...
	if($(".dt-sc-tooltip-bottom").length){
		$(".dt-sc-tooltip-bottom").each(function(){	$(this).tipTip({maxWidth: "auto"}); });
	}
	
	if($(".dt-sc-tooltip-top").length){
		$(".dt-sc-tooltip-top").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	}
	
	if($(".dt-sc-tooltip-left").length){
		$(".dt-sc-tooltip-left").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	}
	
	if($(".dt-sc-tooltip-right").length){
		$(".dt-sc-tooltip-right").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	}
	
	$(window).load(function() {  
	
		//SPONSOR CAROUSEL...
		if($(".dt-sc-sponsor-carousel-wrapper").length) {
			$('.dt-sc-sponsor-carousel').carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				prev: '.sponsor-prev',
				next: '.sponsor-next',
				height: 'variable',
				scroll: 1,				
				items: {
					width: 230,
					height: 'variable',
					visible: {
						min: 1,
						max: 4
					}
				}
			});
		}
		
		//EVENTS CAROUSEL...
		if($(".dt-sc-testimonial-carousel-wrapper").length) {
			$('.dt-sc-testimonial-carousel').carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				prev: '.testimonial-prev',
				next: '.testimonial-next',
				scroll: 1,
				items: {
					width:572,
					height : 'auto',
					visible: {
						min: 1,
						max: 1
					}
				}				
			});			
		}
	
	});
  
});

function animateSkillBars(){
	"use strict";
	
	var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
	jQuery('.dt-sc-progress'+applyViewPort).each(function(){
		var progressBar = jQuery(this),
		progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
		
		progressBar.find('.dt-sc-bar').css('background-color', progressBar.find('.dt-sc-bar').attr('data-bg-color'));
		
		if (!progressBar.hasClass('animated')) {
			progressBar.addClass('animated');
			progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
		}
	});
}