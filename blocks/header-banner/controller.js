var inLoadingPortefolio = false;
var uniqueLoadingPortefolio = false;
$('body').on('click','.button-banner',function() {
	if(!inLoadingPortefolio){
		positionViewer = "portefolio";
		inLoadingPortefolio=true;
		$("#submenu").animate({"opacity":"0"},400,function() {
			$("#submenu").hide();
			$("#paths").empty();
			$("#paths").append("Portefolio");
			$("#logo").animate({"opacity":"0"},1000,function() {
				$("#headerBanner").animate({"height":window.innerHeight+"px"},1000,function() {
					if(!uniqueLoadingPortefolio) {
						$.get("blocks/portefolio/portefolio.php", function( data ) {
							$("#headerBanner").append(data);
							$.getScript("blocks/portefolio/preload.js",function() {
								$(".header-top-middle").hide();
								$.getScript("blocks/portefolio/functions.js",function() {
									$.getScript("blocks/portefolio/view.js");
									uniqueLoadingPortefolio = true;
									inLoadingPortefolio=false;
								});
							});
						});				
					} else {
						$.get("blocks/portefolio/portefolio.php", function( data ) {
							$("#headerBanner").append(data);
							$("#paths").empty();
							$("#paths").append("Portefolio");
							if(!uniqueLoadingPortefolio) {
								$.getScript("blocks/portefolio/preload.js");
								$.getScript("blocks/portefolio/functions.js");
								uniqueLoadingPortefolio = true;
							}
							$.getScript("blocks/portefolio/view.js");
							inLoadingPortefolio=false;
							$(".header-top-middle").hide();
						});
					}
				});
			});
		});
	}
});