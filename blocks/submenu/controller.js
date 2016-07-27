$('body').on('click','#skills',function() {
	positionViewer = "skills";	
	$("#submenu").animate({"opacity":"0"},400,function() {
		$("#submenu").hide();
		$("#paths").empty();
		$("#paths").append("Skills");
		$("#logo").animate({"opacity":"0"},1000,function() {
			$("#logo").hide();
			$("#headerBanner").animate({"height":window.innerHeight+"px"},1000,function() {	
				$.get("blocks/aboutme/aboutme.php", function( data ) {
					$("#header-middle").append(data);
					$("#contentAboutMe").animate({"opacity":"1"},300,function() {
						$.getScript("blocks/aboutme/view.js");
					});
				});
			});
		});
	});
});