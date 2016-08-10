jQuery.noConflict();
jQuery(document).ready(function($) {
var options1 ={
	chart: {
                type: 'areaspline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight:0,
				margin: 0,
				backgroundColor:'rgba(0,0,0,0)',
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            colors: ['#35C1A3'],
            title: {
                text: ''
            },
            xAxis: {
               gridLineColor:'rgba(255,255,255,0)',
                gridLineWidth: 0,
                lineColor:'rgba(255,255,255,0)',
                type: 'datetime',
                tickPixelInterval: 50,
                minorTickLength: 0,
                tickLength: 0,
                 labels: {
                enabled: false
            },
                    },
            yAxis: {
              gridLineColor:'rgba(255,255,255,0)',
                gridLineWidth: 0,
                lineColor: 'rgba(255,255,255,0)',
                title: {
                    text: ''
                },
                labels: {
                enabled: false
            	},
				minPadding: 0,
            	maxPadding: 0,
                plotLines: [{
                    value: 0,
                    width: 0.5,
                    color: 'rgba(0,0,0,0)'
                }]
            },
            credits: {
            enabled: false
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
			 plotOptions: {
                series: {
					 fillOpacity: 0.1,
					marker: {
                    lineWidth: 1,
                    lineColor: null, // inherit from series
					enabled: false,
					fillColor: '#fff',
                    radius: 3,
					radiusPlus: 1,
					 states: {
                        hover: {
                            fillColor: 'white',
                            radius: 3,
							radiusPlus: 1
                        }
                    }	
					}
            }
        },
            series: [{
                name: 'CPU Usage',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
};	
var options2 ={
		chart: {
                type: 'areaspline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight:0,
				margin: 0,
				backgroundColor:'rgba(0,0,0,0)',
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
        colors: ['#55BADF'],
		title: {
                text: ''
            },
        xAxis: {
               gridLineColor:'rgba(255,255,255,0)',
                gridLineWidth: 0,
                lineColor: 'rgba(255,255,255,0)',
                type: 'datetime',
                tickPixelInterval: 50,
                minorTickLength: 0,
                tickLength: 0,
                 labels: {
                enabled: false
            },
                    },
        yAxis: {

              gridLineColor:'rgba(255,255,255,0)',
                gridLineWidth: 0,
                lineColor: 'rgba(255,255,255,0)',

                title: {
                    text: ''
                },
                 labels: {
                enabled: false
            },
                plotLines: [{
                    value: 0,
                    width: 0.5,
                    color: 'rgba(255,255,255,0)'
                }]
            },
        credits: {
            enabled: false
            },
        tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
        legend: {
                enabled: false
            },
        exporting: {
                enabled: false
            },
		plotOptions: {
                series: {
					fillOpacity: 0.1,
					marker: {
                    lineWidth: 1,
                    lineColor: null, // inherit from series
					enabled: false,
					 states: {
                        hover: {
                            fillColor: 'white',
                            radius: 3,
							 radiusPlus: 1
                        }
                    }	
					}
            }
        },
        series: [{
                name: 'RAM Usage',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
	};	
var options3={
			chart: {
                type: 'areaspline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight:0,
				margin: 0,
				backgroundColor:'rgba(0,0,0,0)',
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            colors: ['#EC6F5A'],
            title: {
                text: ''
            },
            xAxis: {
               gridLineColor:'rgba(255,255,255,0)',
                gridLineWidth: 0,
                lineColor: 'rgba(255,255,255,0)',
                type: 'datetime',
                tickPixelInterval: 50,
                minorTickLength: 0,
                tickLength: 0,
                 labels: {
                enabled: false
            },
                    },
            yAxis: {

              gridLineColor:'rgba(255,255,255,0)',
                gridLineWidth: 0,
                lineColor: 'rgba(255,255,255,0)',
                title: {
                    text: ''
                },
                 labels: {
                enabled: false
            },
                plotLines: [{
                    value: 0,
                    width: 0.5,
                    color: 'rgba(255,255,255,0)'
                }]
            },
			credits: {
            enabled: false
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
			 plotOptions: {
                series: {
					fillOpacity: 0.1,
					marker: {
                    lineWidth: 1,
                    lineColor: null, // inherit from series
					enabled: false,
					 states: {
                        hover: {
                            fillColor: 'white',
                            radius: 3,
							 radiusPlus: 1
                        }
                    }	
					}
            }
        },
            series: [{
                name: 'HDD Usage',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
};
$('#cpu_use').highcharts(options1);
$('#scn-cpu-use').highcharts(options1);
$('#scn-ram-use').highcharts(options2);
$('#scn-hdd-use').highcharts(options3);


$('#ram_use').highcharts(options2);
$('#hdd_use').highcharts(options3);
$('#cpu_use1').highcharts(options1);
$('#ram_use1').highcharts(options2);
$('#hdd_use1').highcharts(options3);
$('#cpu_use3').highcharts(options1);

var visit_status_option = {
        chart: {
             type: 'spline',
			backgroundColor:'rgba(0,0,0,0)',
        },
		legend: {
            align: 'left', //place lagend on left
			verticalAlign: 'top', //place lagend on top
			itemStyle: {
               color: '#666666',
			   paddingLeft: '8px',
			   fontWeight: 'normal'
              },
		},
        title: {
            text: '' //no graph title
        },
		credits: {
    		enabled: false //remove heighchat.com label
  		},
        subtitle: {
            text: '' +
                '' //no subtitle title
        },
        xAxis: {
            allowDecimals: false,
			lineColor: '#eee', //line color x-axis	
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: '' //no label title
            },
			"gridLineColor": "rgba(0,0,0,0)", //hide grid line
			 tickPixelInterval: 50,
            labels: {
                formatter: function () {
                    return this.value + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Mobiles',
            data: [400,200,300,200,400,200,300,200,300,200,300,500]
        }, {
            name: 'Tablet',
            data: [300,200,500,200,500,200,200,200,200,200,300,550]
        },{
            name: 'Desktop',
            data: [ 200,150,250,200,500,300,280,600,400,300,210,500]
        }],
		colors: ["#EA7C40", "#A398D5", "#75C6BF"]
    };	
$('#visit_status').highcharts(visit_status_option);	
$('#visit_status_2').highcharts(visit_status_option);	

$(window).load(function() {
			visit_status_option.chart.type = 'column';
			$("#visit_status_3").highcharts(visit_status_option);
		});
$("#upd_chart_line").click(function() {
		
        $("#visit_status_3").highcharts().series[0].update({ type: 'line' });
		 $("#visit_status_3").highcharts().series[1].update({ type: 'line' });
		 $("#visit_status_3").highcharts().series[2].update({ type: 'line' });
		$(this).addClass("active").siblings().removeClass("active");
	});
$("#upd_chart_area").click(function() {
        $("#visit_status_3").highcharts().series[0].update({ type: 'area' });
		 $("#visit_status_3").highcharts().series[1].update({ type: 'area' });
		 $("#visit_status_3").highcharts().series[2].update({ type: 'area' });
		$(this).addClass("active").siblings().removeClass("active");
	});
$("#upd_chart_column").click(function() {
        $("#visit_status_3").highcharts().series[0].update({ type:'bar'});
		 $("#visit_status_3").highcharts().series[1].update({ type:'bar'});
		 $("#visit_status_3").highcharts().series[2].update({ type:'bar'});
		$(this).addClass("active").siblings().removeClass("active");
	});

var inquires_sale_option = {
        chart: {
            type: 'column',
			spacingBottom:5,
			spacingRight:0,
			backgroundColor:'rgba(0,0,0,0)'
        },
		credits: {
    		enabled: false //remove heighchat.com label
  		},
		colors:[ "#4BC076" ],
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'm',
                't',
                'w',
                't',
                'f',
                's',
                's',
                'm',
                't',
                'w',
                't',
                'f',
				's',
                's'
            ],
			labels: { // change label style
                style: {
                    fontSize: '11px',
					color: "rgba(0,0,0,0.6)"
                }
            },
			minorTickLength: 0, // remove x-axis tick
   			tickLength: 0, // reduce x-axis tick
			lineColor: 'transparent', // line-color
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
			labels: {
                enabled: false
            },
			"gridLineColor": "#fff",
			tickPixelInterval: 40, // reduce y pix interval
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px; font-weight:600">{point.key}</span><br/><table>',
            pointFormat: 'Increased Sale by <b>{point.y:,.0f}</b><br/>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
			series: {
            states: {
                hover: {
                    enabled: false
                }
            }
        	},
			 bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [ {
            name: 'London',
			showInLegend: false,
            data: [15,25,28,20,25,28,20,23,21,25,26,21,18,28]

        }]
    };
$(".inquires-sale").highcharts(inquires_sale_option);
	
var inq_spaline_option = {
        chart: {
            type: 'areaspline',
			width: null,
			height: null,
			spacingBottom:0,
        	spacingTop: 0,
        	spacingLeft:0,
			spacingRight:0,
			marginLeft:0,
			marginRight:0,
			paddingLeft:0,
			paddingRight:0
        },
		legend: {
            align: 'left', //place lagend on left
			verticalAlign: 'top' //place lagend on top
		},
        title: {
            text: '' //no graph title
        },
		credits: {
    		enabled: false //remove heighchat.com label
  		},
        subtitle: {
            text: '' +
                '' //no subtitle title
        },
        xAxis: {
            allowDecimals: false,
			tickLength: 0, // reduce x-axis tick
			labels: {
                enabled: false
            },
			 // adjust gap between heighchart and y-axis
        	startOnTick: false,
        	endOnTick: false,min: 0.5, max: 5.5,//no padding betwwn x and y axis
			minPadding: 0,marginLeft:0,
        	maxPadding: 0,
			categories: [
                '14-Dec',
                '15-Dec',
                '16-Dec',
                '17-Dec',
				'18-Dec',
                '19-Dec',
                '20-Dec'
            ],
			lineColor: '', //line color x-axis	
            },
        yAxis: {
            title: {
                text: '' //no label title
            },
			"gridLineColor": "#fff", //hide grid line
			tickPixelInterval: 50,
			labels: {
                enabled: false
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>'
        },
        plotOptions: {
                series: {
					fillOpacity: 0.2,
					marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null, // inherit from series
                	gapSize: 0,
					}
            }
         
        },
        series: [{
            name: 'Sale',
			showInLegend: false,
            data: [40,20,30,10,40,20,30]
        }],
		colors: ["#4BC076"]
    };
	
$(".inq-spaline").highcharts(inq_spaline_option);	
//sales ststistic	
var options_sale1 = {
 credits: false,
                            colors: ["#55BADF"],
                            chart: {
                                backgroundColor: 'transparent',
                                type:'column',
                				marginLeft:0,

                            },
                            legend: {
                                enabled: false
                            },
                            title: {
                                text: null,
                            },
                            xAxis: {
                                lineWidth:0,
                                tickLength:0,
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false
                                }
                            },
                            yAxis: {
                                max: 20,
                                lineWidth:0,
                                gridLineWidth:0,
                                lineColor: '#EEE',
                                gridLineColor: '#EEE',
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false,
                                    style: {
                                        fontWeight: '400'
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>' +
                                    '<td style="padding:0;font-size:10px"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat:'</table>',
                                shared: false,
                borderRadius: 0,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    colorByPoint: true,
                                }
                            },
                            series: [

              {
                                name: 'March',
                                 data: [5],
                lineWidth: 1
                            },
              {
                                name: 'Apr',
                                 data: [25],
                lineWidth: 1
                            },
              {
                                name: 'May',
                                 data: [17],
                lineWidth: 1
                            },
              {
                                name: 'Jun',
                                 data: [22],
                lineWidth: 1
                            },
              {
                                name: 'July',
                                 data: [15],
                lineWidth: 1
                            },
              {
                                name: 'Aug',
                                 data: [20],
                lineWidth: 1
                            },
              {
                                name: 'Sept',
                                 data: [12],
                lineWidth: 1
                            }
              ]

};
	
 var options_sale2 = {
credits: false,
                            colors: ["#4A89DC"],
                            chart: {
                                backgroundColor: 'transparent',
                                type:'column',
                				marginLeft:0

                            },
                            legend: {
                                enabled: false
                            },
                            title: {
                                text: null,
                            },
                            xAxis: {
                                lineWidth:0,
                                tickLength:0,
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false
                                }
                            },
                            yAxis: {
                                max: 20,
                                lineWidth:0,
                                gridLineWidth:0,
                                lineColor: '#EEE',
                                gridLineColor: '#EEE',
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false,
                                    style: {
                                        fontWeight: '400'
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>' +
                                    '<td style="padding:0;font-size:10px"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat:'</table>',
                                shared: false,
                borderRadius: 0,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    colorByPoint: true,
                                }
                            },
                            series: [

              {
                                name: 'March',
                                 data: [5],
                lineWidth: 1
                            },
              {
                                name: 'Apr',
                                 data: [25],
                lineWidth: 1
                            },
              {
                                name: 'May',
                                 data: [17],
                lineWidth: 1
                            },
              {
                                name: 'Jun',
                                 data: [22],
                lineWidth: 1
                            },
              {
                                name: 'July',
                                 data: [15],
                lineWidth: 1
                            },
              {
                                name: 'Aug',
                                 data: [20],
                lineWidth: 1
                            },
              {
                                name: 'Sept',
                                 data: [12],
                lineWidth: 1
                            }
              ]

};
 var options_sale3 = {
    credits: false,
                            colors: ["#F7C65F"],
                            chart: {
                                backgroundColor: 'transparent',
                                type:'column',
                				marginLeft:0,
                            },
                            legend: {
                                enabled: false
                            },
                            title: {
                                text: null,
                            },
                            xAxis: {
                                lineWidth:0,
                                tickLength:0,
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false
                                }
                            },
                            yAxis: {
                                max: 20,
                                lineWidth:0,
                                gridLineWidth:0,
                                lineColor: '#EEE',
                                gridLineColor: '#EEE',
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false,
                                    style: {
                                        fontWeight: '400'
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>' +
                                '<td style="padding:0;font-size:10px"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat:'</table>',
                                shared: false,
                				borderRadius: 0,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    colorByPoint: true,
                                }
                            },
                            series: [

              				{
                                name: 'March',
                                data: [5],
                				lineWidth: 1
                            },
              				{
                                name: 'Apr',
                                data: [25],
                				lineWidth: 1
                            },
							{
                                name: 'May',
                                 data: [17],
                				lineWidth: 1
                            },
              				{
                                name: 'Jun',
                                data: [22],
                				lineWidth: 1
                            },
              				{
                                name: 'July',
                                 data: [15],
                				lineWidth: 1
                            },
              {
                                name: 'Aug',
                                 data: [20],
                lineWidth: 1
                            },
              {
                                name: 'Sept',
                                 data: [12],
                lineWidth: 1
                            }
              ]

};
 var options_sale4 = {
    credits: false,
           colors: ["#46AF4A"],
           chart: {
                                backgroundColor: 'transparent',
                                type:'column',
                marginLeft:0,
                            },
                            legend: {
                                enabled: false
                            },
                            title: {
                                text: null,
                            },
                            xAxis: {
                                lineWidth:0,
                                tickLength:0,
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false
                                }
                            },
                            yAxis: {
                                max: 20,
                                lineWidth:0,
                                gridLineWidth:0,
                                lineColor: '#EEE',
                                gridLineColor: '#EEE',
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false,
                                    style: {
                                        fontWeight: '400'
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>' +
                                '<td style="padding:0;font-size:10px"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat:'</table>',
                                shared: false,
                borderRadius: 0,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    colorByPoint: true,
                                }
                            },
                            series: [

              {
                                name: 'March',
                                 data: [5],
                lineWidth: 1
                            },
              {
                                name: 'Apr',
                                 data: [25],
                lineWidth: 1
                            },
              {
                                name: 'May',
                                 data: [17],
                lineWidth: 1
                            },
              {
                                name: 'Jun',
                                 data: [22],
                lineWidth: 1
                            },
              {
                                name: 'July',
                                 data: [15],
                lineWidth: 1
                            },
              {
                                name: 'Aug',
                                 data: [20],
                lineWidth: 1
                            },
              {
                                name: 'Sept',
                                 data: [12],
                lineWidth: 1
                            }
              ]
};

$('#pg-high-column-hr').highcharts(options_sale3);
$('#pg-high-column2-hr').highcharts(options_sale1);
$('#pg-high-column2-hr2').highcharts(options_sale1);
$('#pg-high-column2').highcharts(options_sale1);
$('#pg-high-column3').highcharts(options_sale2);
$('#pg-high-column4').highcharts(options_sale3);
$('#pg-high-column5').highcharts(options_sale4);
$('#pg-high-column3-hr').highcharts(options_sale2);
$('#pg-high-column4-hr').highcharts(options_sale3);
$('#pg-high-column5-hr').highcharts(options_sale4);
$('#pg-high-column3-hr2').highcharts(options_sale2);
$('#pg-high-column4-hr2').highcharts(options_sale3);
$('#pg-high-column5-hr2').highcharts(options_sale4);

});
