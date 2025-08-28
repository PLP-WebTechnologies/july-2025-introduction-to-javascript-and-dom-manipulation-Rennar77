
// Part 1: JavaScript Basics

let userName = prompt("Enter your name:");  // input
let hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning, " + userName + "!";
} else if (hour < 18) {
  greeting = "Good afternoon, " + userName + "!";
} else {
  greeting = "Good evening, " + userName + "!";
}

document.getElementById("greeting").textContent = greeting;



// Part 2: Functions

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function triggered by button
function showTotal() {
  let total = calculateTotal(50, 3); // Example: price=50, qty=3
  document.getElementById("totalResult").textContent =
    "The total price is: $" + total;
}



// Part 3: Loops

// Example 1: Countdown
function countdown(start) {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old items

  for (let i = start; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Iterating an array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruit List:");
fruits.forEach(fruit => console.log(fruit));



// Part 4: DOM Interactions


// 1) Toggle text visibility
let toggleBtn = document.getElementById("toggleBtn");
let toggleMessage = document.getElementById("toggleMessage");

toggleBtn.addEventListener("click", function () {
  if (toggleMessage.style.display === "none") {
    toggleMessage.style.display = "block";
  } else {
    toggleMessage.style.display = "none";
  }
});

// 2) Add new list items dynamically
let addItemBtn = document.getElementById("addItemBtn");
let dynamicList = document.getElementById("dynamicList");

addItemBtn.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (dynamicList.children.length + 1);
  dynamicList.appendChild(newItem);
});

// 3) Change styles dynamically
toggleMessage.addEventListener("mouseover", function () {
  toggleMessage.style.color = "red";
});
toggleMessage.addEventListener("mouseout", function () {
  toggleMessage.style.color = "darkgreen";
});
