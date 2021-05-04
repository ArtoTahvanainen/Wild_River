
//AVAUTUVA LAATIKKO

var palvelu = document.getElementsByClassName("avaa"); //Haetaan elementti class tunnuksella
var i;

for (i = 0; i < palvelu.length; i++) { //Klikkaamalla muuttuja "i" saa arvon 1
  palvelu[i].addEventListener("click", function() {
    var sisaltoDIV = this.nextElementSibling; //"avaa" div alla oleva elementti ja sille muuttuja
    if (sisaltoDIV.style.display === "block") { //Jos display=block; muutetaan display=none;
      sisaltoDIV.style.display = "none";
    } else {
      sisaltoDIV.style.display = "block"; //Muussa tapauksessa display="block"
    }
  });
}
