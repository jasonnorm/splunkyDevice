function loadJSON(dataSource)  {

	var http_request = new XMLHttpRequest();
	try {
		// Opera 8.0+, Firefox, Chrome, Safari
		http_request = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e) {
			try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
			   
	http_request.onreadystatechange  = function() {
		if (http_request.readyState != 4  )
			return;
		// Javascript function JSON.parse to parse JSON data
		jsonObj = JSON.parse(http_request.responseText);
 	}
 	http_request.open("GET", dataSource, false);
 	http_request.send();
 	return jsonObj;
} 

