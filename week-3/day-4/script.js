// Day 4 — Loops: for and forEach
// A loop runs the same code once for every item in a list.
// Tomorrow's graded work uses both loops, so practice them here.

// TODO first: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
                {
                    "name": "The Flavor Bomb",
                    "price": 12.99
                },
                {
                    "name": "Hot Honey Chicken Tenders",
                    "price": 10.99
                },
                {
                    "name": "Loaded Soul Fries",
                    "price": 9.99
                },
                {
                    "name": "The Big Cheese",
                    "price": 8.99
                },
                {
                    "name": "Spicy Veggie Wrap",
                    "price": 7.99
                },
                {
                    "name": "Sweet Heat Wings",
                    "price": 11.99
                },
                {
                    "name": "The Inferno Burger",
                    "price": 13.99
                },
                {
                    "name": "Crispy Avocado Tacos",
                    "price": 9.49
                },
                {
                    "name": "Spicy Ramen Bowl",
                    "price": 10.49
                },
                {
                    "name": "Chili Cheese Fries",
                    "price": 8.49
                },
                {
                    "name": "Intrusive Lemonade",
                    "price": 4.99
                }
            ]
        

// ---------- Step 1: A for loop ----------
// Example: log every item's name.
for (let i = 0; i < menu.length; i++) {
  console.log("for loop:", menu[i].name);
}

// TODO: Write a for loop that logs every item's PRICE.
for (let i =0; i < menu.length; i++) {
  console.log("for loop:", menu[i].price);
}

// ---------- Step 2: forEach ----------
// Same job, shorter to write. forEach hands you each item, one at a time.
// Example:
menu.forEach(function (item) {
  console.log("forEach:", item.name);
});

// TODO: Use forEach to log a sentence for each item, like "Taco costs $4.5".
menu.forEach(function (item) {
    console.log("forEach:", item.name[i] + " costs $" + menu.price[i] );

});

// ---------- Step 3: Put the menu on the page ----------
// Example: one item, made safely with createElement + textContent.
 list = document.getElementById("menu-list");
const exampleLi = document.createElement("li");
exampleLi.textContent = "Example: " + menu[0].name;
list.appendChild(exampleLi);

// TODO: Use forEach to add an <li> for EVERY menu item, showing its name and price.
// Then delete the example <li> code above.


// ---------- Step 4: A loop that adds up ----------
// TODO: Use a for loop to add up every price into a total. Log the total.
// Hint: start with  let total = 0;  then add each price inside the loop.


// ---------- Extra practice (if you finish early) ----------
// 1. Count how many items cost less than $5 (a loop + an if).
// 2. Sneak peek at next week: what order do these two lines log in? Guess, then try it.
//    setTimeout(function () { console.log("Order up!"); }, 2000);
//    console.log("Taking your order...");
