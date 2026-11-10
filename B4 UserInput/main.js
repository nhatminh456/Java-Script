// Ví dụ này lấy tên người dùng từ ô nhập liệu rồi hiển thị lời chào.

let userName; // Biến này sẽ lưu nội dung người dùng nhập.

// Chạy hàm này khi người dùng nhấn nút.
document.getElementById("mySubmmit").onclick = function(){
 // value là nội dung hiện tại trong ô nhập liệu.
 userName = document.getElementById("myText").value;

 // Hiển thị tên đã nhập vào bên trong tiêu đề.
 document.getElementById("myH1").textContent = `Hello ${userName}`;
}