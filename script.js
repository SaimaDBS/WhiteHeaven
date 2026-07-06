/* =====================================================
   WHITE HEAVEN LINEN
   JavaScript
   Version 2.0
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================
      MOBILE MENU
    ==========================================*/

    const menuButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("show");

        });

    }


    /*==========================================
      ACTIVE NAVIGATION
    ==========================================*/

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link){

        const page = link.getAttribute("href");

        if(page === currentPage){

            link.classList.add("active");

        }

    });


    /*==========================================
      SMOOTH SCROLL
    ==========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });


    /*==========================================
      FADE IN ANIMATION
    ==========================================*/

    const fadeElements=document.querySelectorAll(

        ".feature-card,.industry-card,.product-card,.stat-card"

    );

    if(fadeElements.length>0){

        const observer=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("fade-up");

                }

            });

        },{

            threshold:0.15

        });

        fadeElements.forEach(el=>observer.observe(el));

    }


    /*==========================================
      CONTACT FORM VALIDATION
    ==========================================*/

    const form=document.querySelector("form");

    if(form){

        form.addEventListener("submit",function(e){

            const required=form.querySelectorAll("[required]");

            let valid=true;

            required.forEach(function(input){

                if(input.value.trim()===""){

                    input.style.borderColor="#d32f2f";

                    valid=false;

                }

                else{

                    input.style.borderColor="#cccccc";

                }

            });

            if(!valid){

                e.preventDefault();

                alert("Please complete all required fields.");

            }

        });

    }


    /*==========================================
      BACK TO TOP BUTTON
    ==========================================*/

    const backTop=document.createElement("div");

    backTop.className="back-top";

    backTop.innerHTML="↑";

    document.body.appendChild(backTop);

    backTop.style.display="none";


    window.addEventListener("scroll",function(){

        if(window.scrollY>400){

            backTop.style.display="flex";

        }

        else{

            backTop.style.display="none";

        }

    });


    backTop.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });


    /*==========================================
      IMAGE HOVER EFFECT
    ==========================================*/

    const images=document.querySelectorAll(".gallery img,.image-grid img");

    images.forEach(function(img){

        img.addEventListener("mouseenter",function(){

            img.style.transform="scale(1.05)";

            img.style.transition=".4s";

        });

        img.addEventListener("mouseleave",function(){

            img.style.transform="scale(1)";

        });

    });


    /*==========================================
      CURRENT YEAR
    ==========================================*/

    const year=document.querySelector(".year");

    if(year){

        year.textContent=new Date().getFullYear();

    }


});