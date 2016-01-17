function generateHotelList(cityname){
	console.log("City name=>"+ cityname);
	$.ajax({
	     url: '/hotel?city='+cityname,
	     	type: "GET"
	     }).done(function (data) {
			var htmlText = " <ul class=\"list-group\"><li href=\"#\" class=\"list-group-item active\">Hotels in "+ cityname + "</li>";
			for (var result in data.results) {
				htmlText = htmlText + 
					"<li class=\"list-group-item \">"
						+" <span class=\"badge\">" + data.results[result].rating + "*</span>"
						+  data.results[result].name + 
					"</li>";			;
			}
			htmlText = htmlText + "</ul>";
		    console.log("htmlText " + htmlText);

			$("#planner-detail-panel").html(htmlText);  
	});
}