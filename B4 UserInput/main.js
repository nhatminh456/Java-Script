// demo chức năng đăng nhập

let userName;
document.getElementById("mySubmmit").onclick = function(){
 userName = document.getElementById("myText").value;
 document.getElementById("myH1").textContent = `Hello ${userName}`;
}