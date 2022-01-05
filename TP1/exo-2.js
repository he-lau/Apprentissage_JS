
$(document).ready(function()
{
	console.log("Le document est prêt");
	$('img').mousemove(function(event)
		{
			$('#affiche-x').text(event.pageX);
			$('#affiche-y').text(event.pageY);
		});
	console.log("La mise en place est finie. En attente d'événements...");
});

//CORRECTION

/*
console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");
	$('img').mousemove(function(event)
		{
			$('#affiche-x').text(event.pageX);
			$('#affiche-y').text(event.pageY);
		});
	console.log("La mise en place est finie. En attente d'événements...");
});
*/
