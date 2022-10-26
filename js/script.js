let input = document.querySelector('#search');
let body = document.querySelector('#top')
let block = document.querySelector('#jqmOverlay');
input.addEventListener('click', function() {
  block.classList.remove('d-none');
})
block.addEventListener('click', function() {
  block.classList.toggle('d-none');
})

// Инициализация слайдеров
const swiper =  new Swiper('.swiper_v1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-top',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar1',
  },
  // autoplay: {
  //   delay: 5000,
  // },
});

// Инициализация слайдера новостей
const swiper2 =  new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-top2',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar1',
  // },
  // autoplay: {
  //   delay: 5000,
  // },
});







// const swiper = new Swiper('.swiper_v2', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination1',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next_v2',
//     prevEl: '.swiper-button-prev_v2',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   // autoplay: {
//   //   delay: 3000,
//   // },
//   slidesPerGroup: 5,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     575: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//       slidesPerGroup: 1,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       slidesPerGroup: 2,
//     },
//     // when window width is >= 480px
//     991: {
//       slidesPerView: 3,
//       spaceBetween: 5,
//       slidesPerGroup: 3,
//     },
//     // when window width is >= 640px
//     1199: {
//       slidesPerView: 5,
//       spaceBetween: 10,
//       slidesPerGroup: 5,
//     }
//   },

// });

// Тоглер скрытия - показа кнопки читать далее
const dataReadNext = document.getElementById('wholesale-list');
function readNext() {
  dataReadNext.classList.toggle('d-none');
}

// Фиксация шапки JQuery

$(function() {
  let header = $('.one_level_header');
  // let rowDost = $('.two_level_header');
  let buttontop = $('.top');
  // let hederHeight = header.height(); // вычисляем высоту шапки
  let hederHeight = 48; 

  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
     header.addClass('header_fixed');
     header.css('margin-top',0);
     header.css('top',0);
    //  header.style.top=0;
    //  rowDost.addClass('d-none');
     buttontop.removeClass('d-none');
  //    $('wrapper').css({
  //     'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
  //  });
    } else {
     header.removeClass('header_fixed');
    //  rowDost.removeClass('d-none');
     buttontop.addClass('d-none');
    //  $('wrapper').css({
    //   'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    //  })
    
    }
  });
 });

//  Затемнение фона при клике  на поиск


