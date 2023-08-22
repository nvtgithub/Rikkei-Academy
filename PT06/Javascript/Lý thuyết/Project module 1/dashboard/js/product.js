// Backup dữ liệu
let data1 = [
    { id: 1, trademark: "Apple", name: "Iphone 11 64GB", image: "iphone11-1.jpg", price: 10890, quantity: 10, description: "" },
    { id: 2, trademark: "Apple", name: "Iphone 11 128GB", image: "iphone11-2.jpg", price: 12490, quantity: 11, description: "" },
    { id: 3, trademark: "Apple", name: "Iphone 12 64GB", image: "iphone12-1.jpg", price: 15490, quantity: 4, description: "" },
    { id: 4, trademark: "Apple", name: "Iphone 12 128GB", image: "iphone12-2.jpg", price: 16490, quantity: 7, description: "" },
    { id: 5, trademark: "Apple", name: "Iphone 13 128GB", image: "iphone13-1.jpg", price: 16990, quantity: 9, description: "" },
    { id: 6, trademark: "Apple", name: "Iphone 13 256GB", image: "iphone13-2.jpg", price: 19990, quantity: 5, description: "" },
];
// localStorage.setItem("product", JSON.stringify(data1));

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
const productShow = document.querySelector(".product-show");

function initApp() {
    productShow.innerHTML = "";
    var productList = JSON.parse(localStorage.getItem("product")) || [];
    productList.forEach(function (e, i) {
        let newTr = document.createElement("tr");
        newTr.innerHTML = `
                <td>${e.id}</td>
                <td><img src="./img/products/${e.image}"/></td>
                <td>${e.name}</td>
                <td>${e.trademark}</td>
                <td>${e.price}</td>
                <td>${e.quantity}</td>
                <td>${e.description}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteData(${i})">Delete</button>
                    <button class="btn btn-primary" onclick="updateData(${i})"><a href="./updateProduct.html">Update</a></a>
                </button>
                </td>
           `
        productShow.appendChild(newTr);
    });
}
window.onnload = initApp();

// Delete product
function deleteData(i) {
    var productList = JSON.parse(localStorage.getItem("product")) || [];

    productList.splice(i, 1);
    localStorage.setItem("product", JSON.stringify(productList));
    initApp();
}

// Update product 
function updateData(i) {
    var updateProduct = {};
    var productList = JSON.parse(localStorage.getItem("product"));
    console.log(productList[i]);
    // console.log(productList[i].id);

    updateProduct.id = productList[i].id;
    updateProduct.name = productList[i].name;
    updateProduct.image = productList[i].image;
    updateProduct.price = productList[i].price;
    updateProduct.quantity = productList[i].quantity;
    updateProduct.description = productList[i].description;
    updateProduct.trademark = productList[i].trademark;

    console.log(updateProduct);

    localStorage.setItem("updateProduct", JSON.stringify(updateProduct));
}
