const emailInput = document.getElementById('username');
const nicknameInput = document.getElementById('nickname');
const passwordInput = document.getElementById('password');
const passwordInputAgain = document.getElementById('password-again')
const signupBtn = document.getElementById('signupBtn');

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
//비밀번호 검증 함수
//1. 일단 입력 받기
  function validdatePassword () {
    const v = passwordInput.value.trim()
  }
//2. 입력이 안되었을때 에러메세지 출력 "비밀번호를 입력해주세요"

//3. 입력을 했지만 8자 미만이면  에러메세지 출력 "비밀번호를 8자 이상 입력해주세요"


//검증이 끝나면 input 버튼에 가입 버튼 활성화