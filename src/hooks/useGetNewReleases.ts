import { useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../api/spotify"; // 실제 API 호출 함수

const useGetNewReleases = () => {
  return useQuery({
    queryKey: ["newReleases"], // 1. 쿼리 식별 키 (배열)
    queryFn: getNewReleases, // 2. Promise를 반환하는 API 호출 함수
  });
};

export default useGetNewReleases;
