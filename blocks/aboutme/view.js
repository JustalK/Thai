$('<link>')
  .appendTo('head')
  .attr({type : 'text/css', rel : 'stylesheet'})
  .attr('href', './blocks/aboutme/aboutme.css');

var name = "Justal Latsuj Kevin";
var slang = "Let me share with you some parts of my past";

var i = 0;
setTimeout("completeName()", 100);
function completeName() {
	$("#name-aboutme").append(name[i++]);
	if(i<name.length) {
		setTimeout("completeName()", 30);
	} else {
		setTimeout("completeSlang()", 30);
	}
}

var j = 0;
function completeSlang() {
	$("#slang-aboutme").append(slang[j++]);
	if(j<slang.length) {
		setTimeout("completeSlang()", 30);
	}
}

$("#home").click(function() {
	if(positionViewer=="aboutme") {
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