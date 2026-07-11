/*=========================================================
WHITE HEAVEN LINEN™
Main JavaScript
Version 2.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
    MOBILE MENU
    =====================================================*/

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active");

            if (menuToggle.classList.contains("active")) {

                menuToggle.innerHTML = "&times;";

            } else {

                menuToggle.innerHTML = "&#9776;";

            }

        });

    }

    /*=====================================================
    MOBILE DROPDOWN
    =====================================================*/

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        const link = dropdown.querySelector("a");

        if (window.innerWidth <= 991) {

            link.addEventListener("click", function(e) {

                e.preventDefault();

                dropdown.classList.toggle("active");

            });

        }

    });

    /*=====================================================
    CLOSE MOBILE MENU WHEN LINK CLICKED
    =====================================================*/

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 991) {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.innerHTML = "&#9776;";

            }

        });

    });

});

/*=========================================================
STICKY HEADER
=========================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/*=========================================================
ACTIVE MENU
=========================================================*/

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});


/*=========================================================
SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*=========================================================
SCROLL REVEAL
=========================================================*/

const revealItems=document.querySelectorAll(".fade-up");

const revealOnScroll=()=>{

    const trigger=window.innerHeight*0.90;

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);


/*=========================================================
BACK TO TOP BUTTON
=========================================================*/

const backTop=document.querySelector(".back-to-top");

if(backTop){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*=========================================================
FOOTER YEAR
=========================================================*/

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}


/*=========================================================
WINDOW RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>991){

        document.querySelector(".nav-menu")?.classList.remove("active");

        document.querySelector(".menu-toggle")?.classList.remove("active");

        const toggle=document.querySelector(".menu-toggle");

        if(toggle){

            toggle.innerHTML="&#9776;";

        }

        document.querySelectorAll(".dropdown").forEach(item=>{

            item.classList.remove("active");

        });

    }

});
/*=========================================================
ANIMATED STATISTICS COUNTER
=========================================================*/

const counters = document.querySelectorAll(".stat-number");

const animateCounter = (counter) => {

    const target = parseInt(counter.dataset.target);

    if (isNaN(target)) return;

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

        } else {

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => counterObserver.observe(counter));


/*=========================================================
FADE-IN IMAGES
=========================================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

images.forEach(image => {

    image.classList.add("fade-up");

    imageObserver.observe(image);

});


/*=========================================================
KEYBOARD ACCESSIBILITY
=========================================================*/

document.querySelectorAll(".dropdown > a").forEach(link => {

    link.addEventListener("keydown", (e) => {

        if (e.key === "Enter" || e.key === " ") {

            if (window.innerWidth <= 991) {

                e.preventDefault();

                link.parentElement.classList.toggle("active");

            }

        }

    });

});


/*=========================================================
ESC KEY CLOSES MOBILE MENU
=========================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        document.querySelector(".nav-menu")?.classList.remove("active");

        document.querySelector(".menu-toggle")?.classList.remove("active");

        document.querySelectorAll(".dropdown").forEach(item => {

            item.classList.remove("active");

        });

    }

});


/*=========================================================
NAVBAR SHADOW ON SCROLL
=========================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        document.querySelector("header")?.classList.add("shadow");

    } else {

        document.querySelector("header")?.classList.remove("shadow");

    }

});


/*=========================================================
PREVENT EMPTY FORM SUBMISSION
=========================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        const requiredFields = contactForm.querySelectorAll("[required]");

        let valid = true;

        requiredFields.forEach(field => {

            if (!field.value.trim()) {

                valid = false;

                field.style.borderColor = "#d9534f";

            } else {

                field.style.borderColor = "";

            }

        });

        if (!valid) {

            e.preventDefault();

            alert("Please complete all required fields.");

        }

    });

}


/*=========================================================
CONSOLE MESSAGE
=========================================================*/

console.log(
"%cWHITE HEAVEN LINEN™",
"color:#0B5D8C;font-size:18px;font-weight:bold;"
);

console.log(
"%cPremium Textile Solutions Engineered for Quality, Trusted for Performance.",
"color:#163B5C;font-size:13px;"
);
