$(document).ready(function(){
//setting the heights and widths of the dom elements
	var height = $(window).height();
	height -= 200;
        var group1Width = $("#group1").attr("data-apps");
        var group2Width = $("#group2").attr("data-apps");
        var group3Width = $("#group3").attr("data-apps");
        var group4Width = $("#group4").attr("data-apps");
        if (height <= 255) {
        } else if (height <= 383 && height >= 256) {
        } else if (height <= 511 && height >= 384) {
			group1Width = Math.ceil(group1Width/2);
			group2Width = Math.ceil(group2Width/2);
			group3Width = Math.ceil(group3Width/2);
			group4Width = Math.ceil(group4Width/2);
        } else if (height >= 512) {
			group1Width = Math.ceil(group1Width/3);
			group2Width = Math.ceil(group2Width/3);
			group3Width = Math.ceil(group3Width/3);
			group4Width = Math.ceil(group4Width/3);
        } else {
			alert("An unknown error has been encountered!");
        };
	group1Width = group1Width*(120)+(group1Width*8)+44;
	group2Width = group2Width*(120)+(group2Width*8)+44;
	group3Width = group3Width*(120)+(group3Width*8)+44;
	group4Width = group4Width*(120)+(group4Width*8)+44;
	var appsWidth = group1Width + group2Width + group3Width + group4Width + 40;
	$("#apps").css("height", height + "px")
			  .css("width", appsWidth + "px");
	$("#group1").css("float", "left")
				.css("height", height + "px")
				.css("width", group1Width + "px");
	$("#group2").css("float", "left")
				.css("height", height + "px")
				.css("width", group2Width + "px");
	$("#group3").css("float", "left")
				.css("height", height + "px")
				.css("width", group3Width + "px");
	$("#group4").css("float", "left")
				.css("height", height + "px")
				.css("width", group4Width + "px");
//script for apps
	$("img").bind({
		mouseenter: function() {
			$(this).toggleClass("hover");
		},
		mouseleave: function() {
			$(this).toggleClass("hover");
			$(".clicked").animate({
				marginTop: "-=4",
				marginLeft: "-=4",
				height: "+=4",
				width: "+=4"
			}, 100);
			$(".clicked").toggleClass("clicked");
		},
		mousedown: function() {
			$(this).toggleClass("clicked");
			$(this).animate({
				marginTop: "+=4",
				marginLeft: "+=4",
				height: "-=4",
				width: "-=4",
			}, 100);
		},
		mouseup: function() {
			$(this).toggleClass("clicked");
			$(this).animate({
				marginTop: "-=4",
				marginLeft: "-=4",
				height: "+=4",
				width: "+=4"
			}, 100);
		},
		mousemove: function() {
			$(".clicked").animate({
				marginTop: "-=4",
				marginLeft: "-=4",
				height: "+=4",
				width: "+=4"
			}, 100);
			$(".clicked").toggleClass("clicked");
		}
	});
});
function changecss() {
	$("img").css({ "marginTop": "0", "marginLeft": "0", "height": "", "width": "" });
}
$(function() {
    $("#aboutme_1").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_1_opener" ).click(function() {
      $("#aboutme_1").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_2").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_2_opener" ).click(function() {
      $("#aboutme_2").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_3").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_3_opener" ).click(function() {
      $("#aboutme_3").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_4").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_4_opener" ).click(function() {
      $("#aboutme_4").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_5").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_5_opener" ).click(function() {
      $("#aboutme_5").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_6").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_6_opener" ).click(function() {
      $("#aboutme_6").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_7").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_7_opener" ).click(function() {
      $("#aboutme_7").dialog("open");
	  changecss();
    });
});$(function() {
    $("#aboutme_8").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#aboutme_8_opener" ).click(function() {
      $("#aboutme_8").dialog("open");
	  changecss();
    });
});$(function() {
    $("#calendar_1").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#calendar_1_opener" ).click(function() {
      $("#calendar_1").dialog("open");
	  changecss();
    });
});$(function() {
    $("#calendar_2").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#calendar_2_opener" ).click(function() {
      $("#calendar_2").dialog("open");
	  changecss();
    });
});$(function() {
    $("#calendar_3").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#calendar_3_opener" ).click(function() {
      $("#calendar_3").dialog("open");
	  changecss();
    });
});$(function() {
    $("#notes_1").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#notes_1_opener" ).click(function() {
      $("#notes_1").dialog("open");
	  changecss();
    });
});$(function() {
    $("#notes_2").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#notes_2_opener" ).click(function() {
      $("#notes_2").dialog("open");
	  changecss();
    });
});$(function() {
    $("#notes_3").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#notes_3_opener" ).click(function() {
      $("#notes_3").dialog("open");
	  changecss();
    });
});$(function() {
    $("#time_1").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#time_1_opener" ).click(function() {
      $("#time_1").dialog("open");
	  changecss();
    });
});$(function() {
    $("#time_2").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#time_2_opener" ).click(function() {
      $("#time_2").dialog("open");
	  changecss();
    });
});$(function() {
    $("#time_3").dialog({autoOpen: false,show: {effect: "fade",duration: 1000},hide: {effect: "drop",duration: 1000}});
    $("#time_3_opener" ).click(function() {
      $("#time_3").dialog("open");
	  changecss();
    });
});