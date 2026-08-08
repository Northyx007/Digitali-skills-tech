/* =====================================================
   DIGITAL SKILLS - COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   COURSE DATA
===================================================== */

const defaultCourses = [

    {
        name: "Web Design & Development",
        desc: "Jifunze HTML, CSS, JavaScript na React kutoka mwanzo",
        time: "Miezi 3",
        link: "https://www.youtube.com/playlist?list=PL4RjWH6yHwLweK1v5Z1cP0R9k4s1w3k4Z",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    },

    {
        name: "Graphic Design Pro",
        desc: "Kamili ya Canva, Photoshop na Illustrator kwa ajili ya biashara",
        time: "Miezi 2",
        link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo",
        img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800"
    },

    {
        name: "Digital Marketing Masterclass",
        desc: "Facebook Ads, Google Ads, SEO na TikTok Marketing",
        time: "Miezi 2",
        link: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGfAUdIXs2z4D7L6uA6j2d1E",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },

    {
        name: "Video Editing & Content Creation",
        desc: "CapCut, Premiere Pro na mbinu za YouTube",
        time: "Mwezi 1.5",
        link: "https://www.youtube.com/playlist?list=PL0vfts4VzfN0NFVQaN7K7J0K1o1k2l3m4",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800"
    },

    {
        name: "Data Analysis & Excel",
        desc: "Excel ya kitaaluma, Power BI na Google Sheets",
        time: "Miezi 2",
        link: "https://www.youtube.com/playlist?list=PLj-4DlPRTlaQk4qO0n8bT2v0k6m7n8o9p",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },

    {
        name: "Mobile App Development",
        desc: "Tengeneza App za Android na iOS kwa kutumia Flutter",
        time: "Miezi 4",
        link: "https://www.youtube.com/playlist?list=PL4RjWH6yHwLnYf5I9R9j1v2w3x4y5z6a7",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
    },

    {
        name: "Cyber Security Basics",
        desc: "Jifunze kulinda data, akaunti na mitandao yako",
        time: "Miezi 2",
        link: "https://www.youtube.com/playlist?list=PLBf0hzazHTGOwObnVhWywqE_Aoh8wM4E5",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    },

    {
        name: "AI & ChatGPT for Business",
        desc: "Tumia AI kuandika, kubuni na kuongeza tija kazini",
        time: "Mwezi 1",
        link: "https://www.youtube.com/playlist?list=PLQdO-6y9o9sFq4x1v2w3e4r5t6y7u8i9o",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },

    {
        name: "Freelancing & Online Jobs",
        desc: "Jinsi ya kupata $1000+ kwa mwezi Upwork na Fiverr",
        time: "Mwezi 1",
        link: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiIXVR2idEYy3u",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
    },

    {
        name: "Computer Packages - MS Office",
        desc: "Word, Excel na PowerPoint kwa ngazi ya kitaaluma",
        time: "Mwezi 1",
        link: "https://www.youtube.com/playlist?list=PLT0qO3V0N0K7V8W9X0Y1Z2A3B4C5D6E7F",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
    }

];


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    sw: {

        home: "Nyumbani",
        courses: "Kozi",
        about: "Kuhusu Sisi",
        contact: "Wasiliana",
        login: "Ingia",
        signup: "Jisajili",

        language: "Lugha",
        font: "Font",

        badge: "Digital Skills Academy",

        heroTitle:
            "Jenga Ujuzi Wako wa Kidigitali",

        heroText:
            "Jifunze Digital Skills zinazotajwa sokoni na anza kupata kipato mtandaoni.",

        startNow:
            "Anza Sasa →",

        freeSignup:
            "Jisajili Bure",

        aboutTag:
            "KUHUSU SISI",

        aboutTitle:
            "Kuhusu Digital Skills",

        aboutText:
            "Tunawaandaa vijana wa Tanzania kwa ujuzi wa kidigitali wa vitendo. Lengo letu ni kuona kila mwanafunzi anapata ajira, anajiajiri au anaanzisha biashara yake kupitia teknolojia.",

        jobs:
            "Ajira",

        jobsText:
            "Jenga skills zinazohitajika kwenye soko la ajira la kisasa.",

        selfEmployment:
            "Kujiajiri",

        selfEmploymentText:
            "Tumia digital skills kujiajiri na kupata kipato mtandaoni.",

        innovation:
            "Ubunifu",

        innovationText:
            "Tumia teknolojia kutengeneza solutions zinazotatua changamoto.",

        welcome:
            "Karibu Digital Skills",

        accountText:
            "Ingia au tengeneza akaunti mpya.",

        email:
            "Email",

        password:
            "Password",

        remember:
            "Nikumbuke",

        fullName:
            "Jina Kamili",

        confirmPassword:
            "Confirm Password",

        coursesTag:
            "JIFUNZE",

        coursesTitle:
            "Kozi Zetu 10 za Digital Skills",

        coursesText:
            "Chagua kozi inayokufaa na anza safari yako ya kujenga ujuzi wa kidigitali.",

        question:
            "Una swali au unahitaji msaada zaidi?",

        help:
            "Tupo tayari kukusaidia kuanza safari yako ya Digital Skills.",

        whatsapp:
            "Wasiliana Nasi WhatsApp: 0697 946 177",

        rights:
            "All Rights Reserved."

    },


    en: {

        home: "Home",
        courses: "Courses",
        about: "About Us",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",

        language: "Language",
        font: "Font",

        badge: "Digital Skills Academy",

        heroTitle:
            "Build Your Digital Skills",

        heroText:
            "Learn in-demand digital skills and start earning money online.",

        startNow:
            "Start Now →",

        freeSignup:
            "Sign Up Free",

        aboutTag:
            "ABOUT US",

        aboutTitle:
            "About Digital Skills",

        aboutText:
            "We prepare young people in Tanzania with practical digital skills. Our goal is to help every student get a job, become self-employed, or start their own business through technology.",

        jobs:
            "Employment",

        jobsText:
            "Build skills that are needed in today's job market.",

        selfEmployment:
            "Self Employment",

        selfEmploymentText:
            "Use digital skills to become self-employed and earn online.",

        innovation:
            "Innovation",

        innovationText:
            "Use technology to create solutions that solve real problems.",

        welcome:
            "Welcome to Digital Skills",

        accountText:
            "Login or create a new account.",

        email:
            "Email",

        password:
            "Password",

        remember:
            "Remember me",

        fullName:
            "Full Name",

        confirmPassword:
            "Confirm Password",

        coursesTag:
            "LEARN",

        coursesTitle:
            "Our 10 Digital Skills Courses",

        coursesText:
            "Choose a course that fits you and start building your digital skills.",

        question:
            "Have a question or need more help?",

        help:
            "We are ready to help you start your Digital Skills journey.",

        whatsapp:
            "Contact Us on WhatsApp: 0697 946 177",

        rights:
            "All Rights Reserved."

    }

};


/* =====================================================
   LOCAL STORAGE
===================================================== */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("users") || "[]"
    );

}

function saveUsers(users) {

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}


function getCourses() {

    const saved =
        localStorage.getItem("courses");

    if (saved) {

        return JSON.parse(saved);

    }

    localStorage.setItem(
        "courses",
        JSON.stringify(defaultCourses)
    );

    return [...defaultCourses];

}


function saveCourses(courses) {

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

}


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const languageSelect =
    document.getElementById("languageSelect");


function applyLanguage(language) {

    const dictionary =
        translations[language];

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            if (dictionary[key]) {

                element.textContent =
                    dictionary[key];

            }

        });


    document.documentElement.lang =
        language;


    localStorage.setItem(
        "language",
        language
    );

}


const savedLanguage =
    localStorage.getItem("language") || "sw";


languageSelect.value =
    savedLanguage;


applyLanguage(savedLanguage);


languageSelect.addEventListener(
    "change",
    function() {

        applyLanguage(
            this.value
        );

    }
);


/* =====================================================
   FONT SYSTEM
===================================================== */

const fontSelect =
    document.getElementById("fontSelect");


function applyFont(font) {

    document.documentElement
        .style
        .setProperty(
            "--heading-font",
            `"${font}", sans-serif`
        );

    document.documentElement
        .style
        .setProperty(
            "--body-font",
            `"${font}", sans-serif`
        );

    document.documentElement
        .style
        .setProperty(
            "--display-font",
            `"${font}", sans-serif`
        );


    localStorage.setItem(
        "siteFont",
        font
    );

}


const savedFont =
    localStorage.getItem(
        "siteFont"
    ) || "Space Grotesk";


fontSelect.value =
    savedFont;


applyFont(savedFont);


fontSelect.addEventListener(
    "change",
    function() {

        applyFont(
            this.value
        );

    }
);


/* =====================================================
   SETTINGS DROPDOWN
===================================================== */

const settingsBtn =
    document.getElementById(
        "settingsBtn"
    );

const settingsDropdown =
    document.getElementById(
        "settingsDropdown"
    );


settingsBtn.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        settingsDropdown
            .classList
            .toggle("show");

    }
);


document.addEventListener(
    "click",
    function(event) {

        if (
            !settingsDropdown.contains(
                event.target
            ) &&
            event.target !== settingsBtn
        ) {

            settingsDropdown
                .classList
                .remove("show");

        }

    }
);


/* =====================================================
   HAMBURGER
===================================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const closeMenu =
    document.getElementById(
        "closeMenu"
    );

const sideMenu =
    document.getElementById(
        "sideMenu"
    );

const overlay =
    document.getElementById(
        "overlay"
    );


function openMenu() {

    sideMenu.classList.add("open");

    overlay.classList.add("show");

}


function closeSideMenu() {

    sideMenu.classList.remove("open");

    overlay.classList.remove("show");

}


menuBtn.addEventListener(
    "click",
    openMenu
);

closeMenu.addEventListener(
    "click",
    closeSideMenu
);

overlay.addEventListener(
    "click",
    closeSideMenu
);


document
    .querySelectorAll(".side-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeSideMenu
        );

    });


/* =====================================================
   LOGIN / SIGNUP TABS
===================================================== */

const tabs =
    document.querySelectorAll(
        ".tab"
    );

const loginForm =
    document.getElementById(
        "loginForm"
    );

const signupForm =
    document.getElementById(
        "signupForm"
    );


tabs.forEach(tab => {

    tab.addEventListener(
        "click",
        function() {

            tabs.forEach(t =>
                t.classList.remove(
                    "active"
                )
            );

            this.classList.add(
                "active"
            );

            const target =
                this.dataset.tab;


            if (
                target ===
                "loginForm"
            ) {

                loginForm
                    .classList
                    .remove("hidden");

                signupForm
                    .classList
                    .add("hidden");

            } else {

                signupForm
                    .classList
                    .remove("hidden");

                loginForm
                    .classList
                    .add("hidden");

            }

        }
    );

});


/* =====================================================
   REMEMBER ME
===================================================== */

const rememberedEmail =
    localStorage.getItem(
        "rememberedEmail"
    );

const rememberedPassword =
    localStorage.getItem(
        "rememberedPassword"
    );


if (rememberedEmail) {

    document.getElementById(
        "loginEmail"
    ).value =
        rememberedEmail;

    document.getElementById(
        "rememberMe"
    ).checked = true;

}

if (rememberedPassword) {

    document.getElementById(
        "loginPassword"
    ).value =
        rememberedPassword;

}


/* =====================================================
   SIGNUP
===================================================== */

signupForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "signupName"
            ).value.trim();

        const email =
            document.getElementById(
                "signupEmail"
            ).value.trim();

        const password =
            document.getElementById(
                "signupPassword"
            ).value;

        const confirm =
            document.getElementById(
                "confirmPassword"
            ).value;

        const message =
            document.getElementById(
                "signupMessage"
            );


        if (
            password !== confirm
        ) {

            message.textContent =
                "Password hazifanani.";

            message.style.color =
                "#dc2626";

            return;

        }


        let users =
            getUsers();


        const exists =
            users.some(
                user =>
                    user.email
                        .toLowerCase() ===
                    email.toLowerCase()
            );


        if (exists) {

            message.textContent =
                "Email hii tayari imesajiliwa.";

            message.style.color =
                "#dc2626";

            return;

        }


        users.push({

            id: Date.now(),

            name: name,

            email: email,

            password: password,

            date:
                new Date()
                    .toLocaleString(
                        "sw-TZ"
                    )

        });


        saveUsers(users);


        message.textContent =
            "Usajili umefanikiwa!";

        message.style.color =
            "#16a34a";


        signupForm.reset();

        renderStudents();

        updateStats();


        setTimeout(
            function() {

                document
                    .querySelector(
                        '[data-tab="loginForm"]'
                    )
                    .click();

            },
            1000
        );

    }
);


/* =====================================================
   LOGIN
===================================================== */

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "loginEmail"
            ).value.trim();

        const password =
            document.getElementById(
                "loginPassword"
            ).value;

        const remember =
            document.getElementById(
                "rememberMe"
            ).checked;

        const message =
            document.getElementById(
                "loginMessage"
            );


        const users =
            getUsers();


        const user =
            users.find(
                u =>
                    u.email
                        .toLowerCase() ===
                    email.toLowerCase() &&
                    u.password ===
                    password
            );


        if (!user) {

            message.textContent =
                "Email au Password si sahihi.";

            message.style.color =
                "#dc2626";

            return;

        }


        if (remember) {

            localStorage.setItem(
                "rememberedEmail",
                email
            );

            localStorage.setItem(
                "rememberedPassword",
                password
            );

        } else {

            localStorage.removeItem(
                "rememberedEmail"
            );

            localStorage.removeItem(
                "rememberedPassword"
            );

        }


        message.textContent =
            `Karibu ${user.name}! Umefanikiwa kuingia.`;

        message.style.color =
            "#16a34a";

    }
);


/* =====================================================
   COURSES
===================================================== */

function renderCourses() {

    const grid =
        document.getElementById(
            "coursesGrid"
        );

    const courses =
        getCourses();


    grid.innerHTML = "";


    courses.forEach(
        function(course) {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "course-card";


            card.innerHTML = `

                <img
                    src="${course.img}"
                    alt="${course.name}"
                    class="course-image"
                    loading="lazy"
                >

                <div class="course-body">

                    <h3>
                        ${course.name}
                    </h3>

                    <p>
                        ${course.desc}
                    </p>

                    <span class="course-time">
                        ⏱ ${course.time}
                    </span>

                    <a
                        href="${course.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="course-button">
                        Anza Kujifunza →
                    </a>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


renderCourses();


/* ===========
