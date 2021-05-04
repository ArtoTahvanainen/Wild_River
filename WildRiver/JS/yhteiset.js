
// Navbar

var prevScrollpos = window.pageYOffset;


window.onscroll = function() {

var currentScrollpos = window.pageYOffset;
if(prevScrollpos > currentScrollpos) { //Jos navbarin sijoitus o
  document.getElementById("navbar").style.top = "0"; 
} else {
  document.getElementById("navbar").style.top = "-80px";
}

prevScrollpos = currentScrollpos;
}

// Dropdown function

function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show"); //Toggle between adding and removing a class name from an element with JavaScript.
  //This property is useful to add, remove and toggle CSS classes on an element.
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) { //The matches() method returns a Boolean value indicating whether an element is matched by a specific CSS selector or not.
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) { //If class contains 'show'
        openDropdown.classList.remove('show'); //Remove class "show"
      }
    }
  }
}