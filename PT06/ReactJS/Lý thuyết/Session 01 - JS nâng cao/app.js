// 1. let, const
// Phân biệt 3 từ khoá var. let, const
// var :
// -> Khai báo lại
// var a = 10;
// var a = 20;
// console.log(a); =>output: 20
// -> gán lại giá trị
// var a = 10;
// a = 20;
// console.log(a); =>output: 20


// let :
// -> KHÔNG Khai báo lại được
// let b = 10;
// let b = 20; => sẽ hiển thị lỗi
// console.log(b); 
// -> gán lại giá trị
// let b = 10;
// b = 20;
// console.log(a); =>output: 20

// const: 
// -> KHÔNG Khai báo lại được
// const b = 10;
// const b = 20; => sẽ hiển thị lỗi
// console.log(b); 
// -> KHÔNG gán lại giá trị được
// const c = 10;
// c = 20;
// console.log(c); =>output: 

// Phạm vi:
// + Global scope (cục bộ) -> không ảnh hưởng
// + Block scope ( {} ) -> let, const 
// + function scope ( local scope) -> var,let,const 
// -> từ khoá let 
// debugger;
// function f() {
//     var a = 10;
// }
// f();
// console.log(a);

// Hosting -> chỉ có với từ khoá var
// console.log(t);
// var t = 'helo'
// => var t; console.log(t); t = "helo"
// console.log(a);

// 2.Template string : "" '' ``

// 3. Các hàm có sẵn trong js
// map, forEach, filter, find,...   
// const numbers = [1, 2, 3, 4, 5];
// 3.1 map
// map thực hiện 1 hàm callback(()=>) -> duyệt qua từng phần tử có trong mảng và tạo ra mảng mới
// Khi sử dụng dấu '{}' sau '=>' thì cần từ khoá return
// Sau '=>' mà không sử dụng '{}' thì không cần return
// Ví dụ:
// let arr = numbers.map((value, index) => {
// console.log(index);
//     return value * 2
// });
// console.log(arr);

// 3.2 forEach
// -> thực hiện 1 hàm callback( () => ) -> duyệt qua các phần tử mảng nhưng không tạo ra mảng mới
// let arr = numbers.forEach((value, index) => console.log(value * 2));

// 3.3 filter
// -> Duyệt qua các phần tử trong mảng, nếu thoả mãn điều kiện
// sẽ trả về mảng mới chứa tất cả phần tử đó
// let arr1 = numbers.filter((value, index) => value % 2 === 0);
// console.log(arr1); => output: [2,4]

// 3.4 find 
// -> duyệt qua các phần từ có trong mảng, nếu thoả mãn sẽ trả về phần tử đầu tiên có trong mảng
// let arr1 = numbers.filter((value, index) => value % 2 === 0);
// console.log(arr1); =>output => 2

// sort, reduce,findeIndex,indexOf ...

//4. Arrow function 
// cú pháp function: function f(){}

//cú pháp: arrow function:
const f = () => {
    //logic code
}
// -> khi sử dụng arrow function sẽ loại bỏ được tử khoá this trong class

//5. Destructuring
// -> sử dụng để phân rã ( hay trích xuất) các giá trị từ arry hoặc object

// // ví dụ:
// const numberss = [1, 2, 3, 4, 5];

// //cách thông thường
// console.log(numberss[1]);
// console.log(numberss[3]);
// //destructuring array
// const [a, b, c, d, e] = numberss;

// console.log(b, d);
// //destructuring object
// const people = {
//     name: "Tiến",
//     age: 20,
//     address: "Hà Nội",
// }
// console.log(people.name);
// console.log(people.address);

// const { name, age, address } = people;
// console.log(name, address);

//6. Enhanced object literals
// let address = " Hà Nội";
// let name = "Tiến";
// let course = "Khoá học"

// let people = {
//     name,
//     address,
//     //Thêm key cho objet -> giá trị của biến khai báo thành key trong objet
//     [course]: "ReactJS"
// }
// console.log(people);

//7. Spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let people = {
//     name: "tiến",
//     age: 25,
// }

// let arr3 = [arr1, arr2]; // => output: trong arr3 có 2 arr: arr1, arr2
// // -> sử dụng '...'

// // spread operator cho array
// // let arr4 = [...arr1, ...arr2];
// // console.log(arr4);// -> arr4[1,2,3,4,5,6]

// // spread operator cho object
// // Thêm đối tượng mới
// let newPeople = {
//     ...people, address: "Hải Dương"
// };


// //Cập nhật đối tượng có trong obj nếu key trùng nhau
// let updatePeople = { ...newPeople, age: 50 };
// console.log(people);
// console.log(newPeople);
// console.log(updatePeople);

//8. Rest parameters(...)

function numbers(a, ...rest) {
    console.log(a); // 10
    console.log(rest); // 20,30
}
numbers(10, 20, 30);
// 9. Module 
// Export

console.log("Xin chào");
// Name export
export let sum = (a, b) => a + b;
export let minus = (a, b) => a - b;

// Export default
const pi = 3.14;
export default pi;
