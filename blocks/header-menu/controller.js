
$("addr").click(function() {
	$("#logo").animate({opacity: "0"},600,function() {
		$("#logo").css("background","#030303 url('imgs/logo.png') no-repeat scroll center top");
		$("#logo").animate({opacity: "1"},600);
	});
});