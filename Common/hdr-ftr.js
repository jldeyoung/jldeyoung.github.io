let appHeader = `
    <!-- Navbar -->
	<div class="w3-top" style="font-family: Lato">
	  <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
	  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
		<a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
		<a href="/index.html#home" class="w3-bar-item w3-black w3-button"> HOME</a>
		<a href="/index.html#about" class="w3-bar-item w3-black w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
		<a href="/index.html#portfolio" class="w3-bar-item w3-black w3-button w3-hide-small"><i class="fa fa-folder"></i> PORTFOLIO</a>
		<a href="/index.html#contact" class="w3-bar-item w3-black w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
		<a href="/resume.html" class="w3-bar-item w3-black w3-button w3-hide-small"><i class="fa fa-user"></i> RESUME</a>
		<a href="/blog/index.html" class="w3-bar-item w3-black w3-button w3-hide-small"><i class="fa fa-th"></i> BLOG</a>
	  </div>
	</div>
	
	<!-- Navbar on small screens -->
	  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
		<a href="/index.html#home" class="w3-bar-item w3-button"> HOME</a>
		<a href="/index.html#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
		<a href="/index.html#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
		<a href="/index.html#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
		<a href="/resume.html" class="w3-bar-item w3-button" onclick="toggleFunction()">RESUME</a>
		<a href="/blog/index.html" class="w3-bar-item w3-button" onclick="toggleFunction()">BLOG</a>
		<!--<a href="#" class="w3-bar-item w3-button">SEARCH</a>-->
	  </div>
`;

let appFooter = `
	<!-- Footer -->
	<div class="w3-center w3-black w3-padding-64 footer">
		  <!--<a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>-->
		  <div class="w3-xlarge w3-section">
			<a href="http://github.com/jldeyoung" target="_blank"><i class="fa fa-github w3-hover-opacity"></i></a>
			<a href="https://www.youtube.com/channel/UCnKg2-8ka1HsXlO7nBTXcOQ" target="_blank"><i class="fa fa-youtube-play w3-hover-opacity"></i></a>
			<a href="mailto:jldeyoung@live.com"><i class="fa fa-envelope w3-hover-opacity" target="_blank"></i></a>
		  </div>
	  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
	  <p>Images by Juni L DeYoung &copy; 2024.</p>
	</div>
`;

let imports = `
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&family=EB+Garamond">
	<script src="https://kit.fontawesome.com/2305782426.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="/Common/homepage.css">
`;

let i = document.getElementById("imports");
if(i !== null) {
	i.innerHTML += imports;
}

let h = document.getElementById("app-header");
if(h !== null){
	h.innerHTML = appHeader;
}

let f = document.getElementById("app-footer")
if(f !== null){
	f.innerHTML = appFooter;
}

function hide_show(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
  } else {
	x.className = x.className.replace(" w3-show", "");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

/*
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
*/