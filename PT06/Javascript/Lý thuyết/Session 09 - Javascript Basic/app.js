// 2.Phạm vi
// + Global scope ( toàn cục )
// + Local scope( {} )
// + Block scope( function )
// => Global scope > Local scope > Block scope

// debugger;
// Phạm vi Global
// let a = 10;
// console.log(a);

//Phạm vi Block
//{ 
//    let b = 10;
//}
//console.log(b); // => b is not defined

//---3.Hosting-----------
// => chỉ xảy ra khi sử dụng với từ khoá var

console.log(a);
var a =10;
