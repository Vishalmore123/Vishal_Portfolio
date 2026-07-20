const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});
/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*=========================================
        MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        TYPING EFFECT
=========================================*/

const roles = [

    "Data Analyst",

    "Power BI Developer",

    "SQL Developer",

    "Python Developer",

    "Web Developer",

    "Software Developer"

];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 45 : 90);

}

typingEffect();


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
        HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero");
const profile = document.querySelector(".profile");
const laptop = document.querySelector(".laptop");

if(hero){

hero.addEventListener("mousemove", (e)=>{

    const x = (window.innerWidth/2 - e.clientX)/40;
    const y = (window.innerHeight/2 - e.clientY)/40;

    if(profile){

        profile.style.transform =
        `translate(${x}px,${y}px)`;

    }

    if(laptop){

        laptop.style.transform =
        `translate(${x/2}px,${y/2}px)`;

    }

});

}


/*=========================================
        PARTICLES
=========================================*/

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js",{

    particles:{

        number:{value:70},

        color:{value:"#00E5FF"},

        shape:{type:"circle"},

        opacity:{value:0.5},

        size:{value:3},

        move:{

            enable:true,

            speed:2

        },

        line_linked:{

            enable:true,

            distance:150,

            color:"#7B2FF7",

            opacity:0.3

        }

    },

    interactivity:{

        events:{

            onhover:{

                enable:true,

                mode:"grab"

            }

        }

    }

});

}
/*====================================
        SCROLL REVEAL
====================================*/

const revealElements = document.querySelectorAll(
".timeline-item, .achievement-card, .stat-card, .info-item"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach(item=>{

    revealObserver.observe(item);

});
/*====================================
        SCROLL REVEAL
====================================*/

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/*====================================
        Skills Animation
====================================*/

const skillSection = document.querySelector(".skills");

const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            progressBars.forEach(bar=>{

                const width = bar.classList.contains("sql") ? "95%" :
                              bar.classList.contains("powerbi") ? "90%" :
                              bar.classList.contains("python") ? "88%" :
                              bar.classList.contains("tableau") ? "85%" :
                              bar.classList.contains("excel") ? "95%" : "80%";

                bar.style.width = width;

            });

        }

    });

});

if(skillSection){

    skillObserver.observe(skillSection);

}
/*====================================
        Project Animation
====================================*/

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

projectCards.forEach(card=>{

    projectObserver.observe(card);

});
/* Contact Animation */

const contactCards = document.querySelectorAll(".contact-card");

const contactObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

contactCards.forEach(card=>{

contactObserver.observe(card);

});
/*==============================
        LOADER
==============================*/

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

/*==============================
        TOP BUTTON
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==============================
        DARK MODE
==============================*/

const theme=document.getElementById("theme-toggle");

theme.onclick=()=>{

document.body.classList.toggle("light-theme");

};