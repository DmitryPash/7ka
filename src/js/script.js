// Initialize Swiper
const topSwiper = new Swiper('.topSwiper', {
    // Optional parameters

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.topSwiper-next',
      prevEl: '.topSwiper-prev',
    },

  });


  let btnmedia =  window.matchMedia("(max-width:1024px)")
// Side Menu
$('.header-contacts-contact').click(() => {
  createmap('map1')
  $(document.body).addClass('overflow-hidden-cont')
  $('.side-menu').addClass('opened-menu');

  $('.main-menu-overlay').addClass('opened');


})
// close side-menu
$('.side-menu-close-btn').click(() => {
  $(document.body).removeClass('overflow-hidden-cont')

  $('.side-menu').removeClass('opened-menu');

  $('.main-menu-overlay').removeClass('opened');
})
//Menu
$('.header-menu').click(() => {
  createmap('map2')
  $(document.body).addClass('overflow-hidden-cont')
  //Анимация меню
$('.main-menu > ul > li').addClass('menu-animate')
  $('.main-menu').addClass('opened-menu');

  $('.main-menu-overlay').addClass('opened');
})
// close menu
$('.main-menu-close-btn').click(() => {
  $(document.body).removeClass('overflow-hidden-cont')
  $('.main-menu').removeClass('opened-menu');
  $('.main-menu > ul > li').removeClass('menu-animate')
  $('.main-menu > ul > li > ul').removeClass('opened')
  $('.main-menu-overlay').removeClass('opened');
})





$(".main-menu li").each(function (key, item) {
    if ($(item).find("ul").length) {
      $(item).addClass("childs-in");
      $(item).find("a:first").append('<i class="childs-toggler" onclick=""></i>');
    }
  });

  $(document).on("click", ".childs-toggler", function (e) {
    e.preventDefault();
    $(this).toggleClass("opened");
    $(this).closest("a").next("ul").toggleClass("opened");

    let childsTogglerd = document.querySelectorAll('ul.opened')

    for(let i = 0; i < childsTogglerd.length; i++) {
      if(childsTogglerd[i].classList[0] === 'opened') {
        childsTogglerd[i].classList.remove('opened')
        $(this).closest("a").next("ul")[0].classList.add('opened')

      }
    }
  });



// specialists slider
  var specialistsSwiper = new Swiper(".swiper-specialists", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-specialists-next',
      prevEl: '.swiper-specialists-prev',
    },
  });




// Change item in services
if (matchMedia) {
  var screen1024 = window.matchMedia("(min-width:1024px)");
  screen1024.addListener(changes1024);
  changes1024(screen1024);
}

if (matchMedia) {
  var screen768 = window.matchMedia("(max-width:768px)");
  screen768.addListener(changes768);
  changes768(screen768);
}
function changes1024(screen1024) {
  if (screen1024.matches) {
    $(".map").appendTo($(".header"));
  } else {
    $(".map").appendTo($(".side-menu"));
  }
}


function changes768(screen768) {
  if (screen768.matches) {
    $(".footer-links-socials").appendTo($(".footer-sections"));
    $(".footer-contacts-time").appendTo($(".footer-sections"));
    $(".footer-links").appendTo($(".footer-contacts"));
  } else {
    $(".footer-links-socials").appendTo($(".footer-links"));
    $(".footer-contacts-time").appendTo($(".footer-contacts"));
    $(".footer-links").appendTo($(".footer-right"));


    $(".footer-links-info").appendTo($(".footer-links"));
  }
}





// Yendex map
function createmap(newmap) {

  if($('#' + newmap).attr('data-status') && $('#' + newmap).attr('data-status') === 'ok') {
    return
  }
  ymaps.ready(init);


  console.log($(newmap).attr('data-status'))
  function init(){
      var myMap = new ymaps.Map(newmap, {
          center: [52.467765, 31.025600],
          zoom: 17,
          controls: [],
      });
      var placemark4 = new ymaps.Placemark([52.467765, 31.025600], {
      })
      myMap.geoObjects
      .add(placemark4);
      myMap.behaviors.disable('scrollZoom');
       $('#' + newmap).attr('data-status', 'ok')
  }
}

// open map

$('.side-menu-map').click(() => {
  $('.map').toggleClass('opened')
  // document.body.style.overflowY = "hidden";
})

$('.header-contacts-contact-icon').click(() => {

  $('.map').addClass('opened')
})



if(btnmedia.matches) {

  $('.header-menu').click(() => {
    $('.map').addClass('opened')

    $('.map ').css('top', $('.main-menu').outerHeight())
  })
  $('.main-menu-close-btn').click(() => {
    $('.map').removeClass('opened')
  })
}


// Скрываем карту
$('.side-menu-close-btn').click(() => {
  $('.map').removeClass('opened');
})

// Убераем отступ у шапки на странице index.html
if(document.querySelector('.top-banner')) {
 window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 1024px)').matches) {
    $('.header').css("margin-bottom", '0px')
  } else {
    $('.header').css("margin-bottom", '50px')
  }
 })
}





