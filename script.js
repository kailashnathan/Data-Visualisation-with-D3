var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Messi','Ronaldo'];

//Data
var d = [
		  [
			{axis:"Overall Rating",value:0.94},
			{axis:"Crossing",value:0.80},
			{axis:"Finishing",value:0.93},
			{axis:"Heading Accuracy",value:0.71},
			{axis:"Short Passing",value:0.88},
			{axis:"Estimated Point Average",value:0.69},
			{axis:"Dribbling",value:0.96},
			{axis:"Free Kicks",value:0.90},
			{axis:"Long Pass",value:0.79},
			{axis:"Ball Control",value:0.96},
			{axis:"Acceleration",value:0.95},
			{axis:"Spring Speed",value:0.90},
			{axis:"Goals/Game",value:0.96},
			{axis:"Balance",value:0.95},
			{axis:"Shot power",value:0.80},
			{axis:"Stamina",value:0.75},
			{axis:"Strength",value:0.59},
			{axis:"Long shots",value:0.88},
			{axis:"Positioning",value:0.90},
			{axis:"Vision",value:0.90},
			{axis:"Penalties",value:0.74},
			{axis:"Aggression",value:0.48}
		  ],[
			{axis:"Overall Rating",value:0.93},
			{axis:"Crossing",value:0.82},
			{axis:"Finishing",value:0.95},
			{axis:"Heading Accuracy",value:0.86},
			{axis:"Short Passing",value:0.81},
			{axis:"Estimated Point Average",value:0.40},
			{axis:"Dribbling",value:0.93},
			{axis:"Free Kicks",value:0.87},
			{axis:"Long Pass",value:0.72},
			{axis:"Ball Control",value:0.91},
			{axis:"Acceleration",value:0.91},
			{axis:"Spring Speed",value:0.93},
			{axis:"Goals/Game",value:0.97},
			{axis:"Balance",value:0.61},
			{axis:"Shot power",value:0.94},
			{axis:"Stamina",value:0.90},
			{axis:"Strength",value:0.89},
			{axis:"Long shots",value:0.88},
			{axis:"Positioning",value:0.90},
			{axis:"Vision",value:0.90},
			{axis:"Penalties",value:0.74},
			{axis:"Aggression",value:0.78}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)
	.text("asdasdsa")

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Legend");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	
