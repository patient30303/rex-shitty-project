var send = document.querySelector(".send");

// Sign up process
document.getElementById("signupForm").addEventListener("submit", signup);
function signup(event) {
  event.preventDefault();
  event.stopPropagation();

  var emailStr = document.querySelector(".email").value;
  var passwordStr = document.querySelector(".password").value;
  var account = {};
  account.email = emailStr;
  account.password = passwordStr;

  //ajax//
  var xhr = new XMLHttpRequest();
  xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
  xhr.setRequestHeader("Content-type", "application/json");
  var data = JSON.stringify(account);
  xhr.send(data);
  xhr.onload = function() {
    //JSON.parse() 方法把會把一個JSON字串轉換成 JavaScript的數值或是物件。
    var ajaxresult = JSON.parse(xhr.responseText);
    if (ajaxresult.message == "帳號註冊成功") {
      alert("帳號註冊成功");
      console.log(ajaxresult);
    } else {
      alert("帳號已經有人使用");
      console.log(ajaxresult);
    }
  };

  //JSON.parse() 方法把會把一個JSON字串轉換成 JavaScript的數值或是物件。

  //stringify 轉成字串
}

//DOM
var usersend = document.querySelector(".usersend");

// Login process
document.getElementById("loginForm").addEventListener("submit", usersignup);
function usersignup(event) {
  event.preventDefault();
  event.stopPropagation();

  var useremailStr = document.querySelector(".useremail").value;
  var userpasswordStr = document.querySelector(".userpassword").value;
  var useraccount = {};
  useraccount.email = useremailStr;
  useraccount.password = userpasswordStr;

  //ajax//
  var userxhr = new XMLHttpRequest();
  userxhr.open(
    "post",
    "https://hexschool-tutorial.herokuapp.com/api/signin",
    true
  );
  userxhr.setRequestHeader("Content-type", "application/json");
  var userdata = JSON.stringify(useraccount);
  userxhr.send(userdata);

  userxhr.onload = function() {
    console.log("h: ");
    var userajaxresult = JSON.parse(userxhr.responseText);
    if (userajaxresult.message == "登入成功") {
      alert("帳號登入成功");
      console.log(userajaxresult);
    } else {
      alert("此帳號不存在或帳號密碼錯誤");
      console.log(userajaxresult);
    }
  };

  //JSON.parse() 方法把會把一個JSON字串轉換成 JavaScript的數值或是物件。

  //stringify 轉成字串
}

// Example starter JavaScript for disabling form submissions if there are invalid fields

