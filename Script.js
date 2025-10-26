// Select all "Add to Cart" buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Get product name from parent element (assuming <h2> contains name)
    const productName = btn.parentElement.querySelector("h2").innerText;

    // Send POST request to backend
    fetch("https://veloxyra-store.onrender.com/add-to-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: productName })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(data => {
      // Show alert with backend message
      alert(data.message);
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Something went wrong. Try again!");
    });
  });
});
