function myFunction2() {

	//LUODAAN ARTIKKELI
	var haeBlogi = document.getElementById('Blog'); //Haetaan "div" elementti id:n avulla
	var artikkeli = document.createElement("article"); //Luodaan "aticle" elementti
	artikkeli.className = "mySlides fade";
	artikkeli.style.display = "none";

	haeBlogi.appendChild(artikkeli); //Luodaan "article" elementti "div" elementin alle

	haeBlogi.insertBefore(artikkeli, haeBlogi.childNodes[0]);

	//------------------------------------------------------------------------------------


	//LUODAAN PISTEET
	var pisteboksi = document.getElementById('dots');
	var piste = document.createElement('span');
	piste.className = "dot";

	pisteboksi.appendChild(piste);





	//LUORAAN KUVA

	var file = document.getElementById('file2').files[0]; //Haetaan haluttu elementti id:n avulla
    var reader  = new FileReader(); //Luodaan tiedoston lukija

    reader.onload = function(e)  { //onload tapahtuma
        var kuva = document.createElement("img"); //Luodaan "img" elementti
        
        kuva.src = e.target.result; // 
        artikkeli.appendChild(kuva);
        artikkeli.insertBefore(kuva, artikkeli.childNodes[0]);
     }
        reader.readAsDataURL(file); // Tärkeä!! Lukee tiedoston URL tiedostona

    document.getElementById('file2').value = ''; //Tyhjennetään tiedosto kenttä

	//------------------------------------------------------------------------------------

	//LUODAAN OTSIKKO

	var otsikko = document.createElement("h1"); //Luodaan "h1" elementti
	artikkeli.appendChild(otsikko); //Luodaan "h1" elementti "article" elementin alle

	var otsikkoTeksti = document.getElementById("otsikkoTeksti2").value; //Haetaan arvo input kentästä 

	var UusiOtsikko = document.createTextNode(otsikkoTeksti); //Sijoitetaan input kentästä saatu teksti luotuun "h1" elementtiin
	otsikko.appendChild(UusiOtsikko);

	document.getElementById('otsikkoTeksti2').value = ''; //Tyhjennetään otsikko kenttä

	//------------------------------------------------------------------------------------

	//LUODAAN TEKSTI
	var teksti = document.createElement("p"); //Luodaan "p" elementti
	artikkeli.appendChild(teksti); //Luodaan "p" elementti "article" elementin alle

	var tekstiSisalto = document.getElementById("tekstiLaatikko2").value; //Sijoitetaan input kentästä saatu teksti luotuun "p" elementtiin

	var UusiTeksti = document.createTextNode(tekstiSisalto);
	teksti.appendChild(UusiTeksti);

	document.getElementById('tekstiLaatikko2').value = ''; //Tyhjennetään teksti kenttä

	//------------------------------------------------------------------------------------

	//LUODAAN HYPERLINKKI
	var linkki = document.createElement("a"); //Luodaan "a" elementti
	artikkeli.appendChild(linkki); //Luodaan "a" elementti "div" elementin alle

	var linkkiTeksti = document.createTextNode("Klikkaa!") //Luodaan "a" el ementille teksti
	linkki.appendChild(linkkiTeksti); //Sisällytetään luotu "linkkiTeksti" luotuun "a" linkkiin
	
	var osoite = document.getElementById("osoite2").value; //Haetaan "input" kenttän teksti

	linkki.title = "Klikkaa"; //linkin otsikko
	linkki.href = osoite; //"href = osoite(input kenttään laitettu osoite)"

	document.getElementById('osoite2').value = ''; //Tyhjennetään osoite kenttä

	//LUODAAN HR

	var viiva = document.createElement("hr");
	artikkeli.appendChild(viiva);
}


function myFunction() {

	//LUODAAN ARTIKKELI
	var haeArtikkeli = document.getElementById('News'); //Haetaan "div" elementti id:n avulla
	var artikkeli = document.createElement("article"); //Luodaan "aticle" elementti

	haeArtikkeli.appendChild(artikkeli); //Luodaan "article" elementti "div" elementin alle

	haeArtikkeli.insertBefore(artikkeli, haeArtikkeli.childNodes[0]);

	//------------------------------------------------------------------------------------

	//LUORAAN KUVA

	var file = document.getElementById('file').files[0]; //Haetaan haluttu elementti id:n avulla
    var reader  = new FileReader(); //Luodaan tiedoston lukija

    reader.onload = function(e)  { //onload tapahtuma
        var kuva = document.createElement("img"); //Luodaan "img" elementti
        
        kuva.src = e.target.result; // 
        artikkeli.appendChild(kuva);
        artikkeli.insertBefore(kuva, artikkeli.childNodes[0]);
     }
        reader.readAsDataURL(file); // Tärkeä!! Lukee tiedoston URL tiedostona

    document.getElementById('file').value = ''; //Tyhjennetään tiedosto kenttä

	//------------------------------------------------------------------------------------

	//LUODAAN OTSIKKO

	var otsikko = document.createElement("h1"); //Luodaan "h1" elementti
	artikkeli.appendChild(otsikko); //Luodaan "h1" elementti "article" elementin alle

	var otsikkoTeksti = document.getElementById("otsikkoTeksti").value; //Haetaan arvo input kentästä 

	var UusiOtsikko = document.createTextNode(otsikkoTeksti); //Sijoitetaan input kentästä saatu teksti luotuun "h1" elementtiin
	otsikko.appendChild(UusiOtsikko);

	document.getElementById('otsikkoTeksti').value = ''; //Tyhjennetään otsikko kenttä

	//------------------------------------------------------------------------------------

	//LUODAAN TEKSTI
	var teksti = document.createElement("p"); //Luodaan "p" elementti
	artikkeli.appendChild(teksti); //Luodaan "p" elementti "article" elementin alle

	var tekstiSisalto = document.getElementById("tekstiLaatikko").value; //Sijoitetaan input kentästä saatu teksti luotuun "p" elementtiin

	var UusiTeksti = document.createTextNode(tekstiSisalto);
	teksti.appendChild(UusiTeksti);

	document.getElementById('tekstiLaatikko').value = ''; //Tyhjennetään teksti kenttä

	//------------------------------------------------------------------------------------

	//LUODAAN HYPERLINKKI
	var linkki = document.createElement("a"); //Luodaan "a" elementti
	artikkeli.appendChild(linkki); //Luodaan "a" elementti "div" elementin alle

	var linkkiTeksti = document.createTextNode("Klikkaa!") //Luodaan "a" el ementille teksti
	linkki.appendChild(linkkiTeksti); //Sisällytetään luotu "linkkiTeksti" luotuun "a" linkkiin
	
	var osoite = document.getElementById("osoite").value; //Haetaan "input" kenttän teksti

	linkki.title = "Klikkaa"; //linkin otsikko
	linkki.href = osoite; //"href = osoite(input kenttään laitettu osoite)"

	document.getElementById('osoite').value = ''; //Tyhjennetään osoite kenttä

	//LUODAAN HR

	var viiva = document.createElement("hr");
	artikkeli.appendChild(viiva);
}

//LISÄÄ BLOGI

function LisaaBlogi() {
  document.getElementById("LisaaBlogi").classList.toggle("LisaaSisaltoB2"); //Toggle between adding and removing a class name from an element with JavaScript.
  //This property is useful to add, remove and toggle CSS classes on an element.
}


//LISÄÄ ARTIKKELI

function LisaaArtikkeli() {
  document.getElementById("LisaaArtikkeli").classList.toggle("LisaaSisalto2"); //Toggle between adding and removing a class name from an element with JavaScript.
  //This property is useful to add, remove and toggle CSS classes on an element.
}





//NEXTPREV


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
  	slideIndex = 1
  }

  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

