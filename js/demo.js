jQuery.noConflict();
jQuery(document).ready(function($) {
$("body").addClass("close-lft-overlap-mnu lyt-scrl");
	
// theme-apply
$("#theme").addClass("blue-thm").removeClass("green-thm-dark");	
$('.voda-thm').on('click',function(){
  $("#theme").addClass("red-thm").removeClass("green-thm-dark");
});

setTimeout(function(){
	$('body').addClass('loaded');
	}, 2000);

	
$(".login-page").click(function(){
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);
});	
	  	
$('.set-thm .menu-item').on('click',function(){
	if($(this).hasClass("red-thm-btn")){
		$("#theme").attr('class', 'red-thm');
	}
 	else if($(this).hasClass("green-thm-btn")){
		$("#theme").attr('class','green-thm');
	}
	else if($(this).hasClass("orange-thm-btn")){
		$("#theme").attr('class','orange-thm');
	}
	else if($(this).hasClass("blue-thm-btn")){
		$("#theme").attr('class','blue-thm');
	}
	else if($(this).hasClass("wyt-thm-btn")){
		$("#theme").attr('class','wyt-thm');
	}	
});	
	
$('[data-toggle="tooltip"]').tooltip(); 	
	
$(".right-box-scroll").parents("body").addClass("box-scroll-footer");
//	progressbar width
var bar = $('.progress-bar');
$(function(){
$(bar).each(function(){
bar_width = $(this).attr('aria-valuenow');
$(this).width(bar_width + '%');
});
});

$(".chat-open, #sidebar-right .user-sidebar").click(function(){
$("body").addClass("sidechat-open");
});

$.set_top_bar = function()
{
	var top = $(".set-crop").find(".top-bar");
	var top_height = $(".change-profile").outerHeight();
	var tb_wrpr = $(".tb-wrpr").outerHeight();
	if(top.parents(".set-crop").is('.show-crop,.ready') && top.parents(".set-crop").is('.ready')){
		top.css({
			height:top_height
		});
	}
	else if(top.parents(".set-crop").is('.show-crop')){
		top.css({
			height:top_height
		});
	}
	else{
		top.css({
			height:tb_wrpr
		});
	}
}
$.set_top_bar();	
	
/*call-chat*/

$(".call-chat").click(function(){
	$(this).parents(".bottom_bar").removeClass("start_call").addClass("start_chat");	
});
	
/*call-group*/		
$(".call-group").click(function(){
	$(this).parents(".bottom_bar").removeClass("start_call");
});
	
$(window).on("scroll",function(){
		if($(window).scrollTop() > 42){
			$(".local-menu").addClass("fixed-local-menu");
		}
		else{
			$(".local-menu").removeClass("fixed-local-menu");
		}
	});
	 
$("#screen-lock").click(function(){
		  $('body').addClass("scn-lock-overflow");
			var vague = $("#content").Vague({intensity:7});
			vague.blur(); 
	  });
	
$(".new-login .logged-in").on("click", function(){
		$('body').removeClass("scn-lock-overflow");
		$("#content").css({
			"-webkit-filter":"none",
			"filter":"none"
		})
	});

// screen-lock graph counter
var count = 0;	
 function my_counter(){	
	 $(".set-count").text(count+'%');
	 if(count<=60){
		count += Math.round(Math.random()*1);
	 }
	 else{
		 count -= Math.round(Math.random()*10);
	 }
	 setTimeout(function() { my_counter() },500);
}
my_counter();	
// main-breadcrumb	
function set_bredcrumb() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	var bred_ele = pgurl.substring(0, pgurl.lastIndexOf("."));
	$(".main-bred .breadcrumb").find(".active").html(bred_ele);
     $(".nav-menu li a").each(function(){
          if( $(this).attr("href") == pgurl)
		  {
          	$(this).addClass("active");
			$(this).parents("ul").siblings("a").addClass("active");
		  }
     });
		
		$(".submenu-more li a").removeClass("active");
		$(".submenu-more li a").parents("ul").siblings("a").removeClass("active");
	  $(".submenu-more li a").each(function(){
			  if( $(this).attr("href") == pgurl && ((($(this).parents(".submenu-more > li").css('display')) == 'block') || (($(this).parents(".submenu-more .mCSB_container  > li").css('display')) == 'block')  )    )
		  	{
				//alert("hii");
          		$(this).addClass("active");
				$(this).parents("ul").siblings("a").addClass("active");
			}
     });
}

set_bredcrumb();	
$(window).on("load",set_bredcrumb);	
$(window).on("resize",set_bredcrumb);	
//$(window).resize(set_bredcrumb);
	
$(".code").click(function(e){
	e.preventDefault();
	$(this).parents(".code-editor").find(".default-tab:first").slideToggle("fast");
});	
	
//todo todo_list() count how many task checked	
function todo_list() {
	var total, count, remaining;
	total = $("#todo-list").find("input[name='todo-chk']").length;
	$("#todo-total").text(total);
	count = $("#todo-list").find("input[name='todo-chk']:checked").length;
	remaining = (total - count);
	$("#todo-remaining").text(remaining);
}
todo_list();
$(document).on('change', "#todo-list input[name='todo-chk']", function () {
	todo_list();
});
	
//append new  to todo list
function append_todo() {
	var value = $("#todo-input-text").val();
	if (value != "") {
		$("#todo-list tbody").append('<tr><td class="checkbox-squere set-checkbox chk-primary"><input value="1" type="checkbox" name="todo-chk"><label class="checkbox"></label></td><td>' + value + '</td></tr>');
	}
	todo_list();
	$("#todo-input-text").val('');
}
	
$("#todo-btn-submit").on('click', function () {
	append_todo();
});
	
$("#todo-input-text").on('keypress', function (e) {
	var code = e.keyCode || e.which;
	if (code == 13) {
		var value = $(this).val();
		if (value != "") {
			append_todo();
		}
	}
});
	
//delete from todo list
$("#btn-archive").on('click', function () {
	$("#todo-list").find("input[name='todo-chk']:checked").parents("tr").remove();
	todo_list();
});	
//todo check list end		

function set_overflow(){
	if($("body").hasClass("open-sidebar") || $(" .overflow-popup").is(":visible") || $("body").hasClass("cross") || $(" .overflow-popup-left-chat").is(":visible") ){
			$("body").css({
				overflow:"hidden"
			});
	}
	else{
		if($("body").hasClass("close-lft-overlap-mnu") || $("#set-menu").hasClass("last-mnu") || $("#set-menu").hasClass("first-mnu") || $("#set-menu").hasClass("nonoly-lyt") || $("#set-menu").hasClass("third-mnu") || $("#set-menu").hasClass("icon-mnu")|| $("#set-menu").hasClass("lft-mnu") ){
			$("body").css({
				overflow:"visible"
			});
			}
		}	
}
	
$(window).resize(set_overflow);
$(document).on('keyup',function(e){
    if(e.keyCode == 27){ // Key code for ESC key
        e.preventDefault();
        $('body').removeClass('open-sidebar');
		set_overflow();
		if($('body').hasClass("sidechat-open")){
			$('body').removeClass('sidechat-open');
		}
        if(!$("body").hasClass("close-lft-overlap-mnu")){
           $("body").addClass("close-lft-overlap-mnu").removeClass("cross");
        }
    }
});
$(".sidebar-open, #sidebar-right #close-btn,.overflow-popup").click(function(){
$("body").toggleClass("open-sidebar");
$(".sidebar-open").parents(".set-responsive").removeClass("show-list");
$(".main-header").find(".user-setting").removeClass("open");	
	set_overflow();
});	
$(".bar-mnu").on('click',function() {
   $("body").toggleClass("close-lft-overlap-mnu cross");
		set_overflow();
 });
$(".overflow-popup-left").on('click',function() {
	$("body").addClass("close-lft-overlap-mnu").removeClass("cross");
	set_overflow();	
	if($("#set-menu").hasClass("two-mnu") && $("#set-menu").hasClass("two-mnu-responsive") && $("#set-menu").hasClass("set-lft-mnu")){
		$("#set-menu").addClass("set-icon-mnu").removeClass("set-lft-mnu");
	}	
});
	
//optn-bar-mnu open dropdown
$(".optn-bar-mnu").click(function(){
	$(this).siblings(".optn-bar-status").toggleClass("open-dropdown");
});
 $(document).on('click',document, function(event){
	   if($(event.target).parents(".optn-bar").length)return;
	   $(".optn-bar-status").removeClass("open-dropdown");
});

// widget-tile page open custom popup for setting
$(document).on('click',document, function(event){
	   if($(event.target).parents(".cp-wrpr").length)return;
	   $(".custom-popover").removeClass("show-popover");
  	 });
			
$(".example-pop").click(function(){
	$(this).siblings(".custom-popover").toggleClass("show-popover");
});		

//sidebar-right Host Date Time	
function updateTime() {
    var dt = new Date();
	var year = dt.getFullYear();
    var h =  dt.getHours(), 
		m = dt.getMinutes();
	var s = dt.getSeconds();
	m = (m < 10 ? '0' : '') + m;
	s = (s < 10 ? '0' : '') + s;
    var _time_nosuf = (h >= 10) ? (h +':' + m +':'+ s) : ('0'+h + ':' + m +':'+ s);
	 var _time = dt.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
	$(".time-nosuf").html(_time_nosuf);
	
$(".host-time1").html(_time);
var month = new Array();
	var day = new Array();	
	var dd = dt.getDate();
	var j = dd % 10,
    k = dd % 100;
	if(dd<10){
	 dd='0'+dd;
	}
    if (j == 1 && k != 11) {
        dd = dd + "<sup>st</sup>";
    }
    else if (j == 2 && k != 12) {
          dd = dd + "<sup>nd</sup>";
    }
    else if (j == 3 && k != 13) {
        dd = dd + "<sup>rd</sup>";
    }
	else{dd = dd + "<sup>th</sup>";}

month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];	
var curr_month = month[dt.getMonth()];
var curr_day = day[dt.getDay()];
$(".dec-date").html(dd);		
$(".host-time1").html(_time);
$(".time-month").html(curr_month+',');
$(".time-day").html(curr_day);	
$(".copy-wrt .year").html(year);
var today_date = dt.getDate()+ "-" + curr_month + "-" + year;
$(".date_footer .today_date").html(today_date);	
$(".timer-footer .current-time").html(_time_nosuf);	
}

updateTime();	
setInterval(updateTime,1000);
	
function calcTime() {
	var city = 'chicago'; 
	var offset ='-6.0'; var time_zone;
    // create Date object for current location
    d = new Date();
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    // return time as a string disply date toLocaleString();
    // return "The local time in " + city + " is " + nd.toLocaleString();
	time_zone =  nd.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
	$(".host-time2").html(time_zone);
}
calcTime();	
setInterval(calcTime,5000);	
	
// cpu ram hdd live useage by color start
function serv_statis(){
		$( ".sys-info .parent-use .fill" ).each(function(){
	var height_px = Math.floor(Math.random()*90)+10;
  	var height_pct = Math.round((height_px/200)*100);
  	var em_txt = $(this).parents('.parent-use').siblings().find('em');
			$(this).parents('.parent-use').find(".fill").css({
				height:height_px
			});
	if(height_pct <= 25){
            $(this).parents(".parent-use").addClass('info-use-bg');
			$(this).parents(".parent-use").removeClass('success-use-bg warning-use-bg danger-use-bg');
            em_txt.html(height_pct);
	}
	else if(height_pct > 25 && height_pct <= 50){
              $(this).parents(".parent-use").addClass('success-use-bg');
			  $(this).parents(".parent-use").removeClass('info-use-bg warning-use-bg danger-use-bg');
              em_txt.html(height_pct);
			}
	else if(height_pct > 50 && height_pct <= 75){
              $(this).parents(".parent-use").addClass('warning-use-bg');
			  $(this).parents(".parent-use").removeClass('info-use-bg  success-use-bg danger-use-bg');
              em_txt.html(height_pct);
	}
	else  if(height_pct > 75 && height_pct <= 100){
            $(this).parents(".parent-use").addClass('danger-use-bg');
			$(this).parents(".parent-use").removeClass('info-use-bg  success-use-bg warning-use-bg ');
            em_txt.html(height_pct);
	}
});
	}
function set_progess_width(){
	var valeu_hdd = Math.floor(Math.random()*90)+10;
	var valeu_ram = Math.floor(Math.random()*90)+10;
	var valeu_cpu = Math.floor(Math.random()*90)+10;
	$(".set-progress-hdd").find(".progress-bar").css('width',valeu_hdd+'%');
	$(".set-progress-hdd").find(".progress-info").html(valeu_hdd+'%');
	$(".set-progress-ram").find(".progress-bar").css('width',valeu_ram+'%');
	$(".set-progress-ram").find(".progress-info").html(valeu_ram+'%');
	$(".with-heading .hdd-use").html(valeu_hdd+'%');
	$(".with-heading .ram-use").html(valeu_ram+'%');
	$(".with-heading .cpu-use").html(valeu_cpu+'%');
}	
	
$(window).load(function(){ 
	setInterval(serv_statis,1000);
	setInterval(set_progess_width,1000);
});	
	
(function( $ ){
   $.fn.set_more_menu = function() {
		var html_mnu = $(this).find(".nav-menu").html();
	    $(this).find(".more-mnu .submenu-more").append(html_mnu);	
   }; 
})( jQuery );	
	
$(window).load(function(){
	$(".sidebar-menu.operation-menu").set_more_menu();
	$(".sidebar-menu.main-menu").set_more_menu();
});

// close nav-menu on btn click
$(".sidebar-menu #close-btn").click(function(){
	setTimeout(function(){ $('body').toggleClass("close-lft-overlap-mnu").removeClass("cross"); }, 100);
});
$(".overflow-popup-left-chat").click(function(){
  $("body").removeClass("sidechat-open");
});	
//	search-nav
	$(" .main-header .search-nav #sb-button").click(function(e){
		e.stopPropagation();
		$(this).parents(".main-header .search-nav").toggleClass("open-sb");
	});
	function clear_search(){
		$("#sb-button").parents(".search-nav").find("[type=text]").val('');
	}
	$(".main-header #sb-button").on("click",clear_search);
	$(".sidebar-menu #sb-button").on("click",clear_search);
	$(".sidebar-menu #sb-button").click(function(){
		$(this).parents(".search-nav").find("[type=text]").val('');
	});
	$(document).keypress(function(e) {
		 e.stopPropagation();
    if(e.which == 13) {
		$(".sidebar-menu #sb-button").parents(".search-nav").find("[type=text]").val('');
	}
});
    $(document).on('click',document, function(event){
	   if($(event.target).parents(".main-header .search-nav").length)return;
	  $(".main-header .search-nav").removeClass("open-sb");
  });
	
//close search on enter press
	$(document).keypress(function(e) {
		 e.stopPropagation();
    if(e.which == 13) {
		$(".main-header .search-nav").removeClass("open-sb");
    }
});
$(".custom-focus li a").click(function(){
    	$(this).parents("li").addClass('active-tab').siblings().removeClass('active-tab');
});	

//Quick menu settings start 	
var top = 0, left =1, right = 0, third = 0, non_oly =0; icon=1; two=1; full=0;		
function checkWidth() {
	if (($(window).width() <= 768)) {
		if(two=='0'){
			$('#set-menu').removeClass().addClass('lft-mnu');
		}
		else{
			$('#set-menu').removeClass().addClass('two-mnu-responsive operation-icon-mnu');
		}
	}
	else{
		if((two=='1')){
			if((non_oly=='1')){
				if(right=='1'){
					if(full=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu nonoly-lyt rgt');
					}
					else if(third=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu third-mnu rgt');
					}
					else if(icon=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu icon-mnu rgt');
					}
				}
				else if(right=='0'){
					if(full=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu nonoly-lyt lft-mnu');
					}
					else if(third=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu third-mnu');
					}
					else if(icon=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu icon-mnu');
					}
				}
			}
			else if(non_oly=='0'){
				if(right=='1'){
					if(full=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu rgt-mnu');
					}
					else if(third=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu third-mnu rgt');
					}
					else if(icon=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu icon-mnu rgt');
					}
				}
				else if(right=='0'){
					if(full=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu lft-mnu');
					}
					else if(third=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu third-mnu');
					}
					else if(icon=='1'){
						$('#set-menu').removeClass();
						$('#set-menu').addClass('two-mnu icon-mnu');
					}
					
				}
			}
		}
		else if(two=='0'){
			if(top=='1'){
				$('#set-menu').removeClass();
				$('#set-menu').addClass('first-mnu');
			}
			else if(top=='0'){
				if(non_oly=='1'){
					if(right=='1'){
						if(full=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('rgt nonoly-lyt');
						}
						else if(third=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('rgt third-mnu');
						}
						else if(icon=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('rgt icon-mnu');
						}
					}
					else if(right=='0'){
						if(full=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('lft-mnu nonoly-lyt');
						}
						else if(third=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('third-mnu');
						}
						else if(icon=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('icon-mnu');
						}
					}
				}
				else if(non_oly=='0'){
					if(right=='1'){
						if(full=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('rgt-mnu');
						}
						else if(third=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('rgt third-mnu');
						}
						else if(icon=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('rgt icon-mnu');
						}
					}
					else if(right=='0'){
						if(full=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('lft-mnu');
						}
						else if(third=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('third-mnu');
						}
						else if(icon=='1'){
							$('#set-menu').removeClass();
							$('#set-menu').addClass('icon-mnu');
						}
					}
				}
			}
		}
	}
}	
$(window).resize(checkWidth);	
$(window).load(checkWidth);	
// set scroller
(function ( $ ) {
   $.fn.set_scroller_top = function() {
	var height_submnu = window.innerHeight -($(".main-header").height() + $(".footer").height());
	 $(this).parent("li").click(function(){
		 var subnav_height = $(this).find("ul").height();
			 $(this).find("ul").css({
				"max-height":height_submnu 
			 });
	 });
   };
})( jQuery );
	
(function( $ ){
   $.fn.set_scroller_left = function() {
	$(this).parent("li").hover(function(){
			 //alert("left");
			var sub_nav_height = $(this).find("ul").height();
			var window_height = window.innerHeight;
			var top = ($(this).position().top);
			var bottom = (window_height-top);	
			if($(this).hasClass("tp-down")){
					$(this).find("ul").css({
						"max-height":((window_height-top)-128)
					});
				//alert((top))
			}
			else if($(this).hasClass("btm-up")){
					$(this).find("ul").css({
						"max-height":(top)
					});	
			}
		});
   
	};   
})( jQuery );
	
function set_icon(){
	    $(".sub-nav").addClass("xyz");
		$(".submenu-more").addClass("xyz");
		if((($("#set-menu").hasClass("lft-mnu")) && ($("#set-menu").hasClass("two-mnu"))) || (($("#set-menu").hasClass("rgt-mnu")) && ($("#set-menu").hasClass("two-mnu"))) || (($("#set-menu").hasClass("two-mnu")) && ($("#set-menu").hasClass("nonoly-lyt")))){
			$(".operation-menu .sub-nav").removeClass("xyz");
			$(".operation-menu .submenu-more").removeClass("xyz");
			$(".operation-menu .sub-nav").mCustomScrollbar("destroy");
			$(".operation-menu .submenu-more").mCustomScrollbar("destroy");
		}
		else if( ($("#set-menu").hasClass("lft-mnu")) || ($("#set-menu").hasClass("rgt-mnu")) || 
				($("#set-menu").hasClass("nonoly-lyt")) ){
			$(".main-menu .sub-nav").removeClass("xyz");
			$(".main-menu .submenu-more").removeClass("xyz");
			$(".main-menu .sub-nav, .main-menu .stybdr").mCustomScrollbar("destroy");
			 //alert("left-loop working");
			// $(".main-menu .sub-nav").removeAttr('style');
			$(".main-menu .sub-nav").mCustomScrollbar("destroy");
			$(".main-menu .submenu-more").mCustomScrollbar("destroy");
		}
		if(($("#set-menu").hasClass("operation-lft-mnu"))){
			$(".operation-menu .sub-nav").removeClass("xyz");
			$(".operation-menu .submenu-more").removeClass("xyz");
			$(".operation-menu .sub-nav, .main-menu .stybdr").mCustomScrollbar("destroy");
			$(".operation-menu .submenu-more").mCustomScrollbar("destroy");
		}
		if(($("#set-menu").hasClass("two-mnu-responsive"))){
			$(".main-menu .sub-nav").removeClass("xyz");
			$(".main-menu .submenu-more").removeClass("xyz");
			$(".main-menu .sub-nav, .main-menu .stybdr").mCustomScrollbar("destroy");
			$(".main-menu .submenu-more").mCustomScrollbar("destroy");
		}
	
		$(".more-mnu .submenu-more.xyz").mCustomScrollbar({
			axis:"y",
			theme:"dark"
		});
		$(".nav-menu .sub-nav.xyz").mCustomScrollbar({
			axis:"y",
			theme:"dark"
		});
		if(($("#set-menu").hasClass("first-mnu"))){
			//alert("1-5");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_top();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_top();
		}
		else if(($("#set-menu").hasClass("two-mnu")) && ($("#set-menu").hasClass("lft-mnu"))){
			//alert("1-1");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_top();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_top();
		}
		else if(($("#set-menu").hasClass("two-mnu")) && ($("#set-menu").hasClass("rgt-mnu"))){
			//alert("1-1");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_top();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_top();
		}
		else if(($("#set-menu").hasClass("two-mnu")) && ($("#set-menu").hasClass("nonoly-lyt"))){
			//alert("1-1");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_top();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_top();
		}
		else if(($("#set-menu").hasClass("two-mnu")) && ($("#set-menu").hasClass("icon-mnu"))){
			//alert("1-2");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_top();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_top();
			
			$(".sidebar-menu.operation-menu .nav-menu .sub-nav.xyz").set_scroller_left();
			$(".sidebar-menu.operation-menu .more-mnu .submenu-more.xyz").set_scroller_left();
		}
		else if(($("#set-menu").hasClass("two-mnu")) && ($("#set-menu").hasClass("third-mnu"))){
			//alert("1-3");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_top();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_top();
			
			$(".sidebar-menu.operation-menu .nav-menu .sub-nav.xyz").set_scroller_left();
			$(".sidebar-menu.operation-menu .more-mnu .submenu-more.xyz").set_scroller_left();
		}
		else if( ($("#set-menu").hasClass("third-mnu")) ){
			//alert("1-4");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_left();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_left();
		}
		else if(($("#set-menu").hasClass("icon-mnu"))){
			//alert("1-5");
			$(".sidebar-menu.main-menu .nav-menu .sub-nav.xyz").set_scroller_left();
			$(".sidebar-menu.main-menu .more-mnu .submenu-more.xyz").set_scroller_left();
		}
	else if(($("#set-menu").hasClass("two-mnu-responsive")) && ($("#set-menu").hasClass("operation-icon-mnu"))){
		//alert("1-6");
		$(".sidebar-menu.operation-menu .nav-menu .sub-nav.xyz").set_scroller_left();
			$(".sidebar-menu.operation-menu .more-mnu .submenu-more.xyz").set_scroller_left();
	}
}

$(window).bind("load",function(){
	set_icon();	
});	

$(window).bind("resize",function(){
	set_icon();	
});		
	
//$("#set-menu").addClass("icon-mnu");
$("#cmn-lft-mnu").prop("checked", true);
$("#cmn-two-mnu").prop("checked", true);
$("#cmn-icon-mnu").prop("checked", true);	
$("#cmn-lft-mnu").click(function(){
	left = 1; right=0; top=0;
	set_icon();
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	if(two=='1'){
		$(".sidebar-menu.main-menu .nav-menu .sub-nav").set_scroller_top();
		$(".sidebar-menu.main-menu .more-mnu .submenu-more").set_scroller_top();
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
		}
	}
	else{
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$('#set-menu').removeClass();
					$('#set-menu').addClass("lft-mnu");
				}
			}
			
		}
	}
});		
$("#cmn-rgt-mnu").click(function(){
	set_icon();
	 right=1; top = 0; left = 0;
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	if(two=='1'){
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
		}
	}
	else{
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$('#set-menu').removeClass();
					$('#set-menu').addClass("rgt-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
		}
	}
});	
$("#cmn-first-mnu").click(function(){
	top=1;non_oly=0;full=0;third=0;icon=0; two=0;
	$("#cmn-nonoverlap-mnu").prop("checked", false);
	$("#cmn-full-mnu").prop("checked", false);
	$("#cmn-third-mnu").prop("checked", false);
	$("#cmn-icon-mnu").prop("checked", false);
	$("#cmn-two-mnu").prop("checked", false);	
	if((two=='0')&&(top=='1')){
		$("#set-menu").removeClass();
   		$("#set-menu").addClass("first-mnu");
		$("body").removeClass("cross");
	}
	else if((two=='1')&&(top=='1')){
		$("#cmn-two-mnu").prop("checked", false);
		$("#set-menu").removeClass();
   		$("#set-menu").addClass("first-mnu");
		$("body").removeClass("cross");
	}
	set_icon();
});
$("#cmn-nonoverlap-mnu").click(function(){
	set_icon();
	 third=0;icon=0;top=0;
	if($(this).prop("checked") == true){
		non_oly=1;
	}
	else{
		non_oly=0;
	}
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	$("#cmn-first-mnu").prop("checked", false);
	$("#cmn-third-mnu").prop("checked", false);
	$("#cmn-icon-mnu").prop("checked", false);
	if(two=='1'){
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
				else{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
				else{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
					icon=1;
					$("#cmn-icon-mnu").prop("checked", true);
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
				
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu ");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
			}
		}
	}
	else{
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$("#set-menu").addClass("rgt-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
				else{
					full=1;
					$("#cmn-full-mnu").prop("checked", true);
					$('#set-menu').removeClass();
					$('#set-menu').addClass("lft-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
		}
	}
});
$("#cmn-full-mnu").click(function(){
	set_icon();
	full=1; third=0; icon=0;
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	if(two=='1'){
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
		}
	}
	else{
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
		}
	}
});	
$("#cmn-third-mnu").click(function(){
	set_icon();
	full=0; third=1; icon=0;non_oly=0;
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	$("#cmn-nonoverlap-mnu").prop("checked", false);
	if(two=='1'){
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
		}
	}
	else{
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
		}
	}
});
$("#cmn-icon-mnu").click(function(){
	set_icon();
	full=0; third=0; icon=1;non_oly=0;
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	$("#cmn-nonoverlap-mnu").prop("checked", false);
	if(two=='1'){
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("two-mnu icon-mnu");
				}
			}
		}
	}
	else{
		if((right=='1')){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
			else if(non_oly=='0'){
				if(full=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");
				}
				else if(third=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if(icon=='1'){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}
			}
		}
	}
});	
$("#cmn-two-mnu").click(function(){
	set_icon();
	$("body").removeClass("close-lft-overlap-mnu").addClass("cross");
	if($(this).prop("checked") == true){
		two=1;top=0;
		$("#cmn-first-mnu").prop("checked", false);
		if((right=='1')){
			if(non_oly=='1'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt two-mnu");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu two-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu two-mnu");
				}	
			}
			else if(non_oly=='0'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu two-mnu");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu two-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu two-mnu");
				}	
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt two-mnu");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu two-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu two-mnu");
				}	
			}
			else if(non_oly=='0'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu two-mnu");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu two-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu two-mnu");
				}
				else{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu two-mnu");
					icon=1;
					$("#cmn-icon-mnu").prop("checked", true);
				}
			}	
		}
	}
	else{
		two=0;
		if((right=='1')){
			if(non_oly=='1'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt nonoly-lyt");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}	
			}
			else if(non_oly=='0'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt-mnu");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt third-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("rgt icon-mnu");
				}	
			}
		}
		else if(right=='0'){
			if(non_oly=='1'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("nonoly-lyt");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}	
			}
			else if(non_oly=='0'){
				if((full=='1'))
				{
					$("#set-menu").removeClass();
					$("#set-menu").addClass("lft-mnu");		
				}
				else if((third=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("third-mnu");
				}
				else if((icon=='1')){
					$("#set-menu").removeClass();
					$("#set-menu").addClass("icon-mnu");
				}	
			}	
		}
	}
});
// to change left menu into icon menu and vice versa	
$(".change-mnu").click(function(){
		if (($(window).width() > 768)) {
			if(two=='0'){
				if(non_oly=='0'){
					if(right=='0'){
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("icon-mnu");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("lft-mnu");
						}
					}
					else if(right=='1'){
						$("#cmn-lft-mnu").prop("checked", false);
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("icon-mnu rgt");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("rgt-mnu");
						}
					}
				}
				else if(non_oly=='1'){
					if(right=='0'){
						$("#cmn-rgt-mnu").prop("checked", false);
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("icon-mnu");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("lft-mnu nonoly-lyt");
						}
					}
					else if(right=='1'){
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("icon-mnu rgt");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("rgt nonoly-lyt");
						}
				}
				}
			}
			else if(two=='1'){
				if(non_oly=='0'){
					if(right=='0'){
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu icon-mnu");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu lft-mnu");
						}
					}
					else if(right=='1'){
						left=0;right=1;
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu icon-mnu rgt");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu rgt-mnu");
						}
					}
				}
				else if(non_oly=='1'){
					if(right=='0'){
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu icon-mnu");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu lft-mnu nonoly-lyt");
						}
					}
					else if(right=='1'){
						if(full=='1'){
							icon=1; full=0;
							$("#cmn-icon-mnu").prop("checked", true);
							$("#cmn-full-mnu").prop("checked", false);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu icon-mnu rgt");
						}
						else if(icon=='1'){
							icon=0;full=1;
							$("#cmn-icon-mnu").prop("checked", false);
							$("#cmn-full-mnu").prop("checked", true);
							$("#set-menu").removeClass();
							$("#set-menu").addClass("two-mnu rgt nonoly-lyt");
						}
					}
				}
			}
		}
		else{
			if($("#set-menu").hasClass("two-mnu-responsive operation-lft-mnu")){
				$("#set-menu").addClass("operation-icon-mnu").removeClass("operation-lft-mnu");
			}
			else{
				$("#set-menu").addClass("operation-lft-mnu").removeClass("operation-icon-mnu");
			}
		}
	set_icon();
	});	

// menu settings end
$(".shift-left").click(function(){
	$(this).parents(".aside-wrpr").toggleClass("shift-treeright");
});
	
 $(document).on('keyup',function(e){
	 e.preventDefault();
 	if(e.keyCode == 27) { 
		$(".aside-wrpr").removeClass("shift-treeright");
	}
 });	

 $(window).scroll(function(){
          if($(window).scrollTop()>400){
            $(".top-scroll").find("a").addClass("primary-scroll");
          }
          else{
            $(".top-scroll").find("a").removeClass("primary-scroll");
          }
 });
	
 $(document).on("click",".primary-scroll", function(){
            $("body,html").animate({scrollTop:0},'500');
 });
	
$(".u-call ,.close-call ").click(function(){
	$(".bottom_bar").toggleClass("start_call");
});

$(".tab-2").scroll(function(){
var obj = $( ".bottom_bar  .u-event" );
var arr = $.makeArray( obj );
for (i in arr)
    {
       var height = $(arr[i]).height();
      if($(arr[i]).offset().top <= (height-195)){
      $(".bottom_bar .u-event.active").removeClass("active");
      $(arr[i]).addClass("active");
	  var text_dynamic =  $(arr[i]).find(".e-label").text();
	  $(".bottom_bar .e-label-dynamic").text(text_dynamic).css({
		  transform:"scale(1)"
		  });
    }
}
});
	
function active_label(){
var obj = $( ".active-timeline  .u-event" );
var arr = $.makeArray( obj );
for (i in arr)
    {
       var height = $(arr[i]).height();
		scrollPos = $(document).scrollTop();
      if(($(arr[i]).position().top + 42) <= scrollPos){
      	$(".u-event.active").removeClass("active");
		  $(arr[i]).addClass("active");
	  		var text_dynamic =  $(arr[i]).find(".e-label").text();
		    $(".main-timeline .e-label-dynamic").text(text_dynamic).css({
		      transform:"scale(1)"
		  });
    }
}
}
	
$(window).scroll(active_label);
function cal_top(){
var top_set = $(".sidebar-chat .titlebar").height() + $(".top-bar").height()  + $(".sidebar-chat .content").height();
$(".sidebar-chat .bottom_bar").css({
top : top_set
});
}	
$(window).load(cal_top);
$(window).resize(cal_top);
	
$(".p-img").click(function(){
$(".sidebar-chat").toggleClass("open-contact");
  $(".bottom_bar").removeClass("start_chat start_call");
	$(".e-label-dynamic").css({
		transform: "scale(0)"
	});
 });
	
$(".fixed-action-btn .btn-floating-theme").click(function(){
  $(this).parents().toggleClass("active-chld");
});
	
$(".content .e-c-deatil .e-detail").click(function(){
  $(this).parents(".content ").addClass("edit_detail_opn")
});
	
$(".content  .e-c-deatil .c-detail , .edit-content .edit-inpt .e_c_cllose").click(function(){
  $(this).parents(".content ").removeClass("edit_detail_opn")
});
	
$(".sidebar-chat .titlebar .step-back ").click(function(){
  $(".sidebar-chat").removeClass(" open-contact");
 $(".bottom_bar").removeClass("start_chat start_call");
});
$(window).load(function(){
var width= ($(".time_teg").width())/2;
  $(".time_teg").css({
"margin-left": '-' +width+'px'
});
});
$(".close-chat").click(function(){
  $("body").removeClass("sidechat-open");
});
$(".drop-info .b-arrow" ).click(function(){
	$(this).parents(".c-person").find(".content").slideToggle("fast");
	$(this).parents(".c-person").siblings().find(".content").slideUp("fast");
});
$(".u-comment").click(function(){
	$(this).parents(".bottom_bar").addClass("start_chat");
});
$(".tab-2 .left-content").click(function(){
	$(this).parents(".bottom_bar").addClass("start_chat");
});
$(".chat-back").click(function(){
	$(this).parents(".bottom_bar").removeClass("start_chat");
});
$(".send-msg").click(function(){
  add_text();
});
$('input.send_msg').on('keypress', function(e) {
    var code = e.keyCode || e.which;
    if(code==13){
       add_text();
    }
});
function add_text(){
    var value = $(".send_msg").val();
  if(value!= ""){
      $('.conv-start').append('<div class="full-width"><div class="my-conv clearfix"><p>'+value+'</p><div class="small-time">11:09 AM</div></div></div>');
  }
  $(".send_msg").val('');
}	
$(".status_now").click(function(event){
   event.stopPropagation();
	$(".p-status").toggleClass("active");
});
$(".online").click(function(event){
   event.stopPropagation();
});
$(".away").click(function(event){
   event.stopPropagation();
});
$(".no_dist").click(function(event){
   event.stopPropagation();
});	
$(".bottom_bar .contact, .tab-2 .b-arrow").click(function(){
  $(".sidebar-chat").addClass("open-contact");
  $(".tab-1").addClass("active-tab").removeClass("prev-tab");
  $(".tab-2").removeClass("active-tab").addClass("prev-tab");
  $(".bottom_ba .chat ").removeClass("active");
  $(".set-crop").removeClass("show-crop");
  $.set_top_bar();
});
$(".bottom_bar .chat").click(function(){
  $(".sidebar-chat").addClass("open-contact");
  $(".tab-2").addClass("active-tab").removeClass("prev-tab");
  $(".tab-1").removeClass("active-tab").addClass("prev-tab");
  $(".set-crop").removeClass("show-crop");	
  $.set_top_bar();
});
	
$(".nav-menu li a").bind("click",function(event){
	//event.stopPropagation();
	$(this).parent("li").toggleClass("clicked_cls").siblings().removeClass("clicked_cls");
	$(this).parent("li").find("ul").fadeToggle();
	$(this).parent("li").find("ul li ul").hide();
	$(this).parent("li").find("ul li").removeClass("clicked_cls");
	$(this).parent().siblings("li").find("ul").fadeOut();
	$(".more-mnu li").find("ul").fadeOut();
	$(".more-mnu li").removeClass("clicked_cls");	
	$(".user li a").siblings("ul").fadeOut("fast");
	$(".user li a").find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
	set_icon();
});

$(document).on("click",".more-mnu a",function(event){
		//event.stopPropagation();
		$(this).siblings("ul").slideToggle();
		$(this).parent().siblings("li").find("ul").fadeOut();
		$(".nav-menu li a").siblings("ul").fadeOut();
		$(this).parent("li").toggleClass("clicked_cls").siblings().removeClass("clicked_cls");;
		$(this).parent("li").find(".clicked_cls").removeClass("clicked_cls");
		$(".nav-menu  li").removeClass("clicked_cls");	
		$(".user li a").siblings("ul").fadeOut();
		$(".user li a").find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
		$(this).siblings().find(".sub-nav").fadeOut();	
		$(this).siblings().find(".caret-1").removeClass("open");
		set_icon();
});

$(document).click(function (e) {
    if ($(".nav-menu li a").siblings("ul").is(":visible") || $(" .more-mnu  li a").siblings("ul.submenu-more").is(":visible") || $(".user li a").siblings("ul").is(":visible") || $(".nav-menu li").hasClass("clicked_cls") || $(" .more-mnu li").hasClass("clicked_cls")) {;
		if (!($(e.target).parents(".sidebar-menu").size())){
        	$(".nav-menu  li  a").siblings("ul").fadeOut();
			$(".nav-menu li").removeClass("clicked_cls");
			$(".more-mnu li").removeClass("clicked_cls");
        	$(".more-mnu  li").find("ul").fadeOut("fast");
        	$(".user li").find("ul").fadeOut("fast");
        	$(".user li a").find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
		}
    }
});	
$(".user li a").click(function(){
	$(this).siblings("ul").fadeToggle("fast");
	$(".nav-menu li  a").siblings("ul").fadeOut("fast");
	$(this).find(".fa-caret-down").toggleClass("fa-caret-up");
	$(".nav-menu li a").find(".open").removeClass("open");
	$(".more-mnu li").find("ul").fadeOut("fast");
	$(".more-mnu li a").find(".open").removeClass("open");
});
function sliding_tab() {
  	if ($(this).hasClass('slider')){ return; }
	  var width_n;
	  width_n = $(this).outerWidth(true);
      $(this).addClass("active-nav").siblings().removeClass("active-nav");
      var whatTab = $(this).index();
	  var width_lft = 0;
		$(this).prevAll().each(function(){ width_lft += $(this).outerWidth(true); });
  		$(this).siblings(".slider").css({
    		left: width_lft + "px",
	  		width:width_n
  		});
	}		
$('#sidebar-right .sliding-bar li').on('click',sliding_tab);
$(".sidebar-chat .sliding-bar li").on('click',sliding_tab);		
$(".s-opn-wrpr #slide-tab1 li").on('click',sliding_tab);	
$(".s-opn-wrpr #slide-tab2 li").on('click',sliding_tab);		
$(".default-tab #slide-tab li").on('click',sliding_tab);	
$(".sliding-bar li").on('click',sliding_tab);		
(function( $ ){
   $.fn.slide_tab_load = function() {
			var n_width=$(this).find(".active-nav").outerWidth(true);
			var n_lft=0;
			$(this).find(".active-nav").prevAll("li").each(function(){n_lft += $(this).outerWidth(true)});
			  $(this).find(".slider").css({
				width:n_width,
				left:n_lft
			});
   }; 
})( jQuery );	
$(window).load(function(){
	$("#slide-tab1").slide_tab_load();
	$("#slide-tab2").slide_tab_load();
	$("#slide-tab").slide_tab_load();
	$("#slide-tab-more").slide_tab_load();
	$("#slide-tab-more2").slide_tab_load();
});
$(window).resize(function(){
	$("#slide-tab1").slide_tab_load();
	$("#slide-tab2").slide_tab_load();
	$("#slide-tab").slide_tab_load();
	$("#slide-tab-more").slide_tab_load();
	$("#slide-tab-more2").slide_tab_load();
});	
// for responsive header	
$(".more-navbar").on("click",function(e){
		e.stopPropagation();
		$(this).parents(".set-responsive").toggleClass("show-list");
	});
$(".responsive-wrpr .user").on("click",function(e){
		e.stopPropagation();
	});  
$(document).on("click",function(){
		 $(".more-navbar").parents(".set-responsive").removeClass("show-list");
	 });  
$(window).resize(function(){
	if ($(window).width() > 768) {
		$(".more-navbar").parents(".set-responsive").removeClass("show-list");
	}
}); 		
$('.boot-style-4  input').focusin(function(){
  $(this).siblings('.border-focus').css({
    'width':'100%'
  });
	$(this).parents('.form-group').addClass('anim-text');
});
$('.boot-style-4  select').mousedown(function(){
    $(this).parents('.form-group').addClass('anim-text');
});
$('.boot-style-4 .full').on('click',function(){
	 $(this).parents('.form-group').addClass('anim-text');
});
$('.boot-style-4 .full').on('focusout',function(){
	 $(this).parents('.form-group').removeClass('anim-text');
});	
$('.boot-style-4 input').on('focusout',function(){	
  var wiz_text = $(this).val();
  $(this).siblings('.border-focus').css({
    'width':'0px'
  });
  $(this).parents('.form-group').removeClass('anim-text');
});	
$('.boot-style-4  textarea').focusin(function(){
$(this).parents('.form-group').addClass('anim-text');
});
$('.boot-style-4  textarea').focusout(function(){
var wiz_text = $(this).val();
  if(!wiz_text.length)
  { $(this).parents('.form-group').removeClass('anim-text'); }
});

$('#prim-fltr').click(function(){s
  $("#sect8_aside").find(".primary-panel").fadeToggle("fast");
});
$('#succ-fltr').click(function(){
$("#sect8_aside").find(".panel").find(".panel-success").fadeToggle("fast");
});
$('#info-fltr').click(function(){
$("#sect8_aside").find(".panel").find(".panel-info").fadeToggle("fast");
});
$(document).keydown(function(e){
        if(e.keyCode == 27) {
            $('body').removeClass('bd-fullscreen');
            $(".panel ").removeClass("fullscreen-active")
        }
});
// start full screen
var check_box=0;
$('.full-screen').click(function(e){
toggleFullScreen();
});
// Top Header
$("#home .btn-default").click(function(){
$("body").removeClass("primary success").addClass("default");
});
$("#home .btn-primary").click(function(){
$("body").removeClass("default success").addClass("primary");
});
$("#home .btn-success").click(function(){
$("body").removeClass("default  primary").addClass("success");
});
// sidebar
$("#profile .btn-default").click(function(){
$(".container-fluid").removeClass("light-sidebar").addClass("default-sidebar");
});
$("#profile .btn-dark").click(function(){
$(".container-fluid").removeClass("default-sidebar light-sidebar");
});
$("#profile .btn-light").click(function(){
$(".container-fluid").removeClass("default-sidebar").addClass("light-sidebar");
});
$(".tg-mn").click(function(e){
e.stopPropagation();
$(this).parents(".toggle-collapse.panel-set").find("ul.list-inline.tools").fadeToggle("fast");
$(this).parents(".toggle-collapse.panel-set").toggleClass("active-set");
});
	
 $(document).on('click',document, function(event){
if($(event.target).parents(".set-color").length || $(event.target).parents(".panel-set").length || $(event.target).parents(".edit-body").length ||  $(event.target).parents(".change-clr").length || $(event.target).parents(".panel").hasClass("colorbox-open")|| $(event.target).parents(".inside-hiding").length || $(event.target).parents(".panel").length || $(event.target).parents(".code-editor").length )return;
	   $(".tg-mn").parents(".panel-set").find("ul.list-inline").fadeOut("fast");
	   $(".tg-mn").parents(".toggle-collapse").removeClass("open-box");
     $(".tg-mn").parents(".toggle-collapse").find(".open-edit .fa").removeClass("fa-floppy-o").addClass("fa-pencil");
	   $(".tg-mn").parents(".toggle-collapse").removeClass("colorbox-open");
     $(".tg-mn").parents(".toggle-collapse").find(".open-colorbox").children(".fa").removeClass("fa-file-text").addClass("fa-diamond");
	 $(".tg-mn").parents(".toggle-collapse").find(".change-clr").slideUp("fast"); 
	 $(".code-editor").find(".default-tab:first").slideUp("fast");
	 $(".tg-mn").parents(".toggle-collapse.panel-set").removeClass("active-set");
  });

$(".bg-white").on('click', function(){
$(this).parent().siblings(".set-color").toggleClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-primary").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").toggleClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-info").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").toggleClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-success").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").toggleClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-warning").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").toggleClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-danger").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").toggleClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-voilet").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").toggleClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-light-success").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").toggleClass("light-success-bg");
$(this).parent().siblings(".set-color").removeClass("dark-bg");
});

$(".bg-dark").on('click', function(){
$(this).parent().siblings(".set-color").removeClass("wyt-bg");
$(this).parent().siblings(".set-color").removeClass("primary-bg");
$(this).parent().siblings(".set-color").removeClass("info-bg");
$(this).parent().siblings(".set-color").removeClass("success-bg");
$(this).parent().siblings(".set-color").removeClass("warning-bg");
$(this).parent().siblings(".set-color").removeClass("danger-bg");
$(this).parent().siblings(".set-color").removeClass("purple-bg");
$(this).parent().siblings(".set-color").removeClass("light-success-bg");
$(this).parent().siblings(".set-color").toggleClass("dark-bg");
});

//end of home page notification
var num=0;
$(".open-edit .fa-pencil").click(function(){
 $(this).parents(".toggle-collapse").toggleClass("open-box");
 $(this).toggleClass('fa-pencil fa-floppy-o');
 if(num==0)
 {
    num=1;
 }
 else{
    num=0;
    var name=$(this).parents(".toggle-collapse").find("input:text").val();
    if(name.length){
        $(this).parents(".toggle-collapse").find(".set-color .panel-title").text(name);
		$(this).parents(".toggle-collapse").find("input:text").val('');
    }
 }
});
	
$(".edit-body input").on('keypress',function(e){
	 var code = e.keyCode || e.which;
	if(code==13){
		num=0;
    var name=$(this).parents(".toggle-collapse").find("input:text").val();
    if(name.length){
        $(this).parents(".toggle-collapse").find(".set-color .panel-title").text(name);
		$(this).parents(".toggle-collapse").find("input:text").val('');
    }
	}
});

$(".open-colorbox").click(function(){
$(this).parents(".toggle-collapse").toggleClass("colorbox-open");
$(this).parents(".toggle-collapse").find(".change-clr").slideToggle("fast");    
$(this).find('i').toggleClass('fa-diamond fa-file-text');
});

$(".open-penal").click(function(){
	 $(this).closest(".toggle-collapse").toggleClass("close-cloapse");	
});

$(".open-fullsrn").click(function(){
	$(this).parents(".toggle-collapse").toggleClass("fullscreen-active");
	$("body").toggleClass("bd-fullscreen");
});

$("a[href='#top']").click(function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
	
});