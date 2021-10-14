var build = document.getElementById("build");
var fadedIn = false;
var height,
		half;

window.addEventListener("resize", adjustHeightVars);
window.addEventListener("scroll", fadeBox);
const checkpoint = 300;

function fadeBox () {	
	var image=document.getElementsByClassName("image")[0]
  const currentScroll = window.pageYOffset+600;
  if (currentScroll >= checkpoint) {
    image.animate({'opacity':1},1500);
    setTimeout(function(){ image.style.opacity = 1; }, 4000);
  } 
}

 
// window.addEventListener("scroll", () => {
  
// });

function adjustHeightVars() {
	height = window.innerHeight;
	half = height * 0.35;
}

adjustHeightVars();