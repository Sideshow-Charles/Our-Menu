// Menu Array

const menu = [
    {
        id: 1,
        title: "Breakfast Meal",
        category: "Breakfast",
        price: 15,
        image: '../filter/images/chow-2.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 2,
        title: "Lunch Meal",
        category: "Lunch",
        price: 15,
        image: '../filter/images/chow-3.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 3,
        title: "Chocolate Milkshake",
        category: "Shakes",
        price: 15,
        image: '../filter/images/chow-4.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 4,
        title: "Breakfast Meal",
        category: "Breakfast",
        price: 15,
        image: '../filter/images/chow-5.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 5,
        title: "Lunch Meal",
        category: "Lunch",
        price: 15,
        image: '../filter/images/chow-6.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 6,
        title: "Banana Milkshake",
        category: "Shakes",
        price: 15,
        image: "../filter/images/chow-7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 7,
        title: "Breakfast Meal",
        category: "Breakfast",
        price: 15,
        image: '../filter/images/chow-8.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },

    {
        id: 8,
        title: "Lunch Meal",
        category: "Lunch",
        price: 15,
        image: '../filter/images/chow-9.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa a magnam sit est eum perspiciatis laboriosam expedita quam aspernatur!"
    },
]


// VARIABLES

const container = document.querySelector('.container');
const btnContainer = document.querySelector('.button__container');
const filterbtns = document.querySelectorAll('.filter__button');


// EVENT LISTENER THAT PROMPTS ITEM DISPLAY

window.addEventListener("DOMContentLoaded", function () {

    // FUNCTION TO DISPLAY MENU BUTTONS
    displayMenuButtons();

    // FUNCTION CALLED TO DISPLAY THE MENU ITEMS
    displayMenuItems(menu);
});







// FUNCTION TO DISPLAY THE MENU ITEMS 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return ` <article class="menu__item">
        <img src="${item.image}" alt="Chow">

        <div class="item__info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>

            <p class="item__description">
                ${item.description}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    container.innerHTML = displayMenu;
}


// FUNCTION TO DISPLAY MENU BUTTONS 
function displayMenuButtons() {

    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);

        }
        return values;
    },
        ['All']
    );

    const categoryBtns = categories.map(function (category) {

        return `<button class="filter__button" type="button" data-id="${category}">${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    const filterbtns = document.querySelectorAll('.filter__button');
    filterbtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            if (category === "All") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }

        });
    });
};