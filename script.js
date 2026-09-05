/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "☾";

        localStorage.setItem("theme", "light");

    }

});


/* Remember theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

}


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("project-modal");

const closeModal =
    document.getElementById("close-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const modalTech =
    document.getElementById("modal-tech");

const modalLink =
    document.getElementById("modal-link");


const projectData = {

    school1: {

        title: "St. Marthia Mulumba School",

        description:
            "A professional school website designed to provide students, parents and visitors with important information about the school, academics, activities and contact details.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        link: "#"

    },


    church1: {

        title: "Ibanda Catholic Church",

        description:
            "A modern church website designed to present parish information, services, announcements, events and ways for members and visitors to get in touch.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        link: "#"

    },


    learn1: {

        title: "Godwin Online Learn",

        description:
            "An educational platform concept designed to organize learning resources, notes, exercises and educational materials for students.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        link: "#"

    },


    business1: {

        title: "Business Website",

        description:
            "A professional business website concept designed to present services, company information and contact details to potential customers.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        link: "#"

    }

};


document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const project =
            projectData[button.dataset.project];


        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;

        modalLink.href =
            project.link;


        modalTech.innerHTML = "";


        project.tech.forEach(technology => {

            const span =
                document.createElement("span");

            span.textContent =
                technology;

            modalTech.appendChild(span);

        });


        modal.classList.add("show");

    });

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    formMessage.textContent =
        "Thank you! Your message has been received.";


    contactForm.reset();

});


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();