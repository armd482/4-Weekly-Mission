const API_URL = 'https://bootcamp-api.codeit.kr/api/';

async function useFetch(apiUrl) {
  const url = new URL(apiUrl, API_URL);

  const response = await fetch(url);
  const result = await response.json();
  const responseError = result.error;

  if (!response.ok) {
    throw new Error(`User response error: ${responseError}`);
  }

  return result;
}

export default useFetch;
