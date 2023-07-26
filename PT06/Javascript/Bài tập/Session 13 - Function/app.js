//-----Bài 1: -----
// function sum(a,b){
//     let c = a + b;
//     return c;
// }
// console.log(sum(10,13));

// //Arrow function
// const sum1 = (a,b) => a+b;
// console.log(sum1(3,4));

//----- Bài 2: -----
// function countLength(){
//     let str = prompt("Nhập vào 1 chuỗi: ")
//     if (typeof str === "string"){
//     console.log("Chuỗi bạn nhập là: ", str);
//     let count = str.length;
//     console.log("Độ dài chuỗi đó là: ",count);
//    }
//    else {
//     console.log("Không");
//    }
// }
// countLength();

//-----Bài 3:-----
// function toUpperCaseArr(){
//     let arr = prompt("Nhập vào 1 chuỗi ký tự ngăn cách với nhau bằng dấu phẩy:").split(',');
//     let txt = "";
//     for (let i = 0; i < arr.length;i++){
//         let txt =arr[i].toUpperCase();
//         arr[i] = txt;
//     }
//     console.log(arr);
// }
// toUpperCaseArr();


// --- Baif 4: ----
// function reverseStr(){
//     let str = prompt("Nhập vào 1 chuỗi: ");
//     let str2 = "";
//     for (let i = str.length-1; i>=0;i--){
//         str2 += str[i];
//     }
//     console.log(str2);
// }
// reverseStr();

//----Bài 5: ----
// function sortNumber(){
//     let arr = prompt("Nhập vào 1 mảng các số ngăn cách nhau bằng dấu phẩy: ").split(",");
//     arr = arr.map(Number);
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//             let temp = arr[i]; 
//             arr[i] = arr[j]; 
//             arr[j] = temp; 
//             }
//         }
//     }
//     console.log(arr);
// }
// sortNumber();

//----Bài 6: ----
function snt(){
    let arr = prompt("Nhập vào 1 mảng các số ngăn cách nhau bằng dấu phẩy: ").split(",");
    arr = arr.map(Number);
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        let kt = 0;
        for(let j = 2; j < i; j++ ){
            if(i % j == 0)
            {
                kt = 1; 
                break;
            }
        }
        if(i > 1 &&  kt == 0){
            arr2.push(i);
        }
    }
    console.log(arr2);
}
snt();