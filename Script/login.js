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

function dangnhap() {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == 'tuanquynh2204' && password == '2204') {
        alert('Đăng nhập thành công')
        window.location.assign('../index.html');
    } else if (username == '' && password == '') {
        alert('Chưa nhập tài khoản hoặc mật khẩu')
    } else if (username == '') {
        alert('Vui lòng điền nhập tài khoản')
    } else if (password == '') {
        alert('Vui lòng điền nhập mật khẩu')
    } else {
        alert('Tài khoản hoặc mật khẩu không chính xác')
    }
}