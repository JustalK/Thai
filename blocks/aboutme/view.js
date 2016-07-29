var name = "Justal Latsuj Kevin ";
var slang = "Below, you can find my level in the differents technologies ";
var slangIcon = "Move your mouse on the icon...";
$("#description-logo").html(slangIcon);

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

$( ".rank-aboutme-level" ).each(function() {
	  $(this).animate({"width":$(this).data("level")+"%"},1000);
});

$( ".img-logo" ).mouseover(function() {
	$("#description-logo").html($(this).data("slang"));
});

$( ".img-logo" ).mouseout(function() {
	$("#description-logo").html(slangIcon);
});
