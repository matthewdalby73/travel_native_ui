


console.log("intinerary.js loaded");

function hotelDetailSelected(){
	console.log("hotelDetailSelected()");

	/*
	$.get('/html/partials/hotels_selection.html', function (data) {
	    var template=Handlebars.compile(data);
	    $("#planner-detail-panel".html(template(jsonData));
	}, 'html')
	*/

	// This would be data from a JSON call to the server, for now we hard code.
	hotelData = { "hotels" : [ {"name":"hotel 1"},{"name":"hotel 2"}]};

	//This is an a
	 	loadHotelSelectionPanel(hotelData);

}

function loadHotelSelectionPanel(hotelData){
	$.ajax({
                url: '/html/partials/hotels_selection.html',
                cache: false,
                success: function (data) {
                    source = data;
                    template = Handlebars.compile(source);
                    $('#planner-detail-panel').html(template(hotelData));
                    console.dir($('#planner-detail-panel'));

                }
            });   
}

function restaurantDetailSelected(){
	console.log("restaurantDetailSelected()");
}

function pointOfInterestDetailSelected(){
	console.log("pointOfInterestDetailSelected()");
}  

function getRestaurants(city) {
	$.get(url: "http://localhost:3000/restaurant?city=" + city, dataType: "application/json", success: displayRestaurants(data))
};

function displayRetaurants(data){
	var out = "<ul>";

	for(var i=0, l=data.results.length; i<l; i++) {
		out = out + "<li>" + data.results[i].name + "</li>";
	}

	$("#restaurants_div").html( out + "</ul>");
}
