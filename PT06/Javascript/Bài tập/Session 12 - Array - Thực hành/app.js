//Bài 1: Cách 2: Dùng vòng lặp for
console.log('-----Bài 1----');
let myColor = ['Red','Green','White','Black'];
console.log('Mảng ban đầu: ',myColor);
let str = "";
for (let i = 0; i < myColor.length; i++) {
    str += myColor[i]; 
    str += " ";
}
console.log('Chuỗi string: ',str);

//Bài 5:
// console.log('----Bài 2----');
// let Arr = prompt("Nhập vào dãy số phân cách với nhau bằng dấu ','").split(",");
// let min = Arr[0];
// for (let i = 1; i < Arr.length; i++) {
//     if(min > Arr[i]){
//         min = Arr[i];
//     }
// }
// console.log(min);
// alert('Số nhỏ nhất trong dãy bạn nhập là: ' + min);

//Bài 6: 
// console.log('----Bài 6-----');
// const arr = [5,6,4,1,3,1,3,4,5,4,1,5];
// let num = parseInt(prompt("Nhập vào 1 số ngẫu nhiên: "));
// let result = false;
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//     if(num === arr[i]){
//        result = true;
//        index.push(i);
//     }
// }
// console.log(result);
// let info = (result === true) ? alert(num + ' Được tìm thấy trong mảng ở vị trí '+ index ) : alert(num + " Không tìm thấy trong mảng");

//Bài 7: 
console.log('----Bài 7 ----');
// 7.1  
let arr = prompt("Nhập vào kích thước đàn cừu của bạn, ngăn cách nhau bằng dấu phẩy: ").split(',');
console.log('Xin chào, đây là kích thước đàn cừu của tôi:');
arr = arr.map(Number);
console.log(arr);

//7.2
let max = Math.max(...arr);
console.log("Con cừu lớn nhất của tôi có kích thước ", max, " hãy cạo nó");

//7.3
let index = arr.indexOf(max);
arr[index] = 8;
console.log('Sau khi cạo lông, đây là đàn cừu của tôi: ');
console.log(arr);

//7.4
let month = +prompt("Bước nhảy thời gian(đơn vị: Tháng): ");
for (let i = 0; i < arr.length; i++) {
   arr[i] = arr[i] + 50 * month;
}
console.log("Sau " + month + " tháng trôi qua, bầy cừu của tôi đã lớn, đây là kích thước của chúng: ");
console.log(arr);

//7.5
arr = arr.
console.log("Bây giờ con cừu lớn nhất của tôi có kích thước ");