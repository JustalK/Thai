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

function changeBanner($id) {
	if($id=="skills") {
		$("#logo").clearQueue();
		$("#logo").stop();
		$("#logo").css("opacity",0);
		$("#logo").css('background','#030303 url("../imgs/logo_skills.png") no-repeat scroll center top  / cover');
		$("#title h1").css("color","#FFFFFF");
		$("#title h1").html("Push yourself always further !");
		$("#logo").animate({"opacity":"1"},500);
	} else
	if($id=="github") {
		$("#logo").clearQueue();
		$("#logo").stop();
		$("#logo").css("opacity",0);
		$("#logo").css('background','#030303 url("../imgs/logo_github.png") no-repeat scroll center top  / cover');
		$("#title h1").css("color","#000000");
		$("#title h1").html("Want to see my code ?");
		$("#logo").animate({"opacity":"1"},500);
	} else
	if($id=="articles") {
		$("#logo").clearQueue();
		$("#logo").stop();
		$("#logo").css("opacity",0);
		$("#logo").css('background','#030303 url("../imgs/logo_articles.png") no-repeat scroll center top  / cover');
		$("#title h1").css("color","#000000");
		$("#title h1").html("Some articles about coding");
		$("#logo").animate({"opacity":"1"},500);
	}
}


