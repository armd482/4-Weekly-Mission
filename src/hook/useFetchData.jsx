import { useQuery } from 'react-query';

/**
 * fetch 커스텀 훅
 * @param {Function} fetchFunction 데이터 가져오는 비동기 함수
 * @param {Function} processData 데이터 처리하는 함수
 * @param {string} queryKey
 */
function useFetchData(fetchFunction, queryKey, processData) {
  return useQuery(queryKey, async () => {
    try {
      const res = await fetchFunction();
      if (!res.ok) {
        throw new Error('Response error');
      }
      const data = await res.json();
      return processData(data);
    } catch (e) {
      return;
    }
  });
}

export default useFetchData;
