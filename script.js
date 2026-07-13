/*=========================================================
WHITE HEAVEN LINEN™
JavaScript
Version 5.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
      ELEMENTS
    =====================================================*/

    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const backTop = document.querySelector(".back-top");


    /*=====================================================
      MOBILE MENU
    =====================================================*/

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("show");

        });

    }


    /*=====================================================
      PRODUCTS DROPDOWN
    =====================================================*/

    if (dropdown && dropdownToggle) {

        dropdownToggle.addEventListener("click", function (e) {

            e.preventDefault();

            e.stopPropagation();

            dropdown.classList.toggle("open");

        });

    }


    /*=====================================================
      CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    =====================================================*/

    document.addEventListener("click", function () {

        if (dropdown) {

            dropdown.classList.remove("open");

        }

    });


    /*=====================================================
      ESC KEY CLOSES MENU
    =====================================================*/

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            navMenu.classList.remove("show");

            if (dropdown) {

                dropdown.classList.remove("open");

            }

        }

    });


    /*=====================================================
      CLOSE MOBILE MENU AFTER CLICK
    =====================================================*/

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            if (dropdown) {

                dropdown.classList.remove("open");

            }

        });

    });


    /*=====================================================
      STICKY HEADER
    =====================================================*/

    function stickyHeader() {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    stickyHeader();

    window.addEventListener("scroll", stickyHeader);


    /*=====================================================
      SMOOTH SCROLL
    =====================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /*=====================================================
      FADE-UP ANIMATION
    =====================================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });


    document.querySelectorAll(
        ".feature-card, .collection-card, .icon-card, .stat-card, .cert-card, .card"
    ).forEach(card => {

        observer.observe(card);

    });


    /*=====================================================
      BACK TO TOP BUTTON
    =====================================================*/

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.style.display = "flex";

            } else {

                backTop.style.display = "none";

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*=====================================================
      CURRENT YEAR
    =====================================================*/

    const year = document.querySelector(".year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /*=====================================================
      NEWSLETTER DEMO
    =====================================================*/

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you for subscribing!");

            newsletter.reset();

        });

    }

});