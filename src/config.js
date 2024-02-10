import { AUTH } from './utils/constants/API';

const BASE_URL = 'https://bootcamp-api.codeit.kr';

export const SIGNIN_API = `${BASE_URL}/${AUTH.signIn}`;
export const SIGNUP_API = `${BASE_URL}/${AUTH.signUp}`;
export const CHECK_EMAIL_API = `${BASE_URL}/${AUTH.checkEmail}`;
export const SAMPLE_USER = `${BASE_URL}/${AUTH.sampleUser}`;
export const SAMPLE_FOLDER = `${BASE_URL}/${AUTH.sampleFolder}`;
