var listItems = document.querySelectorAll(".layout ul li");
let layout = document.querySelector(".layout");

console.log(listItems);

let selectedValue;

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
    item.style.color = "white";
    selectedValue = item.innerHTML;
  });
});

let rating = document.querySelector(".selected-layout");
let thankyou = document.querySelector(".thankyou");
let submitButton = document.getElementById("submit-button");

submitButton.onclick = function () {
  rating.innerHTML = `You selected ${
    selectedValue == undefined ? 0 : selectedValue
  } out of 5`;
  layout.style.display = "none";
  thankyou.style.display = "flex";
};

let resetSelector = document.querySelector(".thankyou .icon-background");

resetSelector.onclick = function () {
  selectedValue = undefined;
  layout.style.display = "flex";
  thankyou.style.display = "none";
  rating.innerHTML = "";
  listItems.forEach((item) => {
    item.classList.remove("active");
    item.style.color = "";
  });
};
