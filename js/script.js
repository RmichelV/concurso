var myCarousel = document.querySelector('#carousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const btnCanj=document.querySelector('.enviar');

function canjeo(){
    location.href="https://1.bp.blogspot.com/-9TDCvIIqiWo/UNBAdqEVO8I/AAAAAAAAAmY/i90o8UE4HnY/s640/tumblr_mdp8cw0NyG1rcnsdlo1_500_large.gif"
}

btnCanj.addEventListener('click',canjeo);