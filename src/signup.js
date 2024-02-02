import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");

const validateEmailInput = (email) => {
  if (email === "") {
    // 이메일 주소 미입력
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return false;
  }

  if (!isEmailValid) {
    // 잘못된 이메일 입력
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return false;
  }

  if (email === TEST_USER.email) {
    // 중복 이메일
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이미 사용 중인 이메일입니다."
    );
    return false;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  return true;
};

emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

const validatePasswordInput = (password) => {
  if (password === "" || !isPasswordValid(password)) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
  return true;
};

passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordErrorMessage = document.querySelector(
  "#confirm-password-error-message"
);

const validateConfirmPasswordInput = (confirmPassword) => {
  if (confirmPassword === "" || !isPasswordValid(confirmPassword)) {
    setInputError(
      {
        input: confirmPasswordInput,
        errorMessage: confirmPasswordErrorMessage,
      },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  if (passwordInput.value !== confirmPassword) {
    setInputError(
      {
        input: confirmPasswordInput,
        errorMessage: confirmPasswordErrorMessage,
      },
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeInputError({
    input: confirmPasswordInput,
    errorMessage: confirmPasswordErrorMessage,
  });
  return true;
};

confirmPasswordInput.addEventListener("focusout", (event) =>
  validateConfirmPasswordInput(event.target.value)
);

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const confirmPasswordToggleButton = document.querySelector(
  "#confirm-password-toggle"
);
confirmPasswordToggleButton.addEventListener("click", () =>
  togglePassword(confirmPasswordInput, confirmPasswordToggleButton)
);

const signForm = document.querySelector("#form");

const submitForm = (event) => {
  event.preventDefault();

  const isEmailInputValid = validateEmailInput(emailInput.value);
  const isPasswordInputValid = validatePasswordInput(passwordInput.value);
  const isConfirmPasswordInputValid = validateConfirmPasswordInput(
    confirmPasswordInput.value
  );

  if (
    isEmailInputValid &&
    isPasswordInputValid &&
    isConfirmPasswordInputValid
  ) {
    location.href = "/folder";
  }
};

signForm.addEventListener("submit", submitForm);