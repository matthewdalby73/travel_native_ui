

console.log("intinerary.js loaded");

function hotelDetailSelected(){
	console.log("hotelDetailSelected()");

	/*
	$.get('/html/partials/hotels_selection.html', function (data) {
	    var template=Handlebars.compile(data);
	    $("#planner-detail-panel".html(template(jsonData));
	}, 'html')
	*/

	hotelData = {};

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

