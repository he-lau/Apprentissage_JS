
$(document).ready(function() {

	$('#ajout-bouton').click(function() {
		var joueur = {
				nom: $('#ajout-nom'  ).val(),
				score: $('#ajout-score').val()
		};
		ajouter_joueur(joueur);

		$('#total').text(calculer_total());
		$('#mediane').text(calculer_mediane());

	});
});

function ajouter_joueur(joueur) {
	var ligne=$('<tr><td class="nom"></td><td class="score"></td></tr>');
	ligne.find(".nom").text(joueur.nom);
	ligne.find(".score").text(joueur.score);
	$('#joueurs').append(ligne);
};

function calculer_total() {
	var somme = 0;

	$('#joueurs tr').each(function(){
		somme += parseInt($(this).find('.score').text());
	});

	return somme;
};

function calculer_mediane() {
	var scores = [];

	$('#joueurs tr').each(function(){
		scores.push(parseInt($(this).find('.score').text()));
	})

	//trie du tableau scores
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
