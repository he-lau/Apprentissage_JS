$(document).ready(function() {

	trier();

	$('#ajout-bouton').click(function() {
			var joueur = {
				nom:$('#ajout-nom').val(),
				score: $('#ajout-score').val()
			};

			if(joueur.nom.length===0){alert("Le nom ne doit pas être vide !");return;}
			if(/^[0-9]+$/.test(joueur.score)===false){alert("Score invalide");return;}
			var existeDeja=false;

			$('#joueurs tr').each(function() {
					if($(this).find('.nom').text()===joueur.nom){existeDeja=true;}
				});
			if(existeDeja){alert("Ce nom a déjà été rentré !");return;}

			ajouter_joueur(joueur);
			$('#ajout-nom'	).val('');
			$('#ajout-score').val('');

			$('#total'  ).text(calculer_total());
			$('#mediane').text(calculer_mediane());
			trier();
		});

	$('#joueurs').click(function(event) {
			if($(event.target).hasClass('effacer')) {
				$(event.target).parent().remove();
				$('#total'  ).text(calculer_total());
				$('#mediane').text(calculer_mediane());
			}
		});
});

function ajouter_joueur(joueur)
{
	var ligne=$('<tr><td class="effacer"></td><td class="nom"></td><td class="score"></td></tr>');
	ligne.find(".nom"  ).text(joueur.nom  );
	ligne.find(".score").text(joueur.score);
	$('#joueurs').append(ligne);
}

function calculer_total()
{
	var total=0;
	// Pour chaque ligne du tableau .each() appelle la fonction.
	$('#joueurs tr').each(function()
		{
			// $(this) est la ligne (tr) ...
			// on veut le texte dans la case avec le score
			var score=parseInt($(this).find('.score').text());
			// La variable "total" est définie dans la fonction calculer_total...
			// mais on peut y accéder ici (fermeture)
			total+=score;
		});
	return total;
}

function calculer_mediane()
{
	var scores=[];
	$('#joueurs tr').each(function()
		{
			var s=parseInt($(this).find('.score').text());
			scores.push(s);
		});
	scores.sort(function(a,b){return a-b;});
	return scores[Math.floor(scores.length/2)];
}

function trier()
{
	var joueurs=[];
	$('#joueurs tr').each(function()
		{
			var s=parseInt($(this).find('.score').text());
			var j=
				{
					ligne:$(this),
					score:s
				};
			joueurs.push(j);
		});
	joueurs.sort(function(a,b){return b.score-a.score;});
	for(var i=0;i<joueurs.length;i++)
	{
		var ligne=joueurs[i].ligne;
		$('#joueurs').append(ligne);
	}
}
