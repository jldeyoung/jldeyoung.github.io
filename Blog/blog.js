
function getDesc(id,doc){
	var x = document.createElement("article");
	let title;
	let desc;
	
	fetch("https://willamette.edu/~jldeyoung/Blog/"+doc).then(r=>r.text()).then((html)=>{ // get the content of products.html
	let element = document.createElement("html");
	element.innerHTML = html; // parse the html
	title = element.getElementsByTagName("title")[0];
	desc = element.getElementsByName("description")[0];
	});
	
	x.innerHTML = "<h1>"+title+"</h1>\n" +
				  "<p>"+desc+"<br>" +
				  "<a href='"+doc+"'>" + 
				  "Go" + 
				  "</a></p>";
	
	document.getElementById(id).appendChild(x);
}

let blogHeader = `
    <!-- Navbar -->
	<div class="w3-top" style="font-family: Lato">
	  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
		<a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
		<a href="/~jldeyoung/index.html#home" class="w3-bar-item w3-button">HOME</a>
		<a href="/~jldeyoung/index.html#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
		<a href="/~jldeyoung/index.html#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
		<a href="/~jldeyoung/resume.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> RESUME</a>
		<a href="/~jldeyoung/Blog/index.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> BLOG</a>
	  </div>
	</div>
`;

let blogFooter = `
	<!-- Footer -->
	<footer class="w3-center w3-dark-grey w3-padding-64">
	  <!--<a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>-->
	  <div class="w3-xlarge w3-section">
		<a href="http://github.com/jldeyoung" target="_blank"><i class="fa fa-github w3-hover-opacity w3-text-white"></i></a>
		<a href="https://www.youtube.com/channel/UCnKg2-8ka1HsXlO7nBTXcOQ" target="_blank"><i class="fa fa-youtube-play w3-hover-opacity w3-text-white"></i></a>
		<a href="mailto:jldeyoung@willamette.edu"><i class="fa fa-envelope w3-hover-opacity w3-text-white" target="_blank"></i></a>
	  </div>
	  <p>Juni L DeYoung &copy; 2022.</p>
	  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank">w3.css</a></p>
	</footer>
`;

document.getElementById("app-header").innerHTML = blogHeader;
document.getElementById("app-footer").innerHTML = blogFooter;

getDesc("forms","music-forms.html");
