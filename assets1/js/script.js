'use strict';

const addEventOnElem = funtion(elem, type, callback)
{
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }
    else {
        elem.addEbentListener(type, callback)
    }
}



const navTOggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link");

const toggleNavbar = function ()
{
    navbar.classList.toggle("active");
    navTOggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closNavbar = function ()
{
    navbar.classList.remove("active");
    nacToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);