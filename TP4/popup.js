$(document).ready(function()
{
	$('.popup-mot').hover(function()
		{
			var mot=$(this);
			var id="popup-"+mot.attr('data-popup');
			var popup=$('#'+id);
			var pos=mot.offset();
			pos.top-=popup.outerHeight()+20;
			popup.fadeIn();
			popup.offset(pos);
		},
		function()
		{
			$('.popup').stop().fadeOut();
		});
});
