
//Avaa laatikko

var coll = document.getElementsByClassName("avaa"); //Haetaan elementti class tunnuksella
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var sisaltoDIV = this.nextElementSibling; //"avaa" div alla oleva elementti ja sille muuttuja
    if (sisaltoDIV.style.display === "block") { //Jos display=block; muutetaan display=none;
      sisaltoDIV.style.display = "none";
    } else {
      sisaltoDIV.style.display = "block"; //Muussa tapauksessa display="block"
    }
  });
}
