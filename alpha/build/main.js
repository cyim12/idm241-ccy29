var zaraOffset = document.querySelector("ul").offsetTop;
var raincoatVis = false;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / zaraOffset);
    console.log(opac);
  if (raincoatVis == false){
    document.getElementById('build').style.opacity = opac;
    if (opac >= 0.9){
      raincoatVis = true;
    }
  }
    
  }
}