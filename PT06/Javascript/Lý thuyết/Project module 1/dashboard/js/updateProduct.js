const product = JSON.parse(localStorage.getItem("updateProduct"));
console.log(product.trademark);
document.getElementById("id").value = product.id;
document.getElementById("name").value = product.name;
document.getElementById("trademark").value = product.trademark;
document.getElementById("image").value = product.image;
document.getElementById("price").value = product.price;
document.getElementById("quantity").value = product.quantity;
document.getElementById("description").value = product.description;
function validateForm() {
    var name = document.getElementById("name");
    var trademark = document.getElementById("trademark");
    var image = document.getElementById("image");
    var price = document.getElementById("price");
    var quantity = document.getElementById("quantity");
    var description = document.getElementById("description");

    if (name === "") {
        alert("Please enter name product!")
        return false;
    }
    if (trademark === "") {
        alert("Please enter trademark product!")
        return false;
    }
    if (image === "") {
        alert("Please enter image product!")
        return false;
    }
    if (price < 0) {
        alert("Please enter image product!")
        return false;
    } else if (quantity < 0) {
        alert("Quantity must be greater than 0!");
    }
    return true;
}

function updateProduct() {
    
}