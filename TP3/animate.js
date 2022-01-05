$(document).ready(function()
{
	$('h1').click(function()
	{
		var prop =
		{
			left: 500,
			opacity: 0,
			"border-radius": 100,
			padding: 100
		};

		$('h1').animate(prop,1000,function()
		{
			console.log('fin première anim');
			$('h1').animate({left: 0,opacity: 1,"border-radius": 0, padding: 20},1000);
		});
	});
});







/*
$(document).ready(function()
{

  $('h1').click(function() {

      var options = {
        //top: 100,
        //left: 2500,
        //opacity: .5,
        //width: 0,
        //padding: 0
        //border: 0,
        "border-radius": 200
      };

      function helloworld() {

        console.log('hello world!');
      }

      $('h1').animate(options, 1000, helloworld());
  });




});
*/
