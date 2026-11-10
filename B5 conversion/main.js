// Ép kiểu là việc chuyển một giá trị từ kiểu dữ liệu này sang kiểu khác.
// Các ví dụ dưới đây bắt đầu với giá trị chuỗi "pizza".

let x = "pizza";
let y = "pizza";
let z = "pizza";

// Number("pizza") thử chuyển chuỗi thành số.
// Vì "pizza" không phải số nên kết quả là NaN (Not a Number - không phải số).
x = Number(x);

// String() chuyển một giá trị thành chuỗi.
y = String (y);

// Boolean() chuyển một giá trị thành true hoặc false.
z = Boolean(z);

console.log(x); // Kết quả là NaN, thuộc kiểu number.
console.log(y); // Kết quả là chuỗi "pizza".
console.log(z); // Kết quả là true hoặc false.
