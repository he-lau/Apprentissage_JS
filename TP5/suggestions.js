
$(document).ready(function()
{
	$('#recherche').keyup(function(e)
	{
		$.get('http://localhost/JavaScript/TP5/suggestions.php',
			  {mot: $('#recherche').val()},
			  function(reponse)
			  {
					// ajout/ remplace des li dans la liste ul (#suggestions)
				  $('#suggestions').html(reponse);
					// affiche la liste
				  $('#suggestions').show();
			  });
	});

	$('#suggestions').on('mousedown','li',function(e)
	{
		$('#recherche').val($(this).text());
		$('#suggestions').hide();
	});

});
