// skreślenie zadania po kliknięciu
$("li").click(function(){
	$(this).toggleClass("completed");
});

// usuniecie zadania po kliknieciu x
$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});