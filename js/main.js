
$("#beginProcessButton").click(
	function(){

		destination = $("#destination").val();
		duration = $("#duration").val();

		console.log("Beggining process: destination=>"+ destination +", duration=>"+ duration);

		var request = { destination: destination };

		console.dir(request);


//

	$.ajax({
	     url: '/trip',
	     	type: "POST",
	     	data: request,
	     	dataType: "json",
	     	contentType: "application/json"
	     })
	     .done(function (data) {
	     	console.log("Response " + JSON.stringify(data));

			$("body").fadeOut(1000, redirectPage);  

			function redirectPage() {
		        window.location = '/html/master_layout.html';
		    }

	     });
//


	}
);
