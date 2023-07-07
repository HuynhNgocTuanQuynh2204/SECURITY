$(document).ready(function() {
    $('#eye').click(function() {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});
$(document).ready(function() {
    $('#eye1').click(function() {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});


function dangky(e) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password1 = document.getElementById('password1').value;

    if (name === '' || date === '' || username === '' || password === '' || password1 === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
    } else if (password1 !== password) {
        alert('Mật khẩu không trùng khớp');
    } else if (localStorage.getItem(username) !== null) {
        alert('Tên đăng nhập đã tồn tại');
    } else {
        var user = {
            name: name,
            date: date,
            username: username,
            password: password,
            password1: password1
        };
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert('Đăng kí thành công');
    }
}


function dangnhap(e) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user == null) {
        alert("Vui lòng điền tên đăng nhập và mật khẩu")
    } else if (username == data.username && password == data.password) {
        alert('Đăng nhập thành công')
        window.location.assign('../index.html');
    } else {
        alert('Đăng nhập thất bại')
    }
}