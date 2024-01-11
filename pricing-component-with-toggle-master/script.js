const cards = document.querySelectorAll(".price-card");
const button = document.querySelector(".btn");
let priceType = "yearly";
const price = {
  basic: {
    yearly: 199.99,
    monthly: 19.99,
  },
  professional: {
    yearly: 249.99,
    monthly: 24.99,
  },
  master: {
    yearly: 399.99,
    monthly: 39.99,
  },
};
button.addEventListener("click", () => {
  if (priceType === "yearly") {
    priceType = "monthly";
    button.classList.add("active");
  } else {
    priceType = "yearly";
    button.classList.remove("active");
  }
  cards.forEach((card) => {
    const titlePrice = card.querySelector("h2");
    const name = card.getAttribute("data-name");
    titlePrice.textContent = `$${price[name][priceType]}`;
  });
});