const selectBtn = document.querySelector(".select-btn"),
items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
selectBtn.classList.toggle("open");
});

items.forEach(item => {
item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
        btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
        btnText.innerText = `${checked.length} productos seleccionados`;
    } else {
        btnText.innerText = "Selecciona tus productos";
    }
    });
})