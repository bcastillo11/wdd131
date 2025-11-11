const favChap = document.getElementById("favchap");
const submit = document.querySelector('button');
const list = document.getElementById("list");

submit.addEventListener("click", addBook);

function addBook() {
    if (favChap.value.trim() === "") return;

    const li = document.createElement("li");

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "❌";

    const span = document.createElement("span");
    span.textContent = favChap.value.trim();

    li.append(span, btnDelete);

    list.appendChild(li);
    favChap.value = "";

    btnDelete.addEventListener('click', () => li.remove());
}

// const favChap = document.getElementById("favchap");
// const submit = document.querySelector('button');
// const list = document.getElementById("list");

// submit.addEventListener("click", addBook);

// function addBook() {
//   if (favChap.value.trim() === "") return; // ✅ CORREGIDO

//   const li = document.createElement("li");

//   const btnDelete = document.createElement("button"); 
//   btnDelete.textContent = "❌";

//   const span = document.createElement("span");
//   span.textContent = favChap.value.trim();

//   li.append(span, btnDelete);

//   list.appendChild(li);
//   favChap.value = "";

//   // opcional: borrar el ítem al hacer click
//   btnDelete.addEventListener("click", () => li.remove());
// }