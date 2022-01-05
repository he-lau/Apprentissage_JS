$(document).ready(function()
{

	// Eviter le glisser-déposer par défaut de l'image.
	$('.potentiometre img').on('dragstart', function(event) { event.preventDefault(); });

	// Début de mouvement dans un potentiomètre
	var posDepartSouris;
	var posDepartPoignee;


	$('.potentiometre img').mousedown(function(event) {
			// Seulement le bouton gauche de la souris
			if(event.which!==1){return;}
			// Éviter de sélectionner texte si la souris bouge pendant le click
			event.preventDefault();
			var poignee=$(this);
			$('.en-mouvement').removeClass('en-mouvement');
			poignee.addClass('en-mouvement');
			// Se souvenir de la position de départ
			posDepartSouris  =event.pageX;
			posDepartPoignee =poignee.offset().left;
		});

	// Fin de mouvement d'un potentiomètre
	$('html').mouseup(function(e) {
			$('.en-mouvement').removeClass('en-mouvement');
		});

	// Mouvement d'un potentiomètre
	$('html').mousemove(function(event) {
			var poignee=$('.en-mouvement');

			if(poignee.length===0){return;}

			var potentiometre=poignee.parent();
			var pos=event.pageX;

			pos-=posDepartSouris;
			pos+=posDepartPoignee;
			// Bord gauche du potentiomètre par rapport à la page
			var gauche=potentiometre.offset().left-12;

			if(pos<gauche){pos=gauche;}

			if(pos>gauche+potentiometre.width()){pos=gauche+potentiometre.width();}

			poignee.offset({
        left: pos,
				top:  poignee.offset().top
      });

			// Largeur de la couleur de fond de la partie à gauche de la poignée
			potentiometre.find('span').width(pos-gauche);
			// Calculer la valeur du potentiometre entre 0 et 100
			var valeur=Math.floor(255*(pos-gauche)/potentiometre.width());
			// Déterminer le id du span valeur à partir de l'id du potentiomètre
			var valId='valeur-'+potentiometre.attr('id');
			// Afficher la valeur
			$('#'+valId).val(valeur);
			$('#'+valId).removeClass('erreur');
			mise_a_jour_hex_et_couleur();
		});

	// Touche appuyée dans rouge, vert ou bleu
	$('input.valeur').keyup(function(event) {
			var v=parseInt($(this).val());
			// Validation
			$(this).toggleClass('erreur',isNaN(v) || v<0 || v>255);

			if($(this).hasClass('erreur')){return;}

			mise_a_jour_position_pot($(this).parent().find('.potentiometre'));
			mise_a_jour_hex_et_couleur();
		});

	// Touche appuyée dans hexadécimal
	$('#hex').keyup(function(event) {
			var hex=$(this).val();
			// Validation
			$(this).toggleClass('erreur',!/^#[0-9a-f]{6}$/.test(hex));

			if($(this).hasClass('erreur')){return;}

			// Mettre à jour les champs texte rouge, vert et bleu
			$('#valeur-pot-rouge').val(parseInt(hex.substr(1,2),16));
			$('#valeur-pot-vert' ).val(parseInt(hex.substr(3,2),16));
			$('#valeur-pot-bleu' ).val(parseInt(hex.substr(5,2),16));
			$('.valeur').removeClass('erreur');
			// Mettre à jour les 3 potentiomètres
			mise_a_jour_position_pot($('#pot-rouge'));
			mise_a_jour_position_pot($('#pot-vert' ));
			mise_a_jour_position_pot($('#pot-bleu' ));
			// Mettre à jour la couleur dans la boite
			$('#boite-couleur').css('background-color',hex);
		});

});

// Met à jour la position de la poignée d'un potentiometre en fonction de la valeur de l'input
function mise_a_jour_position_pot(potentiometre)
{
	var poignee=potentiometre.find('img');
	// Chercher l'élément input correspondat et prendre sa valeur
	var v=parseInt(potentiometre.parent().find('input.valeur').val());
	// Calculer la position par rapport à la page
	var pos=(v/255)*potentiometre.width();

	poignee.css('left',pos-12); /* 12 = largeur image / 2 */
	potentiometre.find('span').width(pos);
}

// Met à jour la valeur hexadécimale et la couleur de la boite
// à partir des champs texte rouge, vert et bleu
function mise_a_jour_hex_et_couleur()
{
	var hex='#';
	// S'il y a une erreur sur un des 4 champs texte, ne pas mettre à jour
	if($('.valeur.erreur').length){return;}

	// Ajouter à la chaîne successivement rouge, vert et bleu
	hex+=hex_deux_chiffres(parseInt($('#valeur-pot-rouge').val()));
	hex+=hex_deux_chiffres(parseInt($('#valeur-pot-vert' ).val()));
	hex+=hex_deux_chiffres(parseInt($('#valeur-pot-bleu' ).val()));

	// Afficher la valeur hexadécimale
	$('#hex').val(hex);
	$('#hex').removeClass('erreur');
	// Changer la couleur dans la boite
	$('#boite-couleur').css('background-color',hex);
}

// Renvoie une chaîne hexadécimale à deux chiffres à partir d'un nombre décimal.
function hex_deux_chiffres(n)
{
	var res=Number(n).toString(16);

	if(res.length===1) {
    res="0"+res;
  }
	return res;
}
