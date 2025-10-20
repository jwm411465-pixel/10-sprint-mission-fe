// 상수 설정
const emailInput = document.getElementById('username');
const nicknameInput = document.getElementById('nickname');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('passwordconfirm')
const signupBtn = document.getElementById('signupBtn');

//함수 설정
function showError(inputEl, message) {
  clearError(inputEl);
  inputEl.classList.add('error-border');
  const p = document.createElement('p');
  p.className = 'error-message';
  p.textContent = message;
  inputEl.parentElement.appendChild(p);
}
function clearError (inputEl) {
  inputEl.classList.remove('error-border');
  const old = inputEl.parentElement.querySelector('.error-message');
  if (old) old.remove();
}
function validdateEmail() {
  // const v = emailInput.ariaValueMax.trim(); aira는 접근성용 ARIA속성 range, meter,progress전용
  const v = emailInput.value.trim();
  if (v === '') { showError(emailInput, '이메일을 입력해주세요.'); return false; }
  if (emailInput.validity.typeMismatch) { showError(emailInput, '잘못된 이메일 형식입니다.'); return false;}
  clearError(nicknameInput); return true;
}
function validateNickname() {
  const v = nicknameInput.value.trim();
  if (v === '') { showError(nicknameInput, '닉네임을 입력해주세요.'); return false; }
  clearError(nicknameInput); return true;
}
//비밀번호 검증 함수
//1. 일단 입력 받기
function validdatePassword () {
  const v = passwordInput.value.trim()
  //2. 입력이 안되었을때 에러메세지 출력 "비밀번호를 입력해주세요"
  if (v== '') {showError(passwordInput, '비밀번호를 입력해주세요.'); return false; }
  //3. 입력을 했지만 8자 미만이면  에러메세지 출력 "비밀번호를 8자 이상 입력해주세요"
  if (v.lenght < 8) {showError(passwordInput, '비밀번호 8자 이상을 입력해주세요.'); return false; }
  clearError(passwordInput); return true;
  }

//비밀번호 재확인 함수
function validdatePasswordConfirm() {
  const v = passwordComfirminput.value.trim()
  if (v=='') {showError(passwordComfirminput, '비밀번호 확인을 입력해주세요.'); return false; }
  if (v !== passwordInput.value.trim()) {showError(passwordComfirminput, '비밀번호가 일치하지 않습니다.'); return false; }
  clearError(passwordComfirminput); return true;
}
//검증이 끝나면 input 버튼에 가입 버튼 활성화
function setButton() {
  const ok = validdateEmail() && validateNickname() && validdatePassword() && validdatePasswordConfirm();
  signupBtn.disabled = !ok;
}


//함수 실행(EventListener)
emailInput.addEventListener('input', setButtonState);
nicknameInput.addEventListener('input', setButtonState);
passwordInput.addEventListener('input', setButtonState);
passwordConfirmInput.addEventListener('input', setButtonState);

emailInput.addEventListener('focusout', validdateEmail);
nicknameInput.addEventListener('focusout', validateNickname);
passwordInput.addEventListener('focusout', validdatePassword);
passwordConfirmInput.addEventListener('focusout',validdatePasswordConfirm);

FormData.addEventListener('submit', (e) => {
  const ok = validdateEmail() && validateNickname() && validdatePassword() && validdatePasswordConfirm();
  signupBtn.disabled = !ok;
  if (!ok) e.preventDefault();
});
