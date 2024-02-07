import * as common from "./login.js";
import { emailCheck } from "../validation.js"; 
import { inputDeleteNode } from "../node.js";
import { emailInput, pwdInput, signinBtn, pwdEyeIcon} from "../declaration.js";
import { localStorage } from "../localStorage.js";

let emailVal = "", pwdVal = "";

// 로컬 스토리지에 accssToken이 있는 경우 folder페이지로 이동
(() => {
  localStorage.remove('accessToken');
  localStorage.get('accessToken')? location.assign("folder.html") : null
})();

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  if(email) {
    return emailCheck(email) ? inputDeleteNode('email') : common.errorMsg("wrongEmail")
  } 
  return  common.errorMsg("NoEmail");
}

// 로그인 시도 함수
function trySignin() {
  emailInput.dispatchEvent(new Event('focusout'));
  pwdInput.dispatchEvent(new Event('focusout'));

  if(emailVal&&pwdVal) {
    return accountRequest(emailVal, pwdVal);
  } 
  return common.errorMsg("Other"); 
};

// 로그인 시도 시 서버 리퀘스트 요청
async function accountRequest(email, password) {
  const user = {
    "email": email, //test@codeit.com 
    "password": password, //sprint101
  }

  try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
    const result = await response.json();
    await localStorage.save('accessToken',result.data.accessToken)
    await location.assign("folder.html");
  } catch(e) {
    console.log(e);
  }
}

function passwordHandlerFuc(password) {
  password ? inputDeleteNode('password') : common.errorMsg("NoPwd");
  pwdVal = password;
}

// email input 이벤트 함수 등록
emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
  emailVal = e.target.value;
});
emailInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key,trySignin);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
  pwdVal = e.target.value;
});
pwdInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key, trySignin);
});

// 로그인 버튼 이벤트 함수 등록
signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
 });


 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
 })