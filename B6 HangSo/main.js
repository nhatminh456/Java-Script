// Hằng số được khai báo bằng từ khóa const.
// Sau khi được gán giá trị, hằng số không thể nhận giá trị mới.

// tính chu vi hình tròn ta có chu vi hình tròn là cv = 2*pi*r  
// r là bán kính 
// pi là 3,14

const pi = 3.14159;
let bankinh;
let chuvi;

document.getElementById("myButton").onclick = function(){
    bankinh = document.getElementById("myText").value;
    bankinh = Number(bankinh);
    chuvi = 2*pi*bankinh;
    document.getElementById("myH3").textContent = chuvi;
}

