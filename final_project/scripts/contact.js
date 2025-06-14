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

const products = [
  {
    id: "fc-1888",
    name: "12V Battery",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Small Generator",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Large Generator",
    averagerating: 3.5
  }
];

const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});