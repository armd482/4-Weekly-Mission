import { userInfo } from "./user-info.js";
import { regexEamil, regexPassword } from "./regExp.js";

function vaildEmail(emailInput, emailError, emailDuplication = true) {
    if(!emailInput.value){
        emailError.style.display = "block";
        emailError.textContent = "이메일을 입력해 주세요.";
    }
    else if(!regexEamil.test(emailInput.value)){
        emailError.style.display = "block";
        emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    }
    else if(emailDuplication && (userInfo['email'] === emailInput.value)){
        emailError.style.display = "block";
        emailError.textContent = "이미 사용 중인 이메일입니다.";
    }else{
        emailError.style.display = "none";
    }
}

function vaildPW(pwInput, pwError, pwLength = true){
    if(!pwInput.value){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호를 입력해 주세요.";
    }
    else if(pwLength && (!regexPassword.test(pwInput.value))){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }else{
        pwError.style.display = "none";
    }
}

function vaildConfirmPW(pwInput, pwError, pwLength = true){
    if(!pwInput.value){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호를 입력해 주세요.";
    }
    else if(pwLength && (!regexPassword.test(pwInput.value))){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }
    else{
        pwError.style.display = "none";
    }
}

function focusOut(input, error, validFunction, boolean) {
    input.addEventListener("focusout", () => {
        validFunction(input, error, boolean);
    });
}


export {vaildEmail, vaildPW, vaildConfirmPW, focusOut}