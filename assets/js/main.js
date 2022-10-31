(function () {



	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}


	};

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener('click', function () {
      navbarToggler.classList.toggle("active");
  });





    /**
   * Testimonials slider
   */
     new Swiper('.first-slider', {
      speed: 600,
       loop: 0,
      //  grabCursor: true,
      // autoplay: {
      //   delay: 6000,
      //   disableOnInteraction: true
      // },
      slidesPerView: '1',
      // effect: "fade",
      navigation: {
        nextEl: ".btn-right",
        prevEl: ".btn-left",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },

        576: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 13
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 10
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }
    });




})();
