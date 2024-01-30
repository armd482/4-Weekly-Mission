import {inputFocus, inputBlur, printError, errorType} from './signFunction.js'
import {loginCheck} from './accountData.js';
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화 및 함수 등록
passToggleReset();

const loginEmailInput = document.querySelector('#loginEmailInput');
const loginPasswordInput = document.querySelector('#loginPasswordInput');
const confirmBtn = document.querySelector('#confirmBtn');

// 에러 메시지 출력 장소
const emailErrorSection = loginEmailInput.parentElement.lastElementChild;
const passwordErrorSection = loginPasswordInput.parentElement.parentElement.lastElementChild;


// 이메일 리스너
loginEmailInput.addEventListener('input' , () => inputFocus(emailErrorSection));
loginEmailInput.addEventListener('focus' , () => inputFocus(emailErrorSection));
loginEmailInput.addEventListener('blur' , () => inputBlur(errorType.email, emailErrorSection));


// 패스워드 리스너
loginPasswordInput.addEventListener('input' , () => inputFocus(passwordErrorSection));
loginPasswordInput.addEventListener('focus' , () => inputFocus(passwordErrorSection));
loginPasswordInput.addEventListener('blur' , () => inputBlur(errorType.password, passwordErrorSection));


// 로그인 정보 제출
const submitLoginData = function (event)  {
   event.preventDefault();
   
   //입력받은 값
   const emailValue = loginEmailInput.value;
   const passwordValue = loginPasswordInput.value;
   
   // 계정정보 유효 확인
   const isAccountSigned = loginCheck(emailValue, passwordValue);

   if (!isAccountSigned) {
      printError(loginEmailInput, emailErrorSection, errorType.mismatchEmail);
      printError(loginPasswordInput, passwordErrorSection, errorType.mismatchPassword);
   } else {
      window.location.href = './folder.html';
   }
}

confirmBtn.addEventListener('click' , submitLoginData);