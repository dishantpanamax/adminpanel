jQuery.noConflict();
jQuery(document).ready(function($) {
	
	var myvalues = [24,19,26,28,22,19,10,13,10,15,22,26,16,22,20,27,32,31,29,22,19,8,2,5,6,14,6,10,13,8,19,21,26,29,24];

	  $('.widget-tile-chart').sparkline(myvalues, {
            type: 'line',
            width: '100%',
            height: 32,
            fillColor: '#80CBE7',
            lineWidth: 0,
            lineColor: '#80CBE7',
            chartRangeMin: 0,
            disableInteraction: true,
            spotRadius: 0
      });

	$(".sparkline-item").sparkline([5,3,9,6,5,9,7,3,5,2,5,7,5,2,5,3,9,6,5,9,7,3,5,2,5,7,5,2,9,7,3,5,2,5,7], {
            type: 'bar',
            barSpacing: 4,
            barWidth: 2,
            height: 32,
			width:'100%',
            barColor: '#e1e1e1',
            disableInteraction: true,
            spotRadius: 0
        });

  var myvalues = [24,19,26,28,22,19,10,13,10,15,22,26,16,22,20,27,32,31,29,22,19,8,2,5,6,14,6,10,13,8,19,21,26,29,24];
           $('.wt-chart-menu').sparkline(myvalues, {
            type: 'line',
            width: '90%',
            fillColor: '#80CBE7',
            lineWidth: 0,
            lineColor: '#80CBE7',
            chartRangeMin: 0,
            disableInteraction: false,
            spotRadius: 0
      });

  $(".wt-bar-menu")
	  .sparkline([24,19,26,28,22,19,10,13,10,15,22,26,16,22,20,27,32,31,29,22,19,8,2,5,6,14,6,10,13,8,19,21,26,29,24,31,29,22,19], {
            type: 'bar',
            barSpacing: 4,
            barWidth: 2,
			width:'90%',
            barColor: '#4BC076',
            disableInteraction: false
        });
});