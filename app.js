AOS.init();
const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')
const link = document.querySelector('.link')
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')
var header = document.querySelector('.conteiner-nav')

 window.addEventListener('scroll',()=>{
    var scroll = window.scrollY
     if(scroll>160){
         header.style.height='80px';
         header.style.backgroundColor='#609966'
     }
     else{
         header.style.backgroundColor='transparent'
    }
  })

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
    header.style.height='80px';
    header.style.backgroundColor='#609966'
})

link.addEventListener('click',()=>{
     toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})
link1.addEventListener('click',()=>{
toggle.classList.toggle('rotate')
links.classList.toggle('active')
})
link2.addEventListener('click',()=>{
toggle.classList.toggle('rotate')
links.classList.toggle('active')
})
link3.addEventListener('click',()=>{
toggle.classList.toggle('rotate')
links.classList.toggle('active')
})
link4.addEventListener('click',()=>{
toggle.classList.toggle('rotate')
links.classList.toggle('active')
})

var botonSubir = document.getElementById("btn-subir");
  var botonWhatsApp = document.querySelector(".boton-whatsapp");

  // Mostrar u ocultar el botón de WhatsApp en función de la posición de desplazamiento
  window.onscroll = function() {
    if (window.pageYOffset > 100) {
      botonSubir.style.display = "block";
      botonWhatsApp.style.display = "block";
    } else {
      botonSubir.style.display = "none";
      botonWhatsApp.style.display = "none";
    }
  }
  botonSubir.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
