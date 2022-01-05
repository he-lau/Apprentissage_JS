console.log("Ce programme JS vient d'être chargé");

document.addEventListener("DOMContentLoaded", function()
{
	console.log("Le document est pret");

  var titre = document.getElementById('titre');
  titre.addEventListener('mousedown', function(e){
    this.style.color = 'red';
  });
});
