// 1. Function (Hàm)
// => dùng để thực hiện một khối mã code để làm một việc cụ thể
// 2. Các loại hàm: 
//  + Hàm có sẵn: push();pop();,...
//  + Hàm tự xây dựng: 
//  3. Cú pháp: 

// function <Ten_function> (){
//     //Logic code
// // }
// function sum(){
//     //Statament
// }
//Lưu ý: phạm vi biến trong function là local scope
// 4. Tính chất
//  + Không thực thi khi định nghĩa
// function sum(){
//     console.log('Xin chào');
// }

// + Sẽ thực thi khi được gọi
 // Gọi function
// + Có thể nhận tham số
// function sum(a, b){
//     console.log("Hi"); 
//     console.log(a);
//     console.log(b);
// }
// sum("10", "20"); //Gọi function || "10" =>

// ***  express function
// let sum = function(){
//     console.log(10);
// }
// sum;

// *** Arrow function () / ES06
// const sum = () => {
      
// }

// Callback function
// function myFunction(a){
//     a('aTien');
// }

// function myCallback(value){
//     console.log("Name is: ", value);
// }

// myFunction(myCallback);

// IFFE
 
// e. Closures
// function parentFunc(){
//     function childFunc(){
//         console.log(20);
//     }
//     childFunc();
// } 

// parentFunc();

function tien(){
    return "aaaa";
}
console.log(tien());