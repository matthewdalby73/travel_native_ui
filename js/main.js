
$("#beginProcessButton").click(
	function(){

		destination = $("#destination").val();
		duration = $("#duration").val();

		console.log("Beggining process: destination=>"+ destination +", duration=>"+ duration);

		var request = { destination: destination };

		console.dir(request);


//

	$.ajax({
	     url: '/services/new',
	     	type: "POST",
	     	data: request,
	     	dataType: "json",
	     	contentType: "application/json"
	     })
	     .done(function (data) {
	     	console.log("Response " + JSON.stringify(data));
	     	
	     });
//


	}
);