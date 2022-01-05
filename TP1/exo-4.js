console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");

	$('#nom').keyup(function(event)
		{
			console.log("Une touche a été appuyée");
			var texte=$("#nom").val();

			if(/[^a-zA-Z]/.test(texte))
			{
				$('#erreur-nom').show();
			}
			else
			{
				$('#erreur-nom').hide();
			}
			texte=texte.toLowerCase();
			$('#login').val(texte);
		});
	console.log("La mise en place est finie. En attente d'événements...");
});

console.log("test expressions");

/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test("aaa@bbb.ccc")


/*
  CORRECTION
  console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");

	$('#nom').keyup(function(event)
		{
			console.log("Une touche a été appuyée");
			var texte=$("#nom").val();
			texte=texte.toLowerCase();
			$('#login').val(texte);
		});
	console.log("La mise en place est finie. En attente d'événements...");
});




*/
