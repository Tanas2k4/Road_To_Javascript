// //KHAI BÁO BIẾN
// // Khai báo biến
// var age = 26;

// // alert(fulName);
// // alert(age);

// //GIỚI THIỆU MỘT SỐ HÀM BUILT IN
// // 1. alert
// // 2. console
// // 3. confirm
// // 4. set timeout
// // 5. set interval

// setTimeout(function () {
//   console.log(age);
// }, 1000);
// //setTimeout - Sau 1000 mil giây sẽ hiện lên thông báo - chỉ chạy 1 lần
// //setInterval - liên tục giống vòng lập

// //GIỚI THIỆU VỀ TOÁN TỬ
// //Toán tử số học - Arithmetic
// //Toán tử gán - Assignment
// //Toán tử so sánh - Comparison
// //Toán tử logic - Logical

// //TIỀN TỐ - HẬU TỐ
// //Prefix - Postfix
// //Toán tử ++ --
// var a = 5;

// //Hậu tố - Postfix
// // bước 1: 'a copy','a copy' = 6
// // bước 2: trừ 1 của a, a = a - 1 => a = 5
// // bước 3: trả về 'a copy'
// var output = a++;
// console.log("output: ", output);
// console.log("a: ", a);

// //TOÁN TỬ GÁN
// //Toán tử           Ví dụ           Tương đương
// //   =              x = y           x = y
// //   +=             x += y          x = x + y
// //   -=             x -= y          x = x - y
// //   *=             x *= y          x = x * y
// //   /=             x /= y          x = x / y
// //   **=            x **= y         x = x ** y

// ------------------------------
// //TOÁN TỬ CHUỖI - String operator

// var firstName = "Tran";
// var lastName = "Tan";

// var midName = firstName + " Trong";

// console.log(midName + " " + lastName);

// //BOOLEAN
// var b = 5;
// var isSuccess = a > b;
// console.log("Boolean: " + isSuccess);

// //CÁC KIỂU DỮ LIỆU TRONG JAVASCRIPT
// /*
//     1. Kiểu dữ liệu nguyên thu?y - Primitive data
//         - Number
//         - String
//         - Boolean
//         - Undefined
//         - Null
//         - Symbol

//     2. kiểu dữ liệu tham chiếu - Reference types
//         - Oject
//         - Function
//         - Array
// */
// //Function
// var newFunction = function () {
//   console.log("Thực thi function");
// };
// newFunction(); // Phải gọi function này ra mới thực thi được nội dung trong function

// //Object Types - Object
// var myOject = {
//   name: "Tâm Như", // Key: Value
//   age: 21,
//   Address: "Bến Tre",
// };
// console.log("myOject: ", myOject);

// //Object type - Array
// var myArray = ["Javascript", "Ruby", "Php"];
// console.log("myArray: \n", myArray);

// //LÀM VIỆC VỚI CHUỖI
// var myString = "Phai lam duoc 1 cai web";
// var herString = "CHUOI NAY TOAN CHU HOA";
// // Keyword: Javascript String methods
// //1. Length
// console.log("Độ dài chuỗi: " + myString.length);
// //2. Find index
// console.log("Tìm index: " + myString.indexOf("web")); //Có thể dùng lasIndexOf để tìm kiếm từ cuối chuỗi
// //3. Cut String
// console.log("Cắt chuỗi: " + myString.slice(20, 24));
// //4. RePlace
// console.log("Thay thế/ Ghì đè: " + myString.replace(/web/g, "website"));
// //5. Convert to upper case
// console.log("Chuyển chuỗi thành chữ hoa: " + myString.toUpperCase());
// //6. convert to lower case
// console.log("Chuyển chuỗi thành chữ thường: ", herString.toLowerCase());
// //7. Trim --> Loại bỏ khoảng trắng
// //8. Split --> Dựa vào một điểm chung để chuyển chuỗi Array
// var languageWeb = "JavaScript, PHP, Ruby";
// console.log("Chuyển chuỗi thành array: ", languageWeb.split(", "));
// //9. Get Character by index
// console.log("Lấy ký tự từ index: ", myString.charAt(6));

// //KIỂU SỐ (NUMBER)

// // 1.Tạo giá trị number
// //   - Các cách tạo
// //   - Dùng cách nào? Tại sao?
// //   - Kiểm tra data type
// var result = 20 / "ABC"; //Nếu phép toán không hợp lệ thì kết quả sẽ ra NaN
// //Sử dụng hàm isNaN để kiểm tra kết quả
// console.log(isNaN(result));

// // 2. Làm việc với number
// //   - To String
// //   - To Fixed

// //MẢNG TRONG JAVASCRIPT
// //1. Tạo mảng
// var language = ["Javascript", "PHP", "Ruby", "Dart"];

// console.log("Array: ", language);
// //Phân biệt kiểu Object và Array
// console.log("phân biệt Array và Object: ", Array.isArray(language));
// //Truy xuất mảng
// //Sử dụng .length để lấy chỉ mục/ Vị trí mảng
// //Truy xuất phần tử theo chỉ mục
// console.log("Truy xuất theo chỉ mục: ", language[2]);

// //LÀM VIỆC VỚI ARRAY
// // 1.To String
// console.log("Chuyển Array thành chuỗi: ", language.toString());
// // 2.Join
// console.log("Thêm phần tử giữa các mảng: ", language.join(", "));
// // 3.Pop <> Shift -->Xóa phần tử cuối Trả về phần tử đã xóa
// console.log("Xóa phần tử cuối: ", language.pop()); // xóa phần tử cuối mảng và trả về phần tử đã xóa
// // 4.Push <> Unshift --> trả về new length
// console.log("Thêm vào phần tử ở cuối mảng:", language.push("java"));
// // 5. Shift <> Pop --> Xóa phần tử đầu Trả về phần tử đã xóa
// console.log("Xóa phần tử đầu: ", language.shift());
// console.log(language); // --> nếu xóa mảng rỗng sẽ trả về Undefined
// // 6.UnShift <> Push --> thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về Length
// console.log("Thêm phần tử vào đầu mảng: ", language.unshift("java"));
// // 7. Splicing --> Có thể xóa, cắt, chèn phần tử mới vào mảng
// var newArray = ["Java", "Ruby", "Dash", "PHP", "C++"];
// //.splice(<vị trí đặt con trỏ>, <số lượng element muốn xóa>, <Số phần tử muốn thêm>)
// newArray.splice(1, 2, "Ruby");
// console.log(newArray);
// // 8. Concat --> Nối 2 Array
// var secondArray = ["C", "C++"];
// console.log(newArray.concat(secondArray));
// // 9.Slicing --> Dùng để cắt toàn bộ hoặc một vài element
// var thirdArray = ["Java", "Ruby", "Dash", "PHP", "C++"];
// console.log("Cắt nhiều hoặc toàn bộ element: ", thirdArray.slice(1, 3));

// HÀM (FUNCTION) TRONG JAVASCRIPT
// 1. Hàm?
//  - Hàm là một khối mã
//  - Làm một công việc cụ thể

// 2. Loại hàm?
//  - Build in
//  - Tự định nghĩa

// 3. Tính chất?
//  - Không thực thi khi định nghĩa
//  - Sẽ thực thi khi được gọi
//  - Có thể nhận tham số
//  - Có thể trả về một giá trị

// Truyền tham số
function writeLog(message) {
  console.log(message);
}
writeLog("Test message");
