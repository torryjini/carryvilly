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
        imgSrc : "assets/img/product/1.jpg",
        name : "Threads",
        summary : "Illustration",
        price : "4000",
        size : "24",
        details : ""
    },
    {
        hrefNumber : 2,
        imgSrc : "assets/img/product/2.jpg",
        name : "Explore",
        summary : "Graphic Design",
        price : "4000",
        size : "24",
        details : ""
    },
    {
        hrefNumber : 3,
        imgSrc : "assets/img/product/3.jpg",
        name : "Finish",
        summary : "Identity",
        price : "4000",
        size : "24",
        details : ""
    },
    {
        hrefNumber : 4,
        imgSrc : "assets/img/product/4.jpg",
        name : "Lines",
        summary : "Branding",
        price : "4000",
        size : "24",
        details : ""
    },
    {
        hrefNumber : 5,
        imgSrc : "assets/img/product/5.jpg",
        name : "Southwest",
        summary : "Website Design",
        price : "4000",
        size : "24",
        details : ""
    },
    {
        hrefNumber : 6,
        imgSrc : "assets/img/product/6.jpg",
        name : "Window",
        summary : "Photography",
        price : "4000",
        size : "24",
        details : ""
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
          src=${product[i].imgSrc}
          alt="..."
        />
      </a>
      <div class="product-caption">
        <div class="product-caption-heading">${product[i].name}</div>
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
                  <h2 class="text-uppercase">${product[i].name}</h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src=${product[i].imgSrc}
                    alt="..."
                  />
                  <p>
                    ${i+1}번째 상품입니다
                  </p>
                  <ul class="list-inline">
                    <li>
                      <strong>제품명:</strong>
                      ${product[i].name}
                    </li>
                    <li>
                      <strong>제품번호:</strong>
                      00${i+1}
                    </li>
                    <li>
                      <strong>특징:</strong>
                      ${product[i].summary}
                    </li>
                  </ul>
                  <button
                    class="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times me-1"></i>
                    Close Project
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