let counterValue = 0;

const decrementCount = document.querySelector("[data-action ='decrement']");
const incrementCount = document.querySelector("[data-action ='increment']");
const totalValue = document.querySelector("#value");

decrementCount.addEventListener("click", () => {
  counterValue = counterValue - 1;
  totalValue.textContent = counterValue;
});

incrementCount.addEventListener("click", () => {
  counterValue = counterValue + 1;
  totalValue.textContent = counterValue;
});
