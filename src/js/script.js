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
  $('.side-menu').addClass('opened');
  $('.main-menu-overlay').addClass('opened');
  if(btnmedia.matches) {
    $('.map ').css('top', $('.side-menu ').outerHeight() - 150)
  }

})
// close side-menu
$('.side-menu-close-btn').click(() => {
  $(document.body).removeClass('overflow-hidden-cont')
  $('.side-menu').removeClass('opened');
  $('.main-menu-overlay').removeClass('opened');
})
//Menu
$('.header-menu').click(() => {
  createmap('map2')
  $(document.body).addClass('overflow-hidden-menu')
  $('.main-menu').addClass('opened');
  $('.main-menu-overlay').addClass('opened');

  if(btnmedia.matches) {
    $('.map-main-menu ').css('top', $('.side-menu').outerHeight() - 150)
  }
})
// close menu
$('.main-menu-close-btn').click(() => {
  $(document.body).removeClass('overflow-hidden-menu')
  $('.main-menu').removeClass('opened');
  $('.main-menu-overlay').removeClass('opened');
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




// zxc = id дива на который вешается карта
// Yendex map
function createmap(newmap) {
  if($(newmap).attr('data-status') && $(newmap).attr('data-status') === 'ok') {
    return
  }
  ymaps.ready(init);
  $(newmap).attr('data-status', 'ok')
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



$('.side-menu-close-btn').click(() => {
  $('.map').removeClass('opened');
})


// Height

