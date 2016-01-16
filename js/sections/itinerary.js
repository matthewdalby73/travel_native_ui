


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


function pointOfInterestDetailSelected(){
	console.log("pointOfInterestDetailSelected()");

	//TODO: Make ajax call
	pointsOfInterest = $.get('/event?city=MODESTO', function(data){
		data = {"pointsOfInterest":data.results};

		loadPointOfInterestData(data);
	
	})
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

loadItinerary();

function loadItinerary(){

	var intinerary = {"dates" : [{"date_format" : "Monday, Feburary 1"},{"date_format" : "Tuesday, February 2"},{"date_format" : "Wednesday, February 3"}]};

	$.ajax({
                url: '/html/partials/itinerary-detail.html',
                cache: false,
                success: function (data) {
                    source = data;
                    template = Handlebars.compile(source);
                    $('#itinerary-list-panel').html(template(intinerary));

                }
            });  

}


