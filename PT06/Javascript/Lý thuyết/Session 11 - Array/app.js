// Tìm hiểu về Array - Mảng
// =>  Dùng để chứa nhiều đối tượng trong 1 biến
let course1 = "PHP";
let course2 = "ReactJs";
let course3 = "Javascript";

// ---1.Cú pháp khai báo mảng
// 1.1  Cú pháp new Array

// (Từ_khoá_khai_báo_biến(var/let/const)) (Tên_mảng) = new Array / []
// let course = new Array('PHP','ReactJs', 'JS');

// 1.2 Cú pháp []
let course = ['PHP','HTML','CSS'];
console.log(course);

//Lưu ý: Trong mảng có thể chứa bất kỳ kiểu dữ liệu, array là kiểu dữ liệu tham chiếu

let array = ['Hello', 20,true,null,undefined,NaN,['Js'],{}]
console.log(array);

// - Lưu ý 2:
//Ví dụ:
let a = 10;
let b = 10;
console.log(a===b);//=>output:true
let d = [];
let e = [];
console.log(d === e); //=> output :false

// => Để so sánh được array với nhau thì cần so sánh giá trị trong array
console.log(d[0]===e[0]); //-> output: true
// 2.Các thành phần trong array: Value, Length, index
console.log('2.Các thành phần trong array');
//let arrNumber =[10,20,30,40];
     // index   0  1   2  3
     //Length là chiều dài của mảng : 4 
//console.log(arrNumber);

//3. Các hàm làm việc với mảng
//CRUD -> C: Create / R:Read / U:Update / D:Delete

//R - Read One
console.log('3.CRUD');
let arrNumber =[10,20,30,40];
// Tên_mảng[chỉ_số_index_của_phan_tu_mang]
console.log(arrNumber[1]); //=> 20

// Read - All => sử dụng vòng lặp để đọc các giá trị trong mảng
for (let i = 0; i < arrNumber.length; i++){
    console.log(arrNumber[i]);
}

// C - Create 
//-> Thêm vào đầu mảng unshift()
// console.log('array ban đầu: '+arrNumber);
// arrNumber.unshift(60);
// console.log('thêm vào đầu mảng: '+arrNumber);
// arrNumber.push(50);
// console.log('Thêm vào cuối mảng:' +arrNumber);

// U - Update One
console.log('mảng ban đầu:' + arrNumber);
arrNumber[0]= 100;
console.log('Update 1 phần tử: ' + arrNumber);

//Update - All
for(let i = 0; i < arrNumber.length; i++){
    arrNumber[i] += 1;
}
console.log('Update all; '+arrNumber); // Cộng thêm 1 

// D- Delete 
//Xoá phần từ đầu của mảng - shift ()
let arrNumber2 = [1,2,3,4];
console.log('Mảng ban đầu: '+ arrNumber2);
arrNumber2.shift();
console.log('Mảng sau: '+ arrNumber2);

//Xoá phần tử cuối mảng - pop()
arrNumber2.pop();
console.log(arrNumber2);

//Xoá hoặc thêm phần tử tại vị trí index biết trước - splice()
// cú pháp: splice(index, amount)
// + index: vị trí index của phần tử trong mảng
// + amount: số lượng phần tử muốn xoá
// + newValue: giá trị muốn thêm
let arrNumber3 = [1,2,3,4,5,6];
console.log('Mảng thứ 3:' + arrNumber3);
arrNumber3.splice(0,3);
console.log(arrNumber3);

//Thêm
arrNumber3.splice(1,0,60);
console.log(arrNumber3);

// ---- C - Create
// Thêm dl vào đầu mảng:            arr.unshift(value)
// Thêm p.tu tại vị trí index:      arr.splice(index, 0, value)
// Thêm dl vào cuối mảng:           arr.push(value)
// ---- R - Read
// Đọc 1 phần tử:                   arr[index]
// Đọc all phần tử:                 for -> arr[i]
// ---- U - Update
// Cập nhật 1 phần tử:              arr[index] = value
// Cập nhật all phần tử:            for -> arr[index] += value
// ---- D - Delete
// Xoá phần tử đầu mảng:            arr.shift()
// Xoá p/tu tại vị trí index:       arr.splice(index, deleteCount)
// Xoá phần tử cuối mảng:           arr.pop()

// ------------Các phương thức xử lý mảng trong ES06
// 1.concat - nối mảng
console.log('------------Các phương thức xử lý mảng trong ES06------------');
let arr1 = [1,2];
let arr2 = [3,4];

let arr = arr1.concat(arr2);
console.log(arr);

//2. includes - Kiểm tra giá trị trong mảng có tồn tại hay không ?
let searchNumber = arr.includes(2);
console.log(searchNumber); //->true

//3. indexOf - Tìm kiếm vị trí index của phần tử
let c = arr.indexOf(9);
console.log(c); //Nếu tồn tại -> vị trí index. Nếu không -> -1

//4.join() - chuyển mảng thành chuỗi (string)
let joinArray = arr.join("   ");
console.log(joinArray);

//5. reverse() - Đảo thứ tự của mảng
let t = arr.reverse();
console.log(t);

//6. sort() - sắp xếp lại value mảng theo aphabet
// sort()- sắp xếp theo 
let arr3 = [5,4,2,440,9,1,3];
let s = arr3.sort();
console.log(s);

// ------Mảng đa chiều-----
let arr4 = [[1,2,3],[t,i,e,n]];
