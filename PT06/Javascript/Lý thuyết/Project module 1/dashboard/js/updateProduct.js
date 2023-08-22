const product = JSON.parse(localStorage.getItem("updateProduct"));
// console.log(product.trademark);?
document.getElementById("id").value = product.id;
document.getElementById("name").value = product.name;
document.getElementById("trademark").value = product.trademark;
document.getElementById("image").value = product.image;
document.getElementById("price").value = product.price;
document.getElementById("quantity").value = product.quantity;
document.getElementById("description").value = product.description;

function updateProduct() {

    const productList = JSON.parse(localStorage.getItem("product")) || [];

    let id = document.getElementById("id").value;

    let flag = true;

    if (document.getElementById("name").value === "") {
        alert("Please enter name");
        flag = false;
    }
    if (document.getElementById("price").value < 0) {
        alert("Please enter price");
        flag = false;
    } if (document.getElementById("quantity").value < 0) {
        alert("Please enter quantity");
        flag = false;
    } if (document.getElementById("trademark").value === "") {
        alert("Please enter trademark");
        flag = false;
    }
    if (document.getElementById("image").value === "") {
        alert("Please enter name");
        flag = false;
    }


    if (flag) {
        for (let i = 0; i < productList.length; i++) {
            // console.log(productList[i].id === 2);
            if (productList[i].id == document.getElementById("id").value) {

                productList[i].name = document.getElementById("name").value;
                productList[i].trademark = document.getElementById("trademark").value;
                productList[i].image = document.getElementById("image").value;
                productList[i].quantity = document.getElementById("quantity").value;
                productList[i].price = document.getElementById("price").value;
                productList[i].description = document.getElementById("description").value;
                console.log(productList[i]);
                console.log(productList);
                localStorage.setItem("product", JSON.stringify(productList));
                alert("Cập nhật thành công")
                window.location.href = "products.html"
                break;
            }
        }
    }
}
