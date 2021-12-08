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

let coat1Obj = document.getElementById("coat1");
let coat2Obj = document.getElementById("coat2");
let coat3Obj = document.getElementById("coat3");
let coat4Obj = document.getElementById("coat4");
let coat5Obj = document.getElementById("coat5");
let coat6Obj = document.getElementById("coat6");

let color1Obj = document.getElementById("dot1");
let color2Obj = document.getElementById("dot2");
let color3Obj = document.getElementById("dot3");
let color4Obj = document.getElementById("dot4");

let sizeXXSObj = document.getElementById("XXS");
let sizeXSObj = document.getElementById("XS");
let sizeSObj = document.getElementById("S");
let sizeMObj = document.getElementById("M");
let sizeLObj = document.getElementById("L");
let sizeXLObj = document.getElementById("XL");
let sizeXXLObj = document.getElementById("XXL");

let addToCartObj = document.getElementById("cart_btn");

coat1Obj.addEventListener('click', createInput)
function createInput(){
  console.log('User selected the first coat image')
}
coat2Obj.addEventListener('click', createInput1)
function createInput1(){
  console.log('User selected the second coat image')
}
coat3Obj.addEventListener('click', createInput2)
function createInput2(){
  console.log('User selected the third coat image')
}
coat4Obj.addEventListener('click', createInput3)
function createInput3(){
  console.log('User selected the fourth coat image')
}
coat5Obj.addEventListener('click', createInput4)
function createInput4(){
  console.log('User selected the fifth coat image')
}
coat6Obj.addEventListener('click', createInput5)
function createInput5(){
  console.log('User selected the sixth coat image')
}

color1Obj.addEventListener('click', createInput6)
function createInput6(){  
  console.log('User selected Color Beige')
}

color2Obj.addEventListener('click', createInput7)
function createInput7(){
  console.log('User selected Color Blue Marl')
}
color3Obj.addEventListener('click', createInput8)
function createInput8(){
  console.log('User selected Light Green')
}
color4Obj.addEventListener('click', createInput9)
function createInput9(){
  console.log('User selected Anthracite Grey ')
}

sizeXXSObj.addEventListener('click', createInput10)
function createInput10(){
  console.log('User selected size XXS')
}
sizeXSObj.addEventListener('click', createInput11)
function createInput11(){
  console.log('User selected size XS')
}
sizeSObj.addEventListener('click', createInput12)
function createInput12(){
  console.log('User selected S')
}
sizeMObj.addEventListener('click', createInput13)
function createInput13(){
  console.log('User selected size M')
}
sizeLObj.addEventListener('click', createInput14)
function createInput14(){
  console.log('User selected size L')
}
sizeXLObj.addEventListener('click', createInput15)
function createInput15(){
  console.log('User selected size XL')
}
sizeXXLObj.addEventListener('click', createInput16)
function createInput16(){
  console.log('User selected size XXL')
}

addToCartObj.addEventListener('click', createInput17)
function createInput17(){
  console.log('User added item to cart')
}