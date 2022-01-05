
$('body').append($('img'));




console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est pret");
	var joueur="X";

	$('#morpion td').mousedown(function()
		{
			console.log("Le bouton de la souris a été enfoncé.");
			if($(this).text()!==''){return;}
			$(this).text(joueur);
			joueur=(joueur==="X" ? 'O' : 'X');


      // Conditionnel ( ? : ) --> if(X)resultat = A else resultat = B
		});

	console.log("La mise en place est finie. En attente d'événements...");
});

/*
$(document).ready(function()
{
  var joueur = "X";


	$('#morpion td').mousedown(function()
		{
      if ($(this).text() === 'X' || $(this).text() === 'O') {
        console.log('contient déjà une croix/ cercle');
      }

      if (joueur === "X" && $(this).text() === '' ) {
        $(this).text("X");
        joueur = "O"
      }

      if (joueur === "O" && $(this).text() === '' ) {
        $(this).text("O");
        joueur = "X"
      }

		});
});

/*
$(document).ready(function()
{
	$('.case').mousedown(function(event)
		{
			console.log("Le bouton de la souris a été enfoncé.");
      console.log(this);
      $(this).addClass('case-croix');


		});

});
*/
