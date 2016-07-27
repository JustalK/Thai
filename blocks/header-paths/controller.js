$('body').on('click','#home',function() {
	if(positionViewer=="skills") {
		positionViewer = "menu";
		$("#contentAboutMe").animate({"opacity":"0"},500,function() {
			animation = false;
			$("#contentAboutMe").remove();
			$("#headerBanner").animate({"height":"0px"},1000,function() {
				$("#paths").empty();
				$("#paths").append("Menu");
				$("#submenu").show();
				$("#submenu").animate({"opacity":"1"},400);
				$("#logo").show();
				$("#logo").animate({"opacity":"1"},300);
			});
		});
	}
});

$("#home").click(function() {
	if(positionViewer=="portefolio") {
		positionViewer = "menu";
		$("canvas").animate({"opacity":"0"},500,function() {
			animation = false;
			$("canvas").remove();
			$("#headerBanner").animate({"height":"0px"},1000,function() {
				$("#paths").empty();
				$("#paths").append("Menu");
				$("#submenu").show();
				$("#menu-bottom").remove();
				$(".header-top-middle").show();
				$("#logo").animate({"opacity":"1"},300);
				$("#submenu").animate({"opacity":"1"},400)
			});
		});
	}
});