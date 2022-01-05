$(document).ready(function() {

  var posDepartSouris;
  var posDepartBoite;

	$('.deplacer').mousedown(function(event) {
			// Seulement le bouton gauche de la souris
			if(event.which!==1){
        return;
      }
			// Éviter de sélectionner texte si la souris bouge pendant le click
			event.preventDefault();

      // Une seule boîte en mouvemnt à la fois
			$('.en-mouvement').removeClass('en-mouvement');
      // la boite courante est en mouvement
			$(this).addClass('en-mouvement');

      // Se souvenir de la position de départ
      posDepartSouris = {left:event.pageX,top: event.pageY};
      posDepartBoite = $(this).offset();
		});

	$('html').mouseup(function(e) {

			$('.en-mouvement').removeClass('en-mouvement');
		});

	// On suit les mouvements sur toute la page.
	// Si on suivait uniquement à l'intérieur de la boite un
	// grand mouvement de la souris pourrait faire sortir le pointeur de la boite et
	// on "perdrait" la boite.
	$('html').mousemove(function(event) {

    var boite = $('.en-mouvement');

    if(boite.length === 0){
      return;
    }

    // position courante de la souris
    var pos = {left:event.pageX, top: event.pageY};
    console.log("top:"+pos.top+', left:'+pos.left);


    // nouvelle position de la souris - ancienne = déplacement (écart)
    pos.top-=posDepartSouris.top;
    pos.left-=posDepartSouris.left;
    console.log("top:"+pos.top+', left:'+pos.left);

    // on ajoute le déplacement (écart) à l'ancienne boîte pour avoir la nouvelle position de la boîte
    pos.top +=posDepartBoite.top;
    pos.left+=posDepartBoite.left;
    console.log("top:"+pos.top+', left:'+pos.left);

    // application du déplacement
    boite.offset(pos);
		});

});
