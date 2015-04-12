//GETTING X PARSING USER RUN DATA

Papa.parse("https://raw.githubusercontent.com/nassEla/physbenchmark_demo/master/Sample_Nike_run_data_1_raw.csv", {

	download: true,
	header: true,
	complete: function(results) {
		//console.log(results);
		//alert("done");
		//alert(results.data["0"]["speed"]);
		
		
		//The data for our line
		 var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
						 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
						 { "x": 80,  "y": 5},  { "x": 200, "y": 60}];
						 

						 
		
		
		var minx = d3.min(results.data, function(d) { return d.utc; });
		minx = results.data["0"]["utc"];
		var maxx = d3.max(results.data, function(d) { return d.utc; });
		
		
		
		for (i = 0; i < results.data.length; i++) {
			results.data[i]["utc"] = results.data[i]["utc"] - minx;
			
		}
		
		minx = results.data["0"]["utc"];
		var maxx = d3.max(results.data, function(d) { return d.utc; });
		
		//alert(minx);
		
		var miny = d3.min(results.data, function(d) { return d.speed; });
		var maxy = d3.max(results.data, function(d) { return d.speed; });
		//alert("miny" + miny);
		
		//PATHMAKER
		var lineFunction = d3.svg.line()
								 //.x(function(d) { return d.x*5; })
								 .x(function(d) { return (d.utc)/2.8; })
								 .y(function(d) { return (d.speed)*50; })
								 .interpolate("basis");
								 
		var graph_x = ( (maxx-minx)/2.8 );
		var graph_y = ( (maxy-miny)*50 );

		//Setting axis Scale
		var xAxisScale = d3.scale.linear()
							.domain([minx,maxx])
							.range([0,graph_x]);
							
		var yAxisScale = d3.scale.linear()
							.domain([miny,maxy])
							.range([graph_y,0]);
		
		//generating the axis
		var xAxis = d3.svg.axis()
						 .scale(xAxisScale)
						 .orient("bottom")
						 .ticks(20);
		
		var yAxis = d3.svg.axis()
						 .scale(yAxisScale)
						 .orient("left")
						 .ticks(10);
		
		
		//The SVG Container
		var svgContainer = d3.select("#curve").append("svg")
											.attr("width", graph_x+20)
											.attr("height", graph_y+50);
		

		//drawing everything

		var spaceFromLeft = graph_x*0.05;
		var spaceFromTop = graph_y*0.05;
		
		var curveGroup = svgContainer.append("g")
									.attr("transform", "translate(" + (spaceFromLeft) +"," + (spaceFromTop) + ")");
									
		var lineGraph = curveGroup.append("path")
									.attr("class","path_curve")
									.attr("d", lineFunction(results.data));
		
		var xAxisGroup = svgContainer.append("g")
									.attr("class","axis")
									.attr("transform", "translate(" + (spaceFromLeft) +"," + ((graph_y-8)+spaceFromTop) + ")")
									.call(xAxis);
									
		var yAxisGroup = svgContainer.append("g")
									.attr("class","axis")
									.attr("transform", "translate(" + (spaceFromLeft - spaceFromLeft*0.1) +"," + (-8+spaceFromTop) + ")")
									.call(yAxis);

	}
});

Papa.parse("https://github.com/nassEla/physbenchmark_demo/blob/master/ideal_data_raw.csv", {

	download: true,
	header: true,
	complete: function(results) {
		//console.log(results);
		//alert("done");
		//alert(results.data["0"]["speed"]);
		
		
		//The data for our line
		 var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
						 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
						 { "x": 80,  "y": 5},  { "x": 200, "y": 60}];
						 

						 
		
		
		var minx = d3.min(results.data, function(d) { return d.utc; });
		minx = results.data["0"]["utc"];
		var maxx = d3.max(results.data, function(d) { return d.utc; });
		
		
		
		for (i = 0; i < results.data.length; i++) {
			results.data[i]["utc"] = results.data[i]["utc"] - minx;
			
		}
		
		minx = results.data["0"]["utc"];
		var maxx = d3.max(results.data, function(d) { return d.utc; });
		
		//alert(minx);
		
		var miny = d3.min(results.data, function(d) { return d.speed; });
		var maxy = d3.max(results.data, function(d) { return d.speed; });
		//alert("miny" + miny);
		
		//PATHMAKER
		var lineFunction = d3.svg.line()
								 //.x(function(d) { return d.x*5; })
								 .x(function(d) { return (d.utc)/2.8; })
								 .y(function(d) { return (d.speed)*50; })
								 .interpolate("basis");
								 
		var graph_x = ( (maxx-minx)/2.8 );
		var graph_y = ( (maxy-miny)*50 );

		//Setting axis Scale
		var xAxisScale = d3.scale.linear()
							.domain([minx,maxx])
							.range([0,graph_x]);
							
		var yAxisScale = d3.scale.linear()
							.domain([miny,maxy])
							.range([graph_y,0]);
		
		//generating the axis
		var xAxis = d3.svg.axis()
						 .scale(xAxisScale)
						 .orient("bottom")
						 .ticks(20);
		
		var yAxis = d3.svg.axis()
						 .scale(yAxisScale)
						 .orient("left")
						 .ticks(10);
		
		
		//The SVG Container
		var svgContainer = d3.select("#curve2").append("svg")
											.attr("width", graph_x+20)
											.attr("height", graph_y+50);
		

		//drawing everything

		var spaceFromLeft = graph_x*0.05;
		var spaceFromTop = graph_y*0.05;
		
		var curveGroup = svgContainer.append("g")
									.attr("transform", "translate(" + (spaceFromLeft) +"," + (spaceFromTop) + ")");
									
		var lineGraph = curveGroup.append("path")
									.attr("class","path_curve2")
									.attr("d", lineFunction(results.data));
									
		var xAxisGroup = svgContainer.append("g")
									.attr("class","axis2")
									.attr("transform", "translate(" + (spaceFromLeft) +"," + ((graph_y-8)+spaceFromTop) + ")")
									.call(xAxis);
									
		var yAxisGroup = svgContainer.append("g")
									.attr("class","axis2")
									.attr("transform", "translate(" + (spaceFromLeft - spaceFromLeft*0.1) +"," + (-8+spaceFromTop) + ")")
									.call(yAxis);
	}
});
