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

const orderLink = document.querySelectorAll(".order-link");

window.onload = function(){
    const content = `
        가격은 하루 대여 가격이며 대여 당일부터 청구됩니다.
        원하는 크기의 캐리어를 무작위로 받으시면 첫 날의 대여비용이 청구되지 않습니다!
        대여 최소 3일 전에 주문 부탁드리며 당일 예약 시 취소 및 환불이 불가합니다. 
        반납일 오후 2시 전까지 반납이 원칙이며 초과시간에 따라 추가비용이 부과됩니다.`
     
    for(i=0;i<orderLink.length;i++){
        if(orderLink[i].href == blankUrl){
            orderLink[i].addEventListener("click", function(){
                swal("현재 대여가 불가합니다!", "", "error")
            })
        } else {
            orderLink[i].addEventListener("click", function(){
                swal("이용안내", content, "info").then(okay => {
                    window.open("order.html")
                })  
            })
        }
    }
}
