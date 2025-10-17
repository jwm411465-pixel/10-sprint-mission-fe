document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const form = document.querySelector('form');
  const loginBtn = document.getElementById('loginBtn');

  
  function showError(inputEl, message) {
    clearError(inputEl);

    inputEl.classList.add('error-border');

    const p = document.createElement('p');
    p.className = 'error-message';
    p.textContent = message;

    
    inputEl.parentElement.appendChild(p);
  }

  function clearError(inputEl) {
    inputEl.classList.remove('error-border');
    const old = inputEl.parentElement.querySelector('.error-message');
    if (old) old.remove();
  }

  
  function validateEmail() {
    const value = emailInput.value.trim();

    if (value === '') {
      showError(emailInput, '이메일을 입력해주세요.');
      return false;
    }

    
    if (emailInput.validity.typeMismatch) {
      showError(emailInput, '잘못된 이메일 형식입니다.');
      return false;
    }

    clearError(emailInput);
    return true;
  }

  function validatePassword() {
    const value = passwordInput.value.trim();

    if (value === '') {
      showError(passwordInput, '비밀번호를 입력해주세요.');
      return false;
    }

    if (value.length < 8) {
      showError(passwordInput, '비밀번호 8자 이상을 입력해주세요.');
      return false;
    }

    clearError(passwordInput);
    return true;
  }

  
  function setButtonState() {
    const ok = validateEmail() && validatePassword();
    loginBtn.disabled = !ok;
  }

  
  emailInput.addEventListener('input', setButtonState);
  passwordInput.addEventListener('input', setButtonState);

  
  emailInput.addEventListener('focusout', validateEmail);
  passwordInput.addEventListener('focusout', validatePassword);

  
  form.addEventListener('submit', (e) => {
    const ok = validateEmail() && validatePassword();
    loginBtn.disabled = !ok;
    if (!ok) e.preventDefault();
  });

  
  setButtonState();
});