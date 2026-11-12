// Week 4 Day 1 — forEach: a shorter way to loop
// forEach runs a function once for every item. No counter, no i.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change what the comment says.

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
                    "price": 9.99
                },
                {
                    "name": "Spicy Veggie Wrap",
                    "price": 8.99
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
                    "price": 9.99
                },
                {
                    "name": "Inferno Chicken Sandwich",
                    "price": 10.99
                },
                {
                    "name": "Intrusive Lemonade",
                    "price": 3.99
                }
            ]


// ---------- Step 1: Same job, no counter ----------
// THE for LOOP YOU ALREADY KNOW: logs every name.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}

// EXAMPLE: the same job with forEach.
// Remember form.addEventListener("submit", handleSubmit)? You handed the browser
// a function to run later. Here you hand forEach a function. It runs it once for
// each item, and passes that item in. So item is the Taco, then the Burrito...
function logName(item) {
  console.log(item.name);
}
menu.forEach(logName);

// YOUR TURN: log every item's PRICE.
// Change: logName → logPrice (2 places), and .name → .price
function logPrice (item){
    console.log(item.price);
}
menu.forEach(logPrice);

// ---------- Step 2: Write the function right inside ----------
// EXAMPLE: logs "Taco is on the menu", "Burrito is on the menu"...
// This is the same idea, but the function has no name and sits inside the ( ).
// You'll see this shape everywhere. Notice how it ends: });
menu.forEach(function (item) {
  console.log(item.name + " is on the menu");
});

// YOUR TURN: log "Taco costs $4.5", "Burrito costs $9"...
// Change: " is on the menu" → " costs $" + item.price
menu.forEach(function (item) {
console.log(item.name + " costs $" + item.price );
});

// ---------- Step 3: Put the menu on the page ----------
// EXAMPLE: puts every NAME on the page, one per line.
// It's the same "keep what's there and add one more" move as Menu Card.
const menuText = document.querySelector("#menu-text");
menuText.textContent = "";
menu.forEach(function (item) {
  menuText.textContent = menuText.textContent + item.name + "\n";
});

// YOUR TURN: don't copy this one. Change the example above,
// so each line shows the name AND the price, like "Taco: $4.5".
// Change: item.name → item.name + ": $" + item.price
menuText.textContent="";
menu.forEach(function (item){
    menuText.textContent= menuText.textContent + item.name + " $" + item.price + "\n";
});
// ---------- Extra (if you finish early): add it up ----------
// EXAMPLE: COUNT the items. count starts at 0 BEFORE forEach,
// and goes up by 1 INSIDE the function.
let total= 0;
menu.forEach(function (item) {
  total = total + 1;
});
console.log("Items:", total);

// YOUR TURN: add up every PRICE into a total. Log it.
// Change: count → total, and + 1 → + item.price
menu.forEach (function (item) {
    total = total + item.price
});

console.log("Items:", total);