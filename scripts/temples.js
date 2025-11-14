const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

// Date for the footer
const today = new Date();

const year = document.querySelector("#currentyear");

year.innerHTML = `${today.getFullYear()}`;

const lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModifiedDate.toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}`;