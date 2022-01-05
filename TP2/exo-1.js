
/*

console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");

	$('#nom').keyup(function(event)
		{
			console.log("Une touche a été appuyée");
			var texte=$("#nom").val();
      console.log(texte);

			if(/[^a-zA-Z '-]/.test(texte))
			{
				$('#erreur-nom').show();
			}
			else
			{
        $('#erreur-nom').hide();
      }
      texte=texte.replace(/ /g,"-");
			texte=texte.toLowerCase();
			$('#login').val(texte);
		});

    $('#mdp').keyup(function(event)
      {
        var mdp = $('#mdp').val();
        console.log("msp :", mdp);
        $('#erreur-mdp').toggle((mdp.length < 6));
        var conf = $('#conf').val();
        $('#erreur-conf').toggle(conf != $('#mdp').val());
  });


  $('#conf').keyup(function(event)
    {
      var conf = $('#conf').val();
      console.log("conf:",conf);
      $('#erreur-conf').toggle(conf != $('#mdp').val());

    });


  $('#email').keyup(function(event){
    // recuperation de la valeur donnée par l'utilisateur
    var mail = $("#email").val();
    console.log("mail :", mail);
    // test de l'adresse mail donnée
    var test = (/([a-z]|[0-9])+\@[a-z]+\.(com|fr)$/.test(mail));
    // toggle true --> affiche
    $('#erreur-email').toggle(!test);



  });



}); // fin $(document).ready(function()



*/










//CORRECTION


console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");

	$('#nom').keyup(function(event)
		{
			console.log("Une touche a été appuyée dans nom");
			var texte=$("#nom").val();
			$('#erreur-nom').toggle(/[^a-zA-Z '-]/.test(texte));
			texte=texte.toLowerCase();
			texte=texte.replace(/[^a-z]/g,'-');
			$('#login').val(texte);
		});

	$('#email').keyup(function(event)
		{
			console.log("Une touche a été appuyée dans email");
			var email=$('#email').val();
			$('#erreur-email').toggle(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(email)===false);
		});
	$('#mdp').keyup(function(event)
		{
			console.log("Une touche a été appuyée dans mdp");
			var mdp=$('#mdp').val();
			$('#erreur-mdp').toggle(mdp.length<6);
			var confirm=$('#confirm').val();
			$('#erreur-confirm').toggle(mdp!==confirm);
		});
	$('#confirm').keyup(function(event)
		{
			console.log("Une touche a été appuyée dans confirm");
			var mdp=$('#mdp').val();
			var confirm=$('#confirm').val();
			$('#erreur-confirm').toggle(mdp!==confirm);
		});

	$('form').submit(function(event)
		{
			if($('.erreur:visible').length!==0)
			{
				event.preventDefault();
				alert('Merci de corriger les erreurs.');
			}
		});


	console.log("La mise en place est finie. En attente d'événements...");
});
