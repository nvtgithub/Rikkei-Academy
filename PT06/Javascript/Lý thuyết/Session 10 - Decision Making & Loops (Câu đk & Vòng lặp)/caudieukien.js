// Câu điều kiện

// ---1.Câu điều kiện -----
// Cú pháp: 
// if(điều kiện đúng){
    //Logic code
// } else {
    // Logic code
// }

// Start => Điều kiện ---(true)---> Logic code trong if sẽ đc thực hiện
// 

    // ví dụ:
    // let a = 12;
    // if (a >10){
    //     console.log("a lớn hơn 10");
    // } else {
    //     console.log("a nhỏ hơn 10");
    // }    

// 1.1 Các trương hợp sử dụng với câu điều kiện if else
//Bài tập: cho người dùng nhập vào 1 đoạn text
// => Kiểm tra đoạn text đấy có phải là admin hay không
// Nếu nhập admin => thông báo đây là admin
// Nếu nhập user => thông báo là user
// => thông báo => i don't know

    // let inputUser = prompt("Nhập text: ");
    // if (inputUser == "admin"){
    //     console.log("Đây là admin!");
    // } else if(inputUser === "user"){
    //     console.log("Đây là user!");
    // } else if (inputUser == ""){
    //     console.log("Bạn chưa nhập text!. Hãy nhập lại");
    // } else {
    //     console.log("I don't know");
    // }

// 1.2. Câu điều kiện switch case0'
// cú pháp: switch(biểu thức) { // x}
// case value1: if(x === value1)
// break;
// case value2: if(x === value2) break; 
// default: //else
// break
//Ví dụ: 


    // let a = +prompt("Nhập giá trị:")
    // // Sẽ trả về kiểu dữ liệu là string:
    // console.log(a);
    // console.log(typeof a);
    // // => ép kiểu từ string sang number (+)// switch (12) {
    // switch (12) {
    //     case "12":
    //         console.log("case 1");
    //         break;
    //     case 12:
    //         console.log("Case 2");
    //         break;
    //     default:
    //         console.log("default");
    //         break;
    // }

// ---2.Vòng lặp for
// 2.1 Vòng lặp for
// cú pháp: for(gia_tri_ban_dau; dieu_kien; buoc_nhay) {
    //Logic code
// } => dùng với bài toán có số lần lặp biết trước

//ví dụ:
    // for(let i = 1; i <= 5; i++){
    //     console.log(i);
    // }
// 2.2 Vòng lặp while
// => thường đc sử dụng 
for (let i =1; i<= 10;i++)
{
    if(i === 8 ){
        break;    
        
    }
    console.log(i);
}