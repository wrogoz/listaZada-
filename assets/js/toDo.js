// skreślenie zadania po kliknięciu
$("ul").on("click","li", function(){  
	$(this).toggleClass("completed");
});

// usuniecie zadania po kliknieciu x
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

// dodanie zadania po wpisaniu tekstu

$("input[type='text']").keypress(function(event){
	if(event.which===13){   // cyfra oznaczająca enter
	
		var toDoText=$(this).val();	// pobiera wartosc z input
		$(this).val("");		//wyczyszczenie inputa
				// utworzenie nowego li	
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+ "</li>")	;		
				
	}
});


$(".fa-plus").click(function(){

	$("input[type='text']").fadeToggle();
});