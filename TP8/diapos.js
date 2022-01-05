$(document).ready(function()
{

	mettre_a_jour_points(0);

	var minuteur = setInterval(function()
		{
			console.log("Appel par minuteurs");
			var position=parseInt($('#dia-images').css('left'));
			if(position%600!==0){return;}
			position-=600;
			if(position<-600*3){position=0;}
			mettre_a_jour_points(position);
			$('#dia-images').animate({left: position});
		},2000);

	$('#dia-fleches span').mousedown(function()
		{
			console.log("Le bouton de la souris a été appuyé sur une flèche");
			if(minuteur!==false)
			{
				clearInterval(minuteur);
				minuteur=false;
			}
			var position=parseInt($('#dia-images').css('left'));
			if(position%600!==0){return;}
			var flecheDroite=$(this).attr('id')==='dia-droite';
			position+=(flecheDroite ? -600 : 600);
			if(position<-600*3 || position>0){return;}
			mettre_a_jour_points(position);
			$('#dia-images').animate({left: position});
		});

	$('#dia-points li').mousedown(function()
		{
			if(minuteur!==false)
			{
				clearInterval(minuteur);
				minuteur=false;
			}
			var imgN=$('#dia-points li').index(this);
			var position=-600*imgN;
			$('#dia-images').animate({left: position});
			mettre_a_jour_points(position);
		});

	function mettre_a_jour_points(position)
	{
		if(position%600!==0){return;}
		var imgN=-position/600;
		$('#dia-points li').removeClass('courant');
		$('#dia-points li').eq(imgN).addClass('courant');
	}

	console.log("La mise en place est finie. En attente d'événements...");
});
