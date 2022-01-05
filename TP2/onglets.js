

// CORRECTION

console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	$('#onglets-menu li').mousedown(function()
		{
			console.log("Le bouton de la souris a été enfoncé.");
			$('.menu-actif').removeClass('menu-actif');
			$(this).addClass('menu-actif');

			$('.contenu-actif').removeClass('contenu-actif');
			var num=$('#onglets-menu>li').index(this);
			$('#onglets-contenu>div').eq(num).addClass('contenu-actif');
		});
	console.log("La mise en place est finie. En attente d'événements...");
});


/*
$(document).ready(function() {

  $("#onglets-menu li").click(function(event) {
    //console.log(event);
    //console.log(this.id); // onglets-menu
    if (event.which === 1 ) {
      console.log('click droit effectué');
      console.log($("li").index());

      $("#onglets-menu>.menu-actif").removeClass('menu-actif')
      if (! $(this).hasClass('menu-actif')) {
        console.log("non actif");
        $(this).addClass('menu-actif')
      }

    //  $("#onglets-menu>.menu-actif").removeClass('menu-actifs')
    //  $(this).addClass('menu-actif')

    }

  });
});
*/
