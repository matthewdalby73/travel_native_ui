


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


function pointOfInterestDetailSelected(cityindex){
	console.log("pointOfInterestDetailSelected()");
    var cityname = $("#city_" + cityindex).html();

	//TODO: Make ajax call
	pointsOfInterest = $.get('/event?city=' + cityname, function(data){
		data = {"city_name" : cityname,"pointsOfInterest":data.results};

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

	var intinerary = {"dates" : [{"date_format" : "Monday, Feburary 1", "city_name": "Modesto"},{"date_format" : "Tuesday, February 2", "city_name": "Modesto"},{"date_format" : "Wednesday, February 3", "city_name": "Modesto"}]};

    console.log(window.myObj._id )

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


