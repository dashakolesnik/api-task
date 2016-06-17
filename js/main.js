function imgbg (e) {
	var street = $('#street').val();
	var city = $('#city').val();
	var src = "https://maps.googleapis.com/maps/api/streetview?size=640x640&location=<" + street + ">,<" + city + ">";
	var img = $("<img/>", {
    	class: 'bgimg',
    	src: src
		});
	$('body').append(img);

	var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + city + "&sort=newest&api-key=42ecfd3c08e3afa3fdc05929fa024094:7:72309226";
	$.getJSON( url, 
		function (data)  { 
			$('ul').empty();
			var test = data.response.docs;
			var ul = $('ul');
			$(test).each(
				function(i){
					var head = data.response.docs[i].headline.main;
					var href = data.response.docs[i].web_url;
				    var snippet = data.response.docs[i].snippet;
					var li = $("<li></li>");
					var a = $("<a/>", {
				    	html: head,
				    	"class": "new",
				    	href: href
						});
					var p = $("<p/>", {
				    	html: snippet
						});
					ul.append(li);
					$('li:last-child').append(a);
					$('li:last-child').append(p);
				})
		});
}

$('#submit-btn').on('click', imgbg);

function t(){
	return false;
}
$('.form').on('submit', t);
