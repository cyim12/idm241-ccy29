//On Scroll//
var zaraOffset = document.querySelector("h2").offsetTop;
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
};

//On Click//
const modal = document.getElementsByClassName('helpButtonClass').item(0);
console.log(modal)
const itemModal = document.getElementsByClassName('itemModal').item(0);
console.log(itemModal)
modal.addEventListener('click', function(){
  itemModal.hidden = !itemModal.hidden;
});

const closeItemModalObj = document.getElementById('close-modal');
closeItemModalObj.addEventListener('click', function(){
  itemModal.hidden = !itemModal.hidden;
});