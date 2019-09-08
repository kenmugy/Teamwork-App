const signup_btn = document.querySelector('.btn-signup');
const modal = document.querySelector('.modal-background');
const cancel = document.querySelector('.cancel');
const signup_page = document.querySelector('.sign-up-page');
const login_btn = document.querySelector('.btn-login');
const modal_login = document.querySelector('section.modal-background-login');
const login_cancel = document.querySelector('.login-cancel');

signup_btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

cancel.addEventListener('click', () => {
  modal.style.display = 'none';
});

login_btn.addEventListener('click', () => {
  modal_login.style.display = 'block';
});

login_cancel.addEventListener('click', () => {
  modal_login.style.display = 'none';
});
