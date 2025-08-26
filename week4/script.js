function convertCurrency() {
  const rupees = parseFloat(document.getElementById("rupees").value);
  const result = document.getElementById("result");

  // Fixed conversion rate (you can change this)
  const conversionRate = 0.012; // 1 INR ≈ 0.012 USD

  if (isNaN(rupees) || rupees <= 0) {
    result.textContent = "Please enter a valid amount in Rupees.";
    result.style.color = "red";
  } else {
    const dollars = (rupees * conversionRate).toFixed(2);
    result.textContent = `₹${rupees} = $${dollars} USD`;
    result.style.color = "green";
  }
}
