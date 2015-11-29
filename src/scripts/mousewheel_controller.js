$(document).ready(function(){
	var scroll = 0;
   $("body").mousewheel(function(event, delta) {
    scroll += (delta * 120);
    event.preventDefault();
   });
   updateScroll = function(){
    $("body").scrollLeft($("body").scrollLeft() - Math.round(scroll * 0.1));
    scroll = scroll * 0.9;
   }
   setInterval(updateScroll, 15);
});