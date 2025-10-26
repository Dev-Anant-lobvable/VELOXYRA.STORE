const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const productName = btn.parentElement.querySelector("h2").innerText;

    fetch("https://YOUR_RENDER_BACKEND_URL/add-to-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: productName })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message); // Shows "Product added to cart!"
    })
    .catch(err => console.error(err));
  });
});
