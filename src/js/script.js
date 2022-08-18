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
  $(document.body).addClass('overflow-hidden-cont')

  $('.side-menu').toggleClass('opened');
  if(btnmedia.matches) {
    $('.map ').css('top', $('.side-menu ').outerHeight())
  }

})
// close side-menu
$('.side-menu-close-btn').click(() => {
  $(document.body).removeClass('overflow-hidden-cont')
  $('.side-menu').removeClass('opened');
})
//Menu
$('.header-menu').click(() => {
  $(document.body).addClass('overflow-hidden-menu')
  $('.main-menu').toggleClass('opened');
})
// close menu
$('.main-menu-close-btn').click(() => {
  $(document.body).removeClass('overflow-hidden-menu')
  $('.main-menu').removeClass('opened');
})


// !!!!
// $(document).ready(function(){
//   $("#logoup").click(function(){
//   $('#logoup').toggleClass('move');}
//               });

// if  ( !$("#logoup").hasClass('move') ) {
//        $("#logo").animate({top:"-=200"}, "slow");
//        $(".menu-main").animate({top:"+=50"}, "slow");
//        $("#contact").show(1000);
// }

// } else {
//         $("#logo").animate({top:"+=200"}, "slow"
//         $(".menu-main").animate({top:"-=50"}, "slow");
//         $("#contact").hide(1000);
// }
//     });
// });
// !!!!


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
  var screen768 = window.matchMedia("(max-width:768px)");
  screen768.addListener(changes768);
  changes768(screen768);
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
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7,
            controls: []
        });
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



$('.side-menu-close-btn').click(() => {
  $('.map').removeClass('opened');
})


// Height

