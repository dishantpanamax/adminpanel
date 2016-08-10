jQuery.noConflict();
jQuery(document).ready(function($) {
	//sidebar-right counter(UP Time)	
var fiveSeconds = new Date().getTime() + 5000;
$('.clock-screen').countdown(fiveSeconds, {elapse: true})

.on('update.countdown', function(event) {
$(this).html(event.strftime('<span><span class="hour">%H</span><span class="colen">:</span><span class="min">%M</span><span class="colen">:</span><span class="sec">%S</span></span>'));
});

$('.a-c-time').countdown(fiveSeconds, {elapse: true})
.on('update.countdown', function(event) {
$(this).html(event.strftime('<span>%M</span>:<span>%S</span>'));
});
	
});