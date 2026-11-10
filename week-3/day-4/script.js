// Day 4 — Loops: practice the for loop
// A loop runs the same code once for every item in a list.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change ONE thing.

// First: replace this menu with YOUR truck's menu (keep the same shape).
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
        

// ---------- Step 1: Log every price ----------
// EXAMPLE: log every item's NAME.
// i is a counter: 0, then 1, then 2... menu[i] is the item at that spot.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}

<<<<<<< HEAD
// TODO: Write a for loop that logs every item's PRICE.
for (let i =0; i < menu.length; i++) {
  console.log("for loop:", menu[i].price);
}
=======
// YOUR TURN: log every item's PRICE.
// Change one thing: .name → .price

>>>>>>> 2a4cd5768c93e89341334b8f28c350bfa965acda

// ---------- Step 2: A sentence for each item ----------
// EXAMPLE: logs "Taco is on the menu", "Burrito is on the menu"...
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name + " is on the menu");
}

<<<<<<< HEAD
// TODO: Use forEach to log a sentence for each item, like "Taco costs $4.5".
menu.forEach(function (item) {
    console.log("forEach:", item.name[i] + " costs $" + menu.price[i] );
=======
// YOUR TURN: log "Taco costs $4.5", "Burrito costs $9"...
// Change one thing: " is on the menu" → " costs $" + menu[i].price
>>>>>>> 2a4cd5768c93e89341334b8f28c350bfa965acda

});

// ---------- Step 3: Put the menu on the page ----------
<<<<<<< HEAD
// Example: one item, made safely with createElement + textContent.
 list = document.getElementById("menu-list");
const exampleLi = document.createElement("li");
exampleLi.textContent = "Example: " + menu[0].name;
list.appendChild(exampleLi);
=======
// EXAMPLE: puts every NAME on the page, one per line. (Same as Menu Card.)
const menuText = document.querySelector("#menu-text");
menuText.textContent = "";
for (let i = 0; i < menu.length; i++) {
  menuText.textContent = menuText.textContent + menu[i].name + "\n";
}
>>>>>>> 2a4cd5768c93e89341334b8f28c350bfa965acda

// YOUR TURN: don't copy this one. Change the example above,
// so each line shows the name AND the price, like "Taco: $4.5".
// Change one thing: menu[i].name → menu[i].name + ": $" + menu[i].price


// ---------- Step 4: Add up a total ----------
// EXAMPLE: COUNT the items. count starts at 0 BEFORE the loop,
// and goes up by 1 INSIDE the loop.
let count = 0;
for (let i = 0; i < menu.length; i++) {
  count = count + 1;
}
console.log("Items:", count);

// YOUR TURN: add up every PRICE into a total. Log it.
// Change: count → total, and + 1 → + menu[i].price


// ---------- Extra (if you finish early): only SOME items ----------
// EXAMPLE: logs only the items that cost LESS than $5.
// The if is a gate: the loop still visits every item,
// but only the cheap ones get through to console.log.
for (let i = 0; i < menu.length; i++) {
  if (menu[i].price < 5) {
    console.log("Cheap:", menu[i].name);
  }
}

// YOUR TURN: log only the items that cost MORE than $5, like "Fancy: Burrito".
// Change: < → >   and   "Cheap:" → "Fancy:"
