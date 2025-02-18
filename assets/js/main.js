
 //Navbar Toggle Icon
 function navbar_toggler() {
  $('.navbar-toggler[data-toggle=collapse]').click(function () {
      if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
      } else {
          $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
      }
  });
}
navbar_toggler();

// Navbar Clone In Mobile Device
  function navClone() {
      $('.js-clone-nav').each(function () {
          var $this = $(this);
          $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
      });

      $('.d2c_mobile_view .nav-link').click(function () {
          $(".nav-link").removeClass("active");
          $('.d2c_mobile_view').removeClass('show');
          $(this).toggleClass('active');
      });
  }
navClone();

// Slider JS

$('.d2c_category_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

  
// CountDown JS

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const countdowns = [
    { id: "1", dayMonth: "12/30/" },
    { id: "2", dayMonth: "12/15/" },
    { id: "3", dayMonth: "11/24/" },
    { id: "4", dayMonth: "12/31/" },
    { id: "5", dayMonth: "05/12/" },
    { id: "6", dayMonth: "06/15/" },
    { id: "7", dayMonth: "07/09/" },
    { id: "8", dayMonth: "12/24/" }
  ];

  countdowns.forEach((countdown) => {
    let today = new Date()
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      publish = countdown.dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > publish) {
      publish = countdown.dayMonth + nextYear;
    }

    const countDown = new Date(publish).getTime();

    const x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days" + countdown.id).innerText = Math.floor(distance / day);
      document.getElementById("hours" + countdown.id).innerText = Math.floor((distance % day) / hour);
      document.getElementById("minutes" + countdown.id).innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds" + countdown.id).innerText = Math.floor((distance % minute) / second);

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("days" + countdown.id).innerText = "0";
        document.getElementById("hours" + countdown.id).innerText = "0";
        document.getElementById("minutes" + countdown.id).innerText = "0";
        document.getElementById("seconds" + countdown.id).innerText = "0";
      }
    }, 1000);
  });
})();

// Slider JS
jQuery(document).ready(function($) {
  $('.d2c_marquee_slider').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});

jQuery(document).ready(function($) {
  $('.d2c_marquee_rtl_slider').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl:true
  });
});


// Load More and Explore More Button JS

function updateSliceShow() {
  var windowWidth = $(window).width();
  var $defaultShow, $sliceShow;

  if (windowWidth < 768) {
    $defaultShow = 1;
    $sliceShow = 1;
  } else if (windowWidth < 992) {
    $defaultShow = 2;
    $sliceShow = 2;
  } else if (windowWidth < 1400) {
    $defaultShow = 3;
    $sliceShow = 3;
  } else {
    $defaultShow = 4;
    $sliceShow = 4;
  }

  return [$sliceShow, $defaultShow];
}

function load_more($sectionName = "", $locationCol, $btnParentClass ,$btnId, $defaultShow = 4, $sliceShow = 4) {
  $($locationCol).css("display", "none");
  $($sectionName + " " + $btnParentClass).css("display", "none");

  $($locationCol).slice(0, $defaultShow).fadeIn();
  if ($($locationCol + ":hidden").length != 0) {
    $($sectionName + " " + $btnParentClass).css("display", "flex");

    $($btnId).off("click").on("click", function (e) {
      e.preventDefault();

      $($locationCol + ":hidden").slice(0, $sliceShow).slideDown(500);
      if ($($locationCol + ":hidden").length == 0) {
        $($sectionName + " " + $btnParentClass).css("display", "none");
      }
    });
  }
}

$(document).ready(function () {
  var sliceDefault, sliceShow;

  [sliceShow, sliceDefault] = updateSliceShow();

  $(window).on("resize", function () {
    [sliceShow, sliceDefault] = updateSliceShow();

    load_more(".d2c_action_wrapper", ".explore", ".d2c_explore_btn" ,"#d2c_explore_more", sliceDefault, sliceShow);
    load_more(".d2c_collection_wrapper", ".content", ".d2c_load_more_btn" ,"#d2c_load_more", sliceDefault, sliceShow);
  });

  load_more(".d2c_action_wrapper", ".explore", ".d2c_explore_btn" ,"#d2c_explore_more", sliceDefault, sliceShow);
  load_more(".d2c_collection_wrapper", ".content", ".d2c_load_more_btn" ,"#d2c_load_more", sliceDefault, sliceShow);
});

// Preloader JS

window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
});

// ScrollBtn JS

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.classList.add("show");
  } else {
      scrollBtn.classList.remove("show");
  }
}



// Template Name: {{QuickSilver}}
// Template URL: {{https://www.designtocodes.com/product/quicksilver-nft-bootstrap-one-page-website-template}}
// Description: {{Are you an artist, creator, or collector looking to make a unique online presence for your NFTs? Look no further! Discover the power of QuickSilver - NFT Bootstrap One Page Website Template that will take your digital art display to the next level.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ QuickSilver }}