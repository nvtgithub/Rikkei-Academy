// Bài 1: Cho 1 mảng các chuỗi, sử dụng map để tạo ra mảng mới chứa các chuỗi viết hoa
// input: ["hello", "hi", "heyy"]
// ouput: ["HELLO", "HI", "HEYY"]
console.log("---Bài 1---");
const arr1 = ["hello", "hi", "heyy"];
let arr2 = arr1.map((value) => {
    return value.toUpperCase();
});
console.log(arr2);

// Bài 2: Cho 1 mảng chứa các đối tượng sinh viên, sử dụng map để in các sinh viên ra bảng (table)
// input:
/* 
[
   {id: 1, name: "StudentA", age: 25, address: "HN", phone: "02458643"},
   {id: 2, name: "StudentB", age: 20, address: "HCM", phone: "02321515"},
   {id: 3, name: "StudentC", age: 22, address: "DN", phone: "09825314"},
   {id: 4, name: "StudentD", age: 23, address: "HP", phone: "031515554"},
   {id: 5, name: "StudentE", age: 19, address: "HN", phone: "0358786454"},
]
 */
console.log("---Bài 2---");
const students = [
    { id: 1, name: "Student A", age: 25, address: "HN", phone: "02458643" },
    { id: 2, name: "Student B", age: 20, address: "HCM", phone: "02321515" },
    { id: 3, name: "Student C", age: 22, address: "DN", phone: "09825314" },
    { id: 4, name: "Student D", age: 23, address: "HP", phone: "031515554" },
    { id: 5, name: "Student E", age: 19, address: "HN", phone: "0358786454" },
];

let student = students.map((value, index) => {
    return document.getElementById("show-data").innerHTML += `
        <tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.age}</td>
            <td>${value.address}</td>
            <td>${value.phone}</td>
        </tr>
    `
});

// let student = students.map((value, index) => {
//     return value.age = 20;
// });
// console.log(student);


// Bài 3: Sử dụng filter lọc ra các số lẻ trong mảng
// input: [50, 30, 45, 20, 89, 60]
// output: [45, 89]
console.log("---Bài 3---");
const numbers = [50, 30, 45, 20, 89, 60];
let numberOdd = numbers.filter((value) => {
    return value % 2 !== 0
});
console.log(numberOdd);

// Bài 4: Cho mảng chứa các đối tượng sản phẩm với trường price,
// sử dụng filter lọc ra sản phẩm nhỏ hơn 50
// input:
/* 
[
   {id: 1, name: "Áo thun", quantity: 10, price: 20},
   {id: 2, name: "Quần âu", quantity: 20, price: 60},
   {id: 3, name: "Giầy", quantity: 30, price: 30},
   {id: 4, name: "Áo sơ mi", quantity: 40, price: 40},
   {id: 5, name: "Quần bò", quantity: 50, price: 50},
]
 */
console.log("---Bài 4---");
const arr = [
    { id: 1, name: "Áo thun", quantity: 10, price: 20 },
    { id: 2, name: "Quần âu", quantity: 20, price: 60 },
    { id: 3, name: "Giầy", quantity: 30, price: 30 },
    { id: 4, name: "Áo sơ mi", quantity: 40, price: 40 },
    { id: 5, name: "Quần bò", quantity: 50, price: 50 },
];
let newArr = arr.filter((value) => {
    return value.price < 50
});
console.log(newArr);

// Bài 5: Cho mảng các chuỗi, sử dụng find để tìm chuỗi có độ dài lớn hơn 8 ký tự
// input: ["Welcome To Rikkei Academy", "Going to homework", "To Sleep"]
// output: To Sleep
console.log("---Bài 5---");
const str = ["Welcome To Rikkei Academy", "Going to homework", "To Sleep"];
let newStr = str.find((value) => {
    return value.length == 8
});
console.log(newStr);
// console.log(str[0].length);
// console.log(str[1].length);
// console.log(str[2].length);

// Bài 6: Cho mảng chứa các đối tượng sản phẩm với trường "quantity",
// sử dụng find để tìm sản phẩm có số lượng tồn kho bằng 0
// input:
/* 
[
   {id: 1, name: "Áo thun", quantity: 10, price: 20},
   {id: 2, name: "Quần âu", quantity: 5, price: 60},
   {id: 3, name: "Giầy", age: quantity: 0, price: 30},
   {id: 4, name: "Áo sơ mi", quantity: 6, price: 40},
   {id: 5, name: "Quần bò", quantity: 4, price: 50},
]
 */

// output: {id: 3, name: "Giầy", age: quantity: 0, price: 30},

const products = [
    { id: 1, name: "Áo thun", quantity: 10, price: 20 },
    { id: 2, name: "Quần âu", quantity: 5, price: 60 },
    { id: 3, name: "Giầy", quantity: 0, price: 30 },
    { id: 4, name: "Áo sơ mi", quantity: 6, price: 40 },
    { id: 5, name: "Quần bò", quantity: 4, price: 50 },
];
let product = products.find((value) => {
    return value.quantity == 0
})
console.log("---Bài 6---");
console.log(product);