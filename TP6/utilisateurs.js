$(document).ready(function()
{
  $('#utilisateurs li').mousedown(function(e){

    $('#affichage').hide();

    $.get('http://localhost/JavaScript/TP6/utilisateurs.php',
      {uid: $(this).attr('data-uid')},
      function(reponse) {
        if (reponse.ok) {
          //console.log(reponse);
          $('#affichage #nom').text(reponse.nom);
          $('#affichage #age').text(reponse.age);
          $('#affichage #score').text(reponse.score);

          $('#affichage').fadeIn();
          $('#affichage').offset({left: e.pageX,top:e.pageY});
        }
        else {
          alert("utilisateur inconnue.");
        }
      }
    );
  });

  // Fermer la boite si on clique n'importe où dans la page (sauf sur un utilisateur)
$('html').mousedown(function(e)
{
  console.log("Évènement mousedown sur html");
  if(!$(e.target).is('#utilisateurs li'))
  {
    $('#affichage').fadeOut();
  }
});



});



/* CORRECTION
console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est pret");
	$('#utilisateurs li').mousedown(function(e)
	{
		console.log("Évènement mousedown");
		$.get('http://localhost/~1234567/tp-6/utilisateurs.php',
			  {uid: $(this).attr('data-uid')},
			  function(reponse)
			  {
				  console.log("Réponse reçue du serveur: ",reponse);
				  if(reponse.ok)
				  {
					  $('#nom'  ).text(reponse.nom);
					  $('#age'	).text(reponse.age);
					  $('#score').text(reponse.score);
				  }
				  else
				  {
					  alert(reponse.message);
				  }
			  });
	});
	console.log("La mise en place est finie. En attente d'événements...");
});
*/
