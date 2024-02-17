const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const body = await response.json();
  return body;
}

export async function getUsersFolder() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const body = await response.json();
  return body;
}

export async function getUsersLink(id) {
  const response = await fetch(`${BASE_URL}/users/1/links${id}`);
  const body = await response.json();
  return body;
}
