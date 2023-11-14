// /* Product Render List */
//import Product from '../model/Product.js'
// const product = new Product()
// product.getProductList('.product .content')

/* Check Login, Logout */
// import { checkLogin, logOut } from '../utils/method.js'
// checkLogin()
// logOut(

import { dataProduct } from "../assets/data/data.js";

let start = 0;
let perPage = 6;
let currentPage = 1;
let end = perPage;
let totalPage = Math.ceil(dataProduct.length / perPage);
const btnNext = document.querySelector(".btn-next");
const btnPre = document.querySelector(".btn-previous");

btnNext.addEventListener("click", () => {
  currentPage++;
  btnPre.style.color = "black";
  if (currentPage >= totalPage) {
    currentPage = totalPage;
    btnNext.style.color = "gray";
  }
  start = (currentPage - 1) * perPage;
  end = perPage * currentPage;
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });

  promise.then(function (res) {
    renderTable(res.data.content);
  });
});

btnPre.addEventListener("click", () => {
  currentPage--;
  btnNext.style.color = "black";
  if (currentPage <= 1) {
    currentPage = 1;
    btnPre.style.color = "gray";
  }
  start = (currentPage - 1) * perPage;
  end = perPage * currentPage;
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });

  promise.then(function (res) {
    renderTable(res.data.content);
  });
});

function renderListPage() {
  let htmls = "";
  htmls += `
  <li>
  <a href="#" class="active">${1}</a>
  </li>
`;
  for (let i = 2; i <= totalPage; i++) {
    htmls += `
      <li>
      <a href="#">${i}</a>
      </li>
    `;
  }
  document.getElementById("number-page").innerHTML = htmls;
}

renderListPage();

export function changePage() {
  const changePages = document.querySelectorAll(".number-page li a");

  for (let i = 0; i < changePages.length; i++) {
    changePages[i].addEventListener("click", () => {
      changePages[i].classList.add("active");
      for(let index = 0; index < changePages.length; index++) {
        if(index != i) {
          console.log(index);
          changePages[i].classList.remove("active");
        }
      }
      let value = i + 1;
      currentPage = value;
      console.log(currentPage);
      start = (currentPage - 1) * perPage;
      end = perPage * currentPage;
      var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        responseType: "json",
      });
    
      promise.then(function (res) {
        renderTable(res.data.content);
      });
    });
    // changePages[i].classList.remove("active");
  }
}

changePage();

export function renderTable(arr) {
  var htmlString = "";
  for (var index = 0; index < arr.length; index++) {
    var dg = arr[index];
    if (index >= start && index < end) {
      htmlString += `
      <div class="item">
        <div class="img">
            <img src="${dg.image}" alt="">
            <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <div class="text">
            <div class="name-price">
                <p class="name">${dg.name}</p>
                <p class="price">$${dg.price}</p>
            </div>
            <div class="start-colors">
                <div class="start">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <a href="#" class="view-detail">View detail</a>
            </div>
        </div>
      </div>
        `;
    }
  }
  // return htmlString;
  document.querySelector(
    ".content .inner-wrap .product-search .product"
  ).innerHTML = htmlString;
}

function layDanhSach() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });

  promise.then(function (res) {
    console.log(res.data.content);
    renderTable(res.data.content);
  });
}
layDanhSach();

const home = document.querySelector(".home");
home.addEventListener("click", () =>{
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });

  promise.then(function (res) {
    console.log(res.data.content);
    renderTable(res.data.content);
  });
});
