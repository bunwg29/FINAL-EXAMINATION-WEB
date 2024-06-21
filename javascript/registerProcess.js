const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const signupForm = document.querySelector('.sign-up-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = signupForm.querySelector('input[placeholder="Username"]').value;
  const email = signupForm.querySelector('input[placeholder="Email"]').value;
  const password = signupForm.querySelector('input[placeholder="Password"]').value;

  // Kiểm tra mật khẩu
  if (!isValidPassword(password)) {
    alert('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, ký tự đặc biệt.');
    return;
  }

  const user = { username, email, password };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Đăng ký thành công!');
});

const signinForm = document.querySelector('.sign-in-form');
signinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = signinForm.querySelector('input[placeholder="Username"]').value;
  const password = signinForm.querySelector('input[placeholder="Password"]').value;

  // Kiểm tra mật khẩu
  if (!isValidPassword(password)) {
    alert('Mật khẩu không chính xác.');
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    alert('Đăng nhập thành công!');
    window.location.href = 'index.html'; 
  } else {
    alert('Tên người dùng hoặc mật khẩu không chính xác!');
  }
});

// Hàm kiểm tra mật khẩu
function isValidPassword(password) {
  // Kiểm tra độ dài
  if (password.length < 8) {
    return false;
  }

  // Kiểm tra chữ hoa, chữ thường, ký tự đặc biệt
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  return hasUppercase && hasLowercase && hasSpecialChar;
}