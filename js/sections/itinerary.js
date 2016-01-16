

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


                }
            });   
}

function restaurantDetailSelected(){
	console.log("restaurantDetailSelected()");


	//TODO: Make ajax call
		data = {"restaurants" : [{"name":"restaurant 1"},{"name":"restaurant 2"}]};
		console.log("sdsa");

	loadRestaurantData(data);
}

function loadRestaurantData(restaurantData){
	$.ajax({
                url: '/html/partials/restaurants_selection.html',
                cache: false,
                success: function (data) {
                		console.log("121212121212");
                		console.log(data);
                    source = data;
                    template = Handlebars.compile(source);
                    $('#planner-detail-panel').html(template(restaurantData));

                }
            });  
}

function pointOfInterestDetailSelected(){
	console.log("pointOfInterestDetailSelected()");

	//TODO: Make ajax call
		pointsOfInterest = [{"name":"attraction1"},{"name":"attraction2"}];
		data = {"pointsOfInterest":pointsOfInterest};

	loadPointOfInterestData(data);
}  

function loadPointOfInterestData(poiData){
	$.ajax({
                url: '/html/partials/poi_selection.html',
                cache: false,
                success: function (data) {
                    source = data;
                    template = Handlebars.compile(source);
                    $('#planner-detail-panel').html(template(poiData));

                }
            });  
}

