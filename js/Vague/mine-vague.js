jQuery.noConflict();
jQuery(document).ready(function($) {
var vague = $("#content").Vague({intensity:7});
$(document).idle({
  		onIdle: function(){
    		$('body').addClass("scn-lock-overflow");
			vague.blur(); 
			
  		}, 	
 	    idle: 600000
	});
});