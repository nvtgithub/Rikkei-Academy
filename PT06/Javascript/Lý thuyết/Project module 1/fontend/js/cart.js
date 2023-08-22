// Backup dữ liệu
let data = [
    { id: 1, tredamark: "Apple", name: "Iphone 11 64GB", image: "iphone11-1.jpg", price: 10890 },
    { id: 2, tredamark: "Apple", name: "Iphone 11 128GB", image: "iphone11-2.jpg", price: 12490 },
    { id: 3, tredamark: "Apple", name: "Iphone 12 64GB", image: "iphone12-1.jpg", price: 15490 },
    { id: 4, tredamark: "Apple", name: "Iphone 12 128GB", image: "iphone12-2.jpg", price: 16490 },
    { id: 5, tredamark: "Apple", name: "Iphone 13 128GB", image: "iphone13-1.jpg", price: 16990 },
    { id: 6, tredamark: "Apple", name: "Iphone 13 256GB", image: "iphone13-2.jpg", price: 19990 },
];
const productShow = document.querySelector(".product-show");
const showData = document.querySelector(".show-data");

const products = JSON.parse(localStorage.getItem("products")) || [];


// Hiển thị dữ liệu
function initApp() {
    for (let i = 0; i < data.length; i++) {
        let value = data[i];
        let newDiv = document.createElement("div");
        newDiv.classList.add("col-lg-4");
        newDiv.classList.add("product-item");
        newDiv.innerHTML = `
        <div class="item">
            <div class="item-pic"><img src="./img/products/${value.image}"/></div>
            <button onclick="addToCart(${i})">Add To Cart</button>
            <div class="item-text">
                <div>${value.name}</div>
                <div>${(value.price * 1000).toLocaleString('vi-VN')} VNĐ</div >
            </div>
        </div>    
        `;
        productShow.appendChild(newDiv);

    }
}
initApp();

// Thêm vào giỏ hàng
function addToCart(i) {
    if (products[i] == null) {
        products[i] = { ...data[i], quantity: 1 };
    } else {
        products[i].quantity += 1;
    }

    localStorage.setItem("products", JSON.stringify(products));
    reloadCart();
}
reloadCart();

// Hiển thị dữ liệu trong giỏ hàng
function reloadCart() {
    let count = 0;
    let totalPrice = 0;
    showData.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let value = products[i];
        if (value != null) {
            let newTr = document.createElement("tr");
            newTr.innerHTML = `
                <td class="dt-pic"><img src="./img/products/${value.image}"/></td>
                <td class="dt-text">
                   <div>
                        <h6>${value.name}</h6>
                        <p>${(value.price * 1000).toLocaleString('vi-VN')} VNĐ x ${value.quantity}</p>
                   </div> 
                </td>    
                <td class="dt-close"><button onclick="removeCart(${i}) "><i class="fa-solid fa-xmark"></i></button></td>
            `
            showData.appendChild(newTr);
            totalPrice += value.price * value.quantity * 1000;
            count += value.quantity;
        }
    }
    let a = totalPrice.toLocaleString('vi-VN');
    document.querySelector(".cart-count").innerText = count;
    document.querySelector(".total").innerHTML = `
        <span>TỔNG GIÁ TIỀN:</span>
        <h5 style="float: right;">${a} VNĐ</h5>
    `

    document.querySelector(".cart-total").innerHTML = `${a} VNĐ`;
}

// Xoá sản phẩm trong giỏ hàng
function removeCart(i) {
    var products;
    if (localStorage.getItem("products") === null) {
        products = [];
    } else {
        products = JSON.parse(localStorage.getItem("products"))
    }

    products.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Xoá thành công!")
    reloadCart();
}

// Hover cart
