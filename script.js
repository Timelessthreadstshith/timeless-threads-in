
function buyNow(name, price) {
    const customer = prompt("Enter your Name:");
    const address = prompt("Enter your Address:");
    const pincode = prompt("Enter your Pincode:");
    const payment = prompt("Select Payment Method: PhonePe / Google Pay / COD");

    alert(`Order Placed for ${name} at ₹${price}\n\nName: ${customer}\nAddress: ${address}\nPincode: ${pincode}\nPayment: ${payment}\n\nYou will be contacted on WhatsApp.`);
}
