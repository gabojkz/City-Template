var radarChartData = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Swimming", "Running"],//skills
		datasets: [
			{
				label: "My First dataset",//name of the first chart 
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56,55,40]//points of skills
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(231, 76, 60,0.5)",
				strokeColor: "rgba(231, 76, 60,0.5)",
				pointColor: "rgba(231, 76, 60,1.0)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [78,48,50,60,66,77,55]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			responsive: true
		});
	}
