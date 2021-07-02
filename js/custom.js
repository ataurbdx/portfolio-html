/*###############################################
*************************************************

Template Name: Ataur Personal Portfolio

Author: Ataur Rahman

Author Email: ataurrahman.wub@gmail.com

Version: 1.00

*************************************************
###############################################*/


/*###############################################
*************************************************
                    JS INDEX
=================================================



#################################################
************************************************/

const sections = document.querySelectorAll("section");
const NavMenu = document.querySelectorAll("nav li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // if (pageYOffset >= sectionTop - sectionHeight / 3 ) {
    if (pageYOffset >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);

  NavMenu.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});

$(document).ready(function() {
    // window.alert("Hi! Ataur");

    $(".nav_toggler").click(function(){
        $(".side_navbar").toggleClass("show");
        $("body").toggleClass("overflow-hidden");
    })
    $(".side_navbar .nav-item").click(function(){
        $(".side_navbar").removeClass("show");
        $("body").removeClass("overflow-hidden");
    })

    //=======================================
    //        1. HEADER JS START
    //=======================================
    // $('.nav-link').on('click', function () {
    //     $('.nav-link').removeClass('active');
    //     $(this).addClass('active');

    // });
    //=======================================
    //        1. HEADER JS ENDS
    //=======================================

    //=======================================
    //        2. BANNER AREA JS START
    //=======================================

    //Typed js Start
    var typed = new Typed('.element', {
        strings: [
    'Web Designer',
    'Web Developer',
    'Graphics Designer',
    'Professional Singer',
    ],
        stringsElement: null,
        typeSpeed: 100,
        startDelay: 10,
        backSpeed: 50,
        smartBackspace: true,
        shuffle: false,
        backDelay: 700,
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        attr: null,
        bindInputFocusEvents: false,
        contentType: 'html',

    });
    //Typed js Ends

    //=======================================
    //        2. BANNER AREA JS ENDS
    //=======================================

    $(".card_action").click(function(){
        var value = $(this).val();
        $(".section_body_"+value).slideToggle("slow");
        $(this).toggleClass("rotate_up");
    });


    //mixitup js Start for service
    $('.mixit_btn').on('click', function () {
        $('.mixit_btn').removeClass('active');
        $(this).addClass('active');
    });
    var mixer = mixitup('.mixitup_wrap');
    //mixitup js Ends

    //mixitup js Start for work
    $('.mixit_btn_work').on('click', function () {
        $('.mixit_btn_work').removeClass('active');
        $(this).addClass('active');
    });
    var mixer = mixitup('.mixitup_wrap');
    //mixitup js Ends

    //work area js Start
    $('.work_btn').on('click', function () {
        $('.work_btn').removeClass('active');
        $(this).addClass('active');
    });
    //work area js Ends


    //wachivement area js start

    //counter up js start
    $('.counter_up').counterUp({
        delay: 10,
        time: 1000
    });
    //counter up js ends

    //wachivement area js Ends

    //web design barfield jquery start
    $('#html').barfiller({ barColor: 'green', duration: 2000 });
	$('#css').barfiller({ barColor: 'blue', duration: 2000 });
	$('#javascript').barfiller({ barColor: 'purple', duration: 2000 });
	$('#bootstrap').barfiller({ barColor: 'red', duration: 2000 });
    //web design barfield jquery ends

    //web development barfield jquery start
    $('#php').barfiller({ barColor: 'green', duration: 2000 });
	$('#oop').barfiller({ barColor: 'blue', duration: 2000 });
	$('#laravel').barfiller({ barColor: 'purple', duration: 2000 });
	$('#mysql').barfiller({ barColor: 'red', duration: 2000 });
	$('#api').barfiller({ barColor: 'yellow', duration: 2000 });
    //web development barfield jquery ends
    
    //graphic design barfield jquery start
    $('#photoshop').barfiller({ barColor: 'green', duration: 2000 });
	$('#Illustrator').barfiller({ barColor: 'blue', duration: 2000 });
    //graphic design barfield jquery ends

    //song barfield jquery start
    $('#singing').barfiller({ barColor: 'green', duration: 2000 });
	$('#tuning').barfiller({ barColor: 'blue', duration: 2000 });
	$('#lyric').barfiller({ barColor: 'purple', duration: 2000 });
    //song barfield jquery ends

    //soft & special barfield jquery start
    $('#leadership').barfiller({ barColor: 'green', duration: 2000 });
	$('#communication').barfiller({ barColor: 'blue', duration: 2000 });
	$('#team_work').barfiller({ barColor: 'purple', duration: 2000 });
	$('#speciality').barfiller({ barColor: 'red', duration: 2000 });
	$('#video_editing').barfiller({ barColor: 'yellow', duration: 2000 });
	$('#ms_office').barfiller({ barColor: 'black', duration: 2000 });
    //soft & special barfield jquery ends

    //language barfield jquery start
    $('#bangla').barfiller({ barColor: 'green', duration: 2000 });
	$('#english').barfiller({ barColor: 'blue', duration: 2000 });
	$('#arabic').barfiller({ barColor: 'purple', duration: 2000 });
    //language barfield jquery ends

    //my education area js Start
    $('.education_btn').on('click', function () {
        $('.education_btn').removeClass('active');
        $(this).addClass('active');
    });
    //my education area js Ends

    //Slick Slider js Start
    $(".certificate_wrap").slick({
        arrow: true,
        prevArrow: ".left_arrow",
        nextArrow: ".right_arrow",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    //Slick Slider js Ends

    //venobox start
     $('.certificate_item').venobox({
        spinner:"three-bounce",
        numeratio: true,
    }); 
    //venobox end

    //my experience area js Start
    $('.experience_btn').on('click', function () {
        $('.experience_btn').removeClass('active');
        $(this).addClass('active');
    });
    //my experience area js Ends

    //Slick Slider js Start
    $(".client_wrap").slick({
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    //Slick Slider js Ends

    //Slick Slider js Start
    $(".testimonial_wrap").slick({
        arrow: true,
        prevArrow: ".left_arrow_testimonial",
        nextArrow: ".right_arrow_testimonial",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    //Slick Slider js Ends

    //gallery area js Start
    $('.gallery_btn').on('click', function () {
        $('.gallery_btn').removeClass('active');
        $(this).addClass('active');
    });
    //gallery area js Ends
    
    //gallery album area js Start
    $('.album_button').on('click', function () {
        $('.album_button').removeClass('active');
        $(this).addClass('active');
    });
    //gallery album area js Ends

    // //light gallery js Start
    // jQuery("#lightgallery")
    // .justifiedGallery({
    //     captions: false,
    //     lastRow: "hide",
    //     rowHeight: 180,
    //     margins: 5
    // })
    // .on("jg.complete", function () {
    //     window.lightGallery(
    //     document.getElementById("lightgallery"),
    //     {
    //         autoplayFirstVideo: false,
    //         pager: true,
    //         galleryId: "nature",
    //         plugins: [lgZoom, lgThumbnail],
    //         mobileSettings: {
    //         controls: true,
    //         showCloseIcon: true,
    //         download: true,
    //         rotate: true
    //         }
    //     }
    //     );
    // });

    // //light gallery js Ends






});







//Raw Javascript code are here

//my works js start
function openPage(pageName) {
  var i, work_item, work_btn;
  work_item = document.getElementsByClassName("work_item");
  for (i = 0; i < work_item.length; i++) {
    work_item[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();
//my work js ends

//my education js start
function openEducation(Education) {
  var i, education_item;
  education_item = document.getElementsByClassName("education_item");
  for (i = 0; i < education_item.length; i++) {
    education_item[i].style.display = "none";
  }
  document.getElementById(Education).style.display = "block";
}
document.getElementById("active_education").click();
//myeducation js ends

//my experience js start
function openExperience(Experience) {
  var i, experience_item;
  experience_item = document.getElementsByClassName("experience_item");
  for (i = 0; i < experience_item.length; i++) {
    experience_item[i].style.display = "none";
  }
  document.getElementById(Experience).style.display = "block";
}
document.getElementById("active_experience").click();
//my experience js ends

//gallery js start
function openGallery(Gallery) {
  var i, gallery_item;
  gallery_item = document.getElementsByClassName("gallery_item");
  for (i = 0; i < gallery_item.length; i++) {
    gallery_item[i].style.display = "none";
  }
  document.getElementById(Gallery).style.display = "block";
}
document.getElementById("active_gallery").click();
//gallery js ends

//gallery js start
function openAlbum(Album) {
  var i, album_item;
  album_item = document.getElementsByClassName("album_item");
  for (i = 0; i < album_item.length; i++) {
    album_item[i].style.display = "none";
  }
  document.getElementById(Album).style.display = "block";
}
document.getElementById("active_album").click();
//gallery js ends

//light gallery js starts
lightGallery(document.getElementById('LightGallery_All_Gallery'), {
    plugins: [lgZoom, lgThumbnail, lgShare],
    mode: 'fade',
    speed: 500,
    thumbnail: true,

    // animateThumb: true,
    // zoomFromOrigin: true,
    // allowMediaOverlap: false,
    // toggleThumb: true,

});

lightGallery(document.getElementById('LightGallery_Tour_Album'), {
    plugins: [lgZoom, lgThumbnail, lgShare],
    mode: 'fade',
    speed: 500,
    thumbnail: true,
});

lightGallery(document.getElementById('LightGallery_Blog_Album'), {
    plugins: [lgZoom, lgThumbnail, lgShare],
    mode: 'fade',
    speed: 500,
    thumbnail: true,
});

lightGallery(document.getElementById('LightGallery_Video_Album'), {
    plugins: [lgZoom, lgThumbnail, lgShare],
    mode: 'fade',
    speed: 500,
    thumbnail: true,
});
//light gallery js ends


