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



const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link");

const toggleNavbar = function ()
{
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closNavbar = function ()
{
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function ()
{
    if (window.scrollY > 100)
    {
        header.classList.add("active");
    }
    else 
    {
        header.classList.remove("active");   
    }
}

addEventOnElem(window, "scroll", activeElementOnScroll);