
$(document).ready(function()
{

	var minuteur=setInterval(function()
		{
			var position=parseInt($('#dia-images').css('left'));
			if(position%600!==0){return;}
			position-=600;
			if(position<-600*3){position=0;}
			$('#dia-images').animate({left: position});
		},2000);

	$('#dia-fleches span').mousedown(function()
		{

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
			$('#dia-images').animate({left: position});
		});

});
