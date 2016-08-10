jQuery.noConflict();
jQuery(document).ready(function($) {
			// input value empty
			$(window).load(function() {
				$("#main-login-1").find("input[type=text], input[type=password]").each(function() {
					$(this).val('');
				});
			});
			// show feedback(user validation)
			$('[data-toggle="tooltip"]').tooltip();
			
			// start of border and label animation
			$(".login-style-4 input").focus(function() {
				if (!$(this).val()) {
					$(this).parent(".login-style-4").addClass("text-up-only");
				}
			});
			
			$(".login-style-4 input").focusout(function() {
				if ($(this).val()) {
					$(this).parent(".login-style-4").addClass("text-up-only");
				} else {
					$(this).parent(".login-style-4").removeClass("text-up-only");
				}
			});
			// end of border and label animation
			
			// start of change login style
			// apply class main-login(for first active login style)
			$('#login-style-1').click(function() {
				$(this).addClass("active");
				$("#main-login-1").removeClass("main-login3-width");
				$(this).parent().siblings().find(".new-login").removeClass("active");
				$("#main-login-1").children(".apply-style").addClass("main-login").removeClass("main-login2 main-login3 main-login3-width");
				$(".login-btn").find(".btn-txt").text("Login");
				$(".main-login").find("input[type=text]").attr("placeholder", "");
				$(".main-login").find("input[type=password]").attr("placeholder", "");
			});
			// apply class main-login2 (for second login) 
			$('#login-style-2').click(function() {
				$(this).addClass("active");
				$("#main-login-1").removeClass("main-login3-width");
				$(this).parent().siblings().find(".new-login").removeClass("active");
				$("#main-login-1").children(".apply-style").addClass("main-login2").removeClass("main-login main-login3");
				$(".login-btn").find(".btn-txt").text("Login");
				$(".main-login2").find("input[type=text]").attr("placeholder", "Username");
				$(".main-login2").find("input[type=password]").attr("placeholder", "Password");
			});
			// apply class main-login3 (for third login) 
			$('#login-style-3').click(function() {
				$(this).addClass("active");
				$(this).parent().siblings().find(".new-login").removeClass("active");
				$("#main-login-1").addClass("main-login3-width")
				$("#main-login-1").children(".apply-style").addClass("main-login3").removeClass("main-login main-login2");
				$(".login-btn").find(".btn-txt").text("Go");
				$(".main-login3").find("input[type=text]").attr("placeholder", "Username");
				$(".main-login3").find("input[type=password]").attr("placeholder", "Password");
			});
			
			// apply loading effect (optional)
			// remove loaded class from body for this effect
			setTimeout(function(){
				$('body').addClass('loaded');
			}, 2000);
	
			// ripple effect for buuton (optional) 
			$('.ripple').materialripple();	

		});