

const categoriesList = document.getElementById("#categories");

// console.log(categoriesList);

const listAnimals = document.querySelectorAll(".item")
// console.log(listAnimals);

console.log("Number of categories:", listAnimals.length);

const items = document.querySelectorAll("#categories .item");


items.forEach((item) => {
    const textHiden = item.querySelector("h2").textContent;
    const numberElements = item.querySelectorAll("li").length;

    console.log(`Categories: ${textHiden}`);
    console.log(`Elements: ${numberElements}`);
});