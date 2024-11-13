
// click menu hiện box menu lên
const menu = document.querySelector(".header__menu-mobile");
menu.addEventListener("click", () => {
    const menuShow = document.querySelector(".menuShow");
    menuShow.style.display = "block";
    //clicl x thì ẩn
    const cancel = document.querySelector(".menuShow-top i");
    cancel.addEventListener("click", () => {
        menuShow.style.display = "none";
    }); 
    //click box-overlay thi ẩn
    const boxOverlay = document.querySelector(".menuShow__box-overlay");
    boxOverlay.addEventListener("click", () => {
        menuShow.style.display = "none";
    })
    //click menu thi ẩn
    const menuDesc = document.querySelector(".menuShow-top .desc");
    menuDesc.addEventListener("click", () => {
        menuShow.style.display = "none";
    })
});



// Khởi tạo thư viện AOS hộ trợ animation chuyển động
AOS.init();


// Khởi tạo thư viện swipper js section-4
var swiper = new Swiper(".swipper-blog", {
    // mặc định
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 767.98px
        767.98: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // đối với màn >= 540
        450: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


// section-6
var swiper = new Swiper(".swipper-thumb", {
    // mặc định
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        // đối với màn >= 540
        450: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        300: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        250: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
// End section-6




// Khởi tạo Viewer
const gallery = new Viewer(document.getElementById('image'));


