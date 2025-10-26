// Select all buttons
const buttons = document.querySelectorAll("button");

// Add click event to each button
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart!");
  });
});