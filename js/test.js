var positionViewer = "menu";

initialization();
function initialization() {
	$.when($.get({url:"blocks/header-menu/headerMenu.php",datatype:"text"}),
			$.get("blocks/header-banner/headerBanner.php",{datatype:"html"}),
		   	$.get("blocks/header-paths/headerPaths.php",{datatype:"html"}),
		   	$.get("blocks/submenu/submenu.php",{datatype:"html"}))
	.then(function(res1,res2,res3,res4) {
			$("#headerMenu").append(res1[0]);
			$("#headerBanner").append(res2[0]);
 	 		$("#headerPaths").append(res3[0]);	
 	 		$("#submenu").append(res4[0]);	
 	 		$(document).ready(function() {
	 				$.getScript("blocks/header-menu/controller.js");
	 				$.getScript("blocks/header-banner/controller.js");
	 				$.getScript("blocks/header-paths/controller.js");
	 				$.getScript("blocks/submenu/controller.js");
	 				
	 				$("#mini-logo-home").click(function() {
	 					$("#headerBanner").animate({"opacity":"0"},600);
	 					$("#headerPaths").animate({"opacity":"0"},600);
	 					$("#submenu").animate({"opacity":"0"},600,function() {
	 							$("body > div > div").not( "#header-menu" ).remove();
	 							$("#headerBanner").attr("style", "opacity:0;");
	 							$("#headerPaths").attr("style", "opacity:0;");
	 							$("#submenu").attr("style", "opacity:0;");
								$("#headerBanner").append(res2[0]);
					 	 		$("#headerPaths").append(res3[0]);	
					 	 		$("#submenu").append(res4[0]);
					 	 		$("#headerBanner").animate({"opacity":"1"},600);
			 					$("#headerPaths").animate({"opacity":"1"},600);
			 					$("#submenu").animate({"opacity":"1"},600);
	 					});
	 				});
 	 		});
	});
}