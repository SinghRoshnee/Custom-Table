import { items } from "./items.js";

export function rendertask() {
  const maincontainer = document.querySelector(".section3");
  const mainDiv = document.createElement("div");
  mainDiv.innerHTML = `
    <table class="styled-table">
         <thead>
             <tr>
                 <th>Srno</th>
                 <th>Name</th>
                 <th>Category</th>
                 <th>Year</th>
                 <th>Actions</th>
             </tr>
         </thead>
         <tbody>
         </tbody>
       </table>      
  `;
  items.forEach((item) => {
    const tabletr = document.createElement("tr");
    tabletr.innerHTML = ` 
        <td>${item.srNo}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.year}</td>
        <td>
            <button class="action-btn edit-btn">Edit</button>
            <button class="action-btn delete-btn">Delete</button>
        </td>
    `;
    const tbody = mainDiv.querySelector("tbody");
    tbody.appendChild(tabletr);
  });
  maincontainer.innerHTML = "";
  maincontainer.appendChild(mainDiv);
}
