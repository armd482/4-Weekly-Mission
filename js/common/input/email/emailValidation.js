import errMsg from '../../errMsg/errMsg.js';

const selector = document.querySelector('#email');


//이메일 유효성 체크
const isEmailVaild = (email) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(email);
}

//이메일 유효성 검사(로그인)
const validateSigninEmailInput = (e) => {
  if(isEmpty(e)){
    errMsg(e, '이메일을 입력해 주세요.');
  }else if(isNotEmail(e)){
    errMsg(e, '올바른 이메일 주소가 아닙니다.');
  }
}

//이메일 유효성 검사(회원가입)
const validateSignupEmailInput = (e) => {
  if(isEmpty(e)){
    errMsg(e, '이메일을 입력해 주세요.');
  }else if(isNotEmail(e)){
    errMsg(e, '올바른 이메일 주소가 아닙니다.');
  }else if(isUsing(e)){
    errMsg(e, '이미 사용 중인 이메일입니다.');
  }
}

const isNotEmail = (e) => {
  if(!isEmailVaild(e.value)){
    return true;
  } 
}

const isUsing = (e) => {
  if(e.value === 'test@codeit.com'){
    return true;
  }
}

const isEmpty = (e) => {
  if(!e.value) {
    return true;
  }
}

export default {validateSigninEmailInput, validateSignupEmailInput, selector};