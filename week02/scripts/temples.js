const short = document.querySelector("#short");
const year = document.querySelector("#year")

const today = new Date();

const time = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
}).format(today);

short.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)}  ${time}</,span>`;

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;



const nav = document.querySelector('nav');
const hamburger_button = document.querySelector(".hamburger");

hamburger_button.addEventListener('click', () => {
    nav.toggleAttribute("open");
    hamburger_button.toggleAttribute("open");
})

