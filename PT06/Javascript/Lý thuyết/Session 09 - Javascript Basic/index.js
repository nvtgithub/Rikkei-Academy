var b = 'Hello World'
console.log(b);

var myVariable="javascript";//Phạm vi toàn cục
myVariable = "html";
console.log(myVariable);

//Khai báo lại
var myVariable = "css";


//Hosting -> 
console.log(myVariable1);
var myVariable1;
myVariable1 = 'ABC';
// -> chuyển lên top    var myVariable1;
//                      console.log(myVariable1);
//                      myVariable1 = 'ABC';

// let
let test = 10;
test = 20; //có thể gán lại, nhg không thể khai báo lại
console.log(test);


//const
// const abc = 10;
// abc = 100; //Error
// console.log(abc);

//Kiểu dữ liệu
var number1 = 100;
console.log(typeof(number1));
number1 = "100";
console.log(typeof(number1));
var number2 = "100";
console.log(typeof(number2));

//-------Kiểu dữ liệu ngyên thuỷ(Primitive Types)-----
//Number
var num1 = 99.99;
console.log(num1);
console.log(typeof(num1));
//Str
var str1 = "Xinchao!"
console.log(str1);
console.log(typeof(str1));
//Boolean
var isTrued = false;
console.log(isTrued);
console.log(typeof(isTrued));

// #
var test1;
console.log(test1);//undefined: Chưa xác định kiểu của biến test1
test1 = 100;
console.log(test1);

var test2 = null;//Type->null, nhưng khi biên dịch thì ra object
console.log(test2);
console.log(typeof(test2));

//-------Kiểu dữ liệu không nguyên thuỷ(non primitive types)-------
//object: Đối tượng
//array: Mảng

//Window: 
// alert('Đây là arlert!');
// confirm('Đây là confirm!'); 
// // prompt('Nhập vào tên','');
// console.log(prompt('Nhập vào tên',''));

//------DOM------
document.write('đây là document.write');
document.writeln('<br>đây là document.writeln');

//-------Toán tử toán học------
var so1 = 10;
var so2 = 3;
console.log('Chia:' + so1/so2);   
console.log('chia lấy phần dư:' + so1%so2);
console.log(so1++); //Đã thay đổi giá trị nhưng chưa in ra kết quả thay đổi đó
console.log(so2--); //Đã thay đổi giá trị nhưng chưa in ra kết quả thay đổi đó
// console.log(so1++);
// console.log(so1);
console.log(++so1);//Thay đổi giá trị, đồng thời in ra kết quả mới
console.log(--so2);//Thay đổi giá trị, đồng thời in ra kết quả mới

var t = 10;
console.log(t++ + ++t - t-- + --t);
//10 + 12 - 12 + 10 = 20 -> Chưa thay đổi t++ và t--, nhg giá trị ++t và --t đã bị ảnh hưởng

// ------Toán tử gán-----
var t1 = 10;
console.log(t1 += 2); //-> 12
console.log(t1 -= 3); //->9

// ------ Toán tử so sánh-------
var a1 = 10;
var a2 = "10";
console.log(a1 == a2);//So sánh giá trị
console.log(a1 === a2);//So sánh kiểu dữ liệu và giá trị
console.log("!=");
console.log(5 != 5);
console.log(6 != 5)
console.log("!==");
console.log(6 !== 5);
console.log(6 !== 6);

console.log('xin chao');