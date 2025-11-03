const today = new Date();

const year = document.querySelector("#currentyear");

year.innerHTML = `${today.getFullYear()}`;

const lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModifiedDate.toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}`;



