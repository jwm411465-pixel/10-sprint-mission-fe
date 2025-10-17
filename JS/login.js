document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const form = document.querySelector('form');
  const loginBtn = document.getElementById('loginBtn');

  // 공통: 에러 표시/제거
  function showError(inputEl, message) {
    clearError(inputEl);

    inputEl.classList.add('error-border');

    const p = document.createElement('p');
    p.className = 'error-message';
    p.textContent = message;

    // input의 부모(.username / .password)에 메시지 삽입
    inputEl.parentElement.appendChild(p);
  }

  function clearError(inputEl) {
    inputEl.classList.remove('error-border');
    const old = inputEl.parentElement.querySelector('.error-message');
    if (old) old.remove();
  }

  // 개별 검증
  function validateEmail() {
    const value = emailInput.value.trim();

    if (value === '') {
      showError(emailInput, '이메일을 입력해주세요.');
      return false;
    }

    // HTML5 내장 검사 사용 (type="email")
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

  // 버튼 활성/비활성 제어
  function setButtonState() {
    const ok = validateEmail() && validatePassword();
    loginBtn.disabled = !ok;
  }

  // 입력 중에도 실시간으로 상태 반영
  emailInput.addEventListener('input', setButtonState);
  passwordInput.addEventListener('input', setButtonState);

  // 포커스 아웃 시 메시지 확실히 노출
  emailInput.addEventListener('focusout', validateEmail);
  passwordInput.addEventListener('focusout', validatePassword);

  // 제출 전 최종 검증 (막기)
  form.addEventListener('submit', (e) => {
    const ok = validateEmail() && validatePassword();
    loginBtn.disabled = !ok;
    if (!ok) e.preventDefault();
  });

  // 최초 로드 시 초기 상태 세팅
  setButtonState();
});