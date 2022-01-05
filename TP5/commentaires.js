$(document).ready(function()
{
	$('#pages').change(function()
	{
		$.get("http://localhost/JavaScript/TP5/commentaires.php",
			{
				debut: parseInt($(this).val()),
				fin: parseInt($(this).val())+4
			},
				function(reponse) {
				$('#commentaires').html(reponse);
			});

	});

	$('#commentaires').on('mousedown','.jaime-plus',function(e)
	{
		// éviter la sélection désagréable quand on clique
		e.preventDefault();
		var commentaire=$(this).parent().parent();
		var idCommentaire=parseInt(commentaire.attr('data-com-id'));
		$.post('http://localhost/JavaScript/TP5/commentaires-jaime.php',
			   {
				   id: idCommentaire
			   },
			   function(reponse)
			   {
				   console.log('Réponse recue:',reponse);
				   if(reponse==='ok')
				   {
					   var jaime=commentaire.find('.jaime');
					   var val=jaime.text()==='' ? 0 : parseInt(jaime.text());
					   jaime.text(val+1);
				   }
			   });
	});


	// ATTENTION avec String '+' équivaut à une concaténation !!!
	console.log('5'+4);
	$('#pages').change();
});
