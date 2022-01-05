document.addEventListener("DOMContentLoaded", function() {

  var joueur="X";
  var morpion = document.getElementById('morpion');

  morpion.addEventListener('mousedown', function(e) {

    if (e.target.textContent === '') {
      e.target.textContent = joueur;
      (joueur === "X" ? joueur = "O": joueur = "X");
    }
    else {
      return;
    }

  })

});

/*

// CORRECTION

console.log("Ce programme JS vient d'être chargé");

document.addEventListener("DOMContentLoaded", function()
{
	console.log("Le document est pret");
	var joueur="X";
	document.getElementById('morpion').addEventListener("mousedown", function(e)
	{
		console.log("Le bouton de la souris a été enfoncé.");
		var td=e.target;
		if(td.textContent!==''){return;}
		td.textContent=joueur;
		joueur=(joueur==="X" ? 'O' : 'X');
	});

});


*/
