$("#aboutme").click(function() {
	positionViewer = "aboutme";
	
	$("#submenu").animate({"opacity":"0"},400,function() {
		$("#submenu").hide();
		//$("#parallax").animate({"top":-$("#parallax").height()+"px"},400);
		//$("#document").animate({"top":-$("#parallax").height()+"px"},400);
		$("#paths").empty();
		$("#paths").append("About Me");
		$("#logo").animate({"opacity":"0"},1000,function() {
			$("#logo").hide();
			$("#headerBanner").animate({"height":window.innerHeight+"px"},1000,function() {	
				$.get("blocks/aboutme/aboutme.php", function( data ) {
					$("#header-middle").append(data);
					$("#contentAboutMe").animate({"opacity":"1"},300);
				});
			});
		});
		/**
		$.get("blocks/aboutme/aboutme.php", function( data ) {
			$("#document").append(data);
		});
		**/
	});
});