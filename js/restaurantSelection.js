function restaurantDetailSelected(){

	// data = {"restaurants" : [{"name":"restaurant 1"},{"name":"restaurant 2"}]};
	console.log("sdsa");
	$.get("http://localhost:3000/restaurant?city=modesto.json", function(data){
		// console.log(data)
		restaurants = []
		for (var i = data.results.length - 1; i >= 0; i--) {
			restaurants.push({"name": data.results[i].name})
		};
		console.log(restaurants)
		data = {"restaurants" : restaurants}
		loadRestaurantData(data)
	})

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