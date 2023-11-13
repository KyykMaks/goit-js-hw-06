
// const categoriesList = document.getElementById("categories");

// // console.log(categoriesList);

// const listAnimals = document.querySelectorAll(".item")
// // console.log(listAnimals);
const items = document.querySelectorAll("#categories .item");


console.log("Number of categories:", items.length);


items.forEach((item) => {
    const textHiden = item.firstElementChild.textContent;
    const numberElements = item.lastElementChild.children.length;


    console.log(`Categories: ${textHiden}`);
    console.log(`Elements: ${numberElements}`);
});

