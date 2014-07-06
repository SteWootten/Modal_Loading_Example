$(document).ready(function(){

	setTimeout(function() {
		$(modalBackground()).appendTo(document.body);
		$(modalContent()).appendTo(document.body);

		$("#modal-content,#modal-background").toggleClass("active");
	}, 2000);

})

function modalBackground() {
	return "<div id=\"modal-background\"></div>";
}

function modalContent() {
	return "<div id=\"modal-content\"><img src=\"ajax-loader.gif\"></div>";
}