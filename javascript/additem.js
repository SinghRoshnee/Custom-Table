import { items } from "./items.js";
import { rendertask } from "./rendertask.js";

const inputName = document.querySelector("#inputname");
const inputCategory = document.querySelector("#inputcategory");
const inputYear = document.querySelector("#inputyear");
//const addItemBtn = document.querySelector("#addBtn");
const itemForm = document.querySelector("#itemform");
let itemCounter = 4;

export function additem() {
  itemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newItemObject = {
      srNo: itemCounter,
      name: inputName.value,
      category: inputCategory.value,
      year: inputYear.value,
    };

    items.push(newItemObject);

    inputName.value = "";
    inputCategory.value = "";
    inputYear.value = "";
    itemCounter++

    rendertask();
  });
}


