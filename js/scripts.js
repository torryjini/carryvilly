/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const product = [
    {
        hrefNumber : 1,
        thumbnail : "assets/img/product/thumbnail/001.jpg",
        imgSrc : "assets/img/product/001.jpg",
        summary : "기내용",
        price : "3,000",
        size : "24",
        details : "",
        status : "대여가능",
        wheels : "4"
    },
    {
        hrefNumber : 2,
        thumbnail : "assets/img/product/thumbnail/002.jpg",
        imgSrc : "assets/img/product/002.jpg",
        summary : "기내용",
        price : "3,000",
        size : "24",
        details : "",
        status : "대여가능",
        wheels : "4"
    },
    {
        hrefNumber : 3,
        thumbnail : "assets/img/product/thumbnail/003.jpg",
        imgSrc : "assets/img/product/003.jpg",
        summary : "화물용",
        price : "4,000",
        size : "28",
        details : "",
        status : "대여가능",
        wheels : "4"
    },
    {
        hrefNumber : 4,
        thumbnail : "assets/img/product/thumbnail/004.jpg",
        imgSrc : "assets/img/product/004.jpg",
        summary : "기내용",
        price : "3,000",
        size : "24",
        details : "",
        status : "대여가능",
        wheels : "4"
    },
    {
        hrefNumber : 5,
        thumbnail : "assets/img/product/thumbnail/005.jpg",
        imgSrc : "assets/img/product/005.jpg",
        summary : "기내용",
        price : "2,000",
        size : "24",
        details : "",
        status : "대여가능",
        wheels : "4"
    },
    {
        hrefNumber : 6,
        thumbnail : "assets/img/product/thumbnail/006.jpg",
        imgSrc : "assets/img/product/006.jpg",
        summary : "기내용",
        price : "2,000",
        size : "24",
        details : "",
        status : "대여가능",
        wheels : "4"
    },
    {
      hrefNumber : 7,
      thumbnail : "assets/img/product/thumbnail/007.jpg",
      imgSrc : "assets/img/product/007.jpg",
      summary : "기내용",
      price : "2,000",
      size : "24",
      details : "",
      status : "대여가능",
      wheels : "2"
  },
  {
    hrefNumber : 8,
    thumbnail : "assets/img/product/thumbnail/008.jpg",
    imgSrc : "assets/img/product/008.jpg",
    summary : "화물용",
    price : "3,000",
    size : "28",
    details : "",
    status : "대여가능",
    wheels : "4"
  },
  {
    hrefNumber : 9,
    thumbnail : "assets/img/product/thumbnail/009.jpg",
    imgSrc : "assets/img/product/009.jpg",
    summary : "기내용",
    price : "3,000",
    size : "24",
    details : "",
    status : "대여가능",
    wheels : "4"
  },
  {
    hrefNumber : 10,
    thumbnail : "assets/img/product/thumbnail/010.jpg",
    imgSrc : "assets/img/product/010.jpg",
    summary : "미니캐리어",
    price : "2,000",
    size : "mini",
    details : "",
    status : "대여가능",
    wheels : "0"
  },
  {
    hrefNumber : 11,
    thumbnail : "assets/img/product/thumbnail/011.jpg",
    imgSrc : "assets/img/product/011.jpg",
    summary : "미니캐리어",
    price : "2,000",
    size : "mini",
    details : "",
    status : "대여가능",
    wheels : "0"
  },
]

for(let i = 0; i < product.length; i++){
    document.querySelector("#product-list").innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
    <!-- product item ${i+1}-->
    <div class="product-item">
      <a
        class="product-link"
        data-bs-toggle="modal"
        href="#productModal${i+1}"
      >
        <div class="product-hover">
          <div class="product-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img
          class="img-fluid"
          src=${product[i].thumbnail}
          alt="..."
        />
      </a>
      <div class="product-caption">
        <div class="product-caption-heading">[${product[i].status}] No.${i+1}_${product[i].price}원</div>
        <div class="product-caption-subheading text-muted">
        ${product[i].summary}
        </div>
      </div>
    </div>
  </div>
    `
    document.querySelector(".modal-list").innerHTML += `
    <!-- product item ${i+1} modal popup-->
    <div
      class="product-modal modal fade"
      id="productModal${i+1}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-bs-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project summary-->
                  <h2 class="text-uppercase">[${product[i].status}] No.${i+1}</h2>
                  <br>
                  <!--<p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>-->
                  <img
                    class="img-fluid d-block mx-auto"
                    src=${product[i].imgSrc}
                    alt="..."
                  />
                    <h3>가격 : 하루 ${product[i].price}원</h3>
                    <h3>사이즈 : ${product[i].summary}</h3>
                    <h3>특징 : ${product[i].details}</h3>
                    <h4>현재는 문자로만 주문 가능하며<br>한국외대, 경희대 근처에서만 거래 가능합니다.<br>양해 부탁 드립니다.</h4>
                    <br>
                  <a href="sms:010-9941-0158">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      type="button"
                    >
                      주문하기
                    </button>
                  </a>
                  <button
                    class="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times me-1"></i>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}