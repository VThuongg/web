import { renderTable } from "./index.js";
const inputSearch = document.querySelector(".reserach input");
const buttonSearch = document.querySelector(".reserach i");

function searchProduct() {
  let valueSearch = document.getElementById("search").value;
  fetch("https://shop.cyberlearn.vn/api/Product")
    .then((respone) => respone.json())
    .then((data) => {
      let productSearch = data.content.filter((value) => {
        return value.name.toLowerCase().includes(valueSearch.toLowerCase());
      });
      document.querySelectorAll(".item").innerHTML = "";
      renderTable(productSearch);
    });
}

buttonSearch.addEventListener("click", searchProduct);
inputSearch.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    enter.preventDefault();
    searchProduct();
  }
});

const priFi = document.getElementById("priceUnder");
const priFi2 = document.getElementById("priceCenter");
const priFi3 = document.getElementById("priceOver");

priFi.addEventListener("click", function change() {
  fetch("https://shop.cyberlearn.vn/api/Product")
    .then((respone) => respone.json())
    .then((data) => {
      let productSearch = data.content.filter((value) => {
        return value.price <= 400;
      });
      document.querySelectorAll(".item").innerHTML = "";
      renderTable(productSearch);
    });
});

priFi2.addEventListener("click", function change() {
  fetch("https://shop.cyberlearn.vn/api/Product")
    .then((respone) => respone.json())
    .then((data) => {
      let productSearch = data.content.filter((value) => {
        return (value.price > 400 && value.price <= 700);
      });
      document.querySelectorAll(".item").innerHTML = "";
      renderTable(productSearch);
    });
});

priFi3.addEventListener("click", function change() {
  fetch("https://shop.cyberlearn.vn/api/Product")
    .then((respone) => respone.json())
    .then((data) => {
      let productSearch = data.content.filter((value) => {
        return value.price > 700;
      });
      document.querySelectorAll(".item").innerHTML = "";
      renderTable(productSearch);
    });
});

// const genFi = document.getElementById("genderMen");

// genFi.addEventListener("click", function change() {
//     fetch("https://shop.cyberlearn.vn/api/Product")
//       .then((respone) => respone.json())
//       .then((data) => {
//         let productSearch = data.content.category[Men]((value) => {
//           return value.price > 700;
//         });
//         document.querySelectorAll(".item").innerHTML = "";
//         renderTable(productSearch);
//       });
//   });