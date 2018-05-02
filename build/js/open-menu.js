$(".menu-toggler, .buttons-toggler").click(toggleTarget);

function toggleTarget(e){
	if($(e.target).next().css("display")==="none"){
		$(e.target).next().fadeIn(200);
	}
	else{
		$(e.target).next().fadeOut(200);
	}
};