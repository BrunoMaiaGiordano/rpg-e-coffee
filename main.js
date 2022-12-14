// DOM Document Object Model 
//Transformar tudo do html em objeto

// Alterando um estilo do html
// document.body.style.background = "purple";

/*Abre e fecha o menu hamburguer  */

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show')
    })
  }


/*Quando clicar em um item do menu, esconder o menu */

const links =  document.querySelectorAll('nav ul li a ');
for(const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// Mudar o header da página quando der scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if(window.scrollY >= navHeight) {
    //scroll é maior que a altura do header 
    header.classList.add('scroll')
  
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }

}


/**Testimonials carousel slider swiper */
// const swiper = new Swiper('.swiper', {
//   //Quantos sliders vai aparecer
//   slidesPerView: 1,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   mousewheel: true,
//   keyboard: true,
//   breakpoints: {
//     slidesPerView: 2,
//     setWrapperSize: true
//   }
// });

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });


// var swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   direction: getDirection(),
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });



// var swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

// var swiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

/**ScrollReveal : Mostrar elementos quando der scroll na página  */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
#home .text, #home .image,
#about .text, #about .image,
#services header, #services .card,
#library, 
#coffee header, #coffee .coffee
#contact .text, #contact .links
footer .brand, footer .social
`, { interval: 100})

/**Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/**Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffSet + (window.innerHeight / 8 ) * 4
  for(const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a [href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelectorAll('nav ul li a [href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }

}

/**When Scroll */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})