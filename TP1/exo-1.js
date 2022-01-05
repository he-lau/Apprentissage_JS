$(document).ready(function()
{
	console.log("Le document est prêt");
	$('input').click(function()
		{
      /*
			console.log("Le bouton a été cliqué.");
      //$('img').hide(); //  ajoute simplement  style="display:none" à l'élément <input>
      $('img').fadeOut(); //effet de transparance
      //$('img').fadeToggle();
      console.log("img caché");
      $('input').val('montrer');
*/


      if ($('input').val() === 'cacher') {
        $('img').fadeOut();
        $('input').val('montrer');
      }
      else if($('input').val() === 'montrer'){
        $('img').show();
        $('input').val('cacher');
      }
		});
	console.log("La mise en place est finie. En attente d'événements...");
});



//CORRECTION
/*

console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");
	$('input').click(function()
		{
			console.log("L'utilisateur a cliqué sur le bouton");
			if($('input').val()==='cacher')
			{
				console.log("Cacher l'image");
				$('img').hide() ;
				$('input').val('montrer');
			}
			else
			{
				console.log("Montrer l'image");
				$('img').show();
				$('input').val('cacher');
			}
		});
	console.log("La mise en place est finie. En attente d'événements...");
});
*/
