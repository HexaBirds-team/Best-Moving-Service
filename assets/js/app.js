const openseachbar = document.getElementById("openseachbar");
function openseach() {
  openseachbar.classList.add("top-0");
  document.body.classList.add("overflow-hidden");
}
function closeseach() {
  openseachbar.classList.remove("top-0");
  document.body.classList.remove("overflow-hidden");
}
const opennavbar = document.getElementById("opennavbar");
const closeopenbutton = document.getElementById("closeopenbutton");

function navbaropen() {
  closeopenbutton.classList.toggle("openclosebuton");
  opennavbar.classList.toggle("top-0");
  document.body.classList.toggle("overflow-hidden");
}
// function navbarclose() {
//   opennavbar.classList.remove("top-0");
// }

// button js====>
document
  .querySelectorAll(".Get_button")
  .forEach(
    (Get_button) =>
      (Get_button.innerHTML =
        "<div><span>" +
        Get_button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );
document
  .querySelectorAll(".hadding_button")
  .forEach(
    (hadding_button) =>
      (hadding_button.innerHTML =
        "<div><span>" +
        hadding_button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );

// connter js
let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 5);
});

// slick slider js

$(".slider_1").slick({
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
$(".slider_image").slick({
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
$(".slider_show_4").slick({
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});

// BACK TO TOP

var nav = $("#navfixed");

$(window).scroll(function () {
  if ($(window).scrollTop() > 146) {
    nav.addClass("fixed_lg_top");
  } else {
    nav.removeClass("fixed_lg_top");
  }
});


// BACK TO TOP

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "150");
});
