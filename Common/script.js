// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", " w3-text-black");
    }
}

function loadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}

let appHeader = `
    <!-- Navbar -->
	<div class="w3-top" style="font-family: Lato">
	  <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
	  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
		<a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
		<a href="/~jldeyoung/index.html#home" class="w3-bar-item w3-button"> HOME</a>
		<a href="/~jldeyoung/index.html#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
		<a href="/~jldeyoung/index.html#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-folder"></i> PORTFOLIO</a>
		<a href="/~jldeyoung/index.html#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
		<a href="/~jldeyoung/resume.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> RESUME</a>
		<a href="/~jldeyoung/Blog/index.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> BLOG</a>
	  </div>
	</div>
	
	<!-- Navbar on small screens -->
	  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
		<a href="/~jldeyoung/index.html#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
		<a href="/~jldeyoung/index.html#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
		<a href="/~jldeyoung/index.html#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
		<a href="/~jldeyoung/resume.html" class="w3-bar-item w3-button" onclick="toggleFunction()">RESUME</a>
		<a href="/~jldeyoung/Blog/index.html" class="w3-bar-item w3-button" onclick="toggleFunction()">BLOG</a>
		<!--<a href="#" class="w3-bar-item w3-button">SEARCH</a>-->
	  </div>
`;

let appFooter = `
	<!-- Footer -->
	<footer class="w3-center w3-black w3-padding-64">
	  <!--<a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>-->
	  <div class="w3-xlarge w3-section">
		<a href="http://github.com/jldeyoung" target="_blank"><i class="fa fa-github w3-hover-opacity"></i></a>
		<a href="https://www.youtube.com/channel/UCnKg2-8ka1HsXlO7nBTXcOQ" target="_blank"><i class="fa fa-youtube-play w3-hover-opacity"></i></a>
		<a href="mailto:jldeyoung@willamette.edu"><i class="fa fa-envelope w3-hover-opacity" target="_blank"></i></a>
	  </div>
	  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
	  <p>Images by Juni L DeYoung &copy; 2022.</p>
	</footer>
`;

document.getElementById("app-header").innerHTML = appHeader;
document.getElementById("app-footer").innerHTML = appFooter;

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function hide_show(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
  } else {
	x.className = x.className.replace(" w3-show", "");
  }
}