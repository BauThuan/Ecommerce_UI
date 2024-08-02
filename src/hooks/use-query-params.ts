import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { SCREENS_QUERY_PARAMS } from "../constant";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getQueryParams = useMemo(() => {
    return searchParams.get(SCREENS_QUERY_PARAMS.SCREEN);
  }, [searchParams]);

  const addQueryParams = useCallback(
    (SCREEN_NAME: string) => {
      searchParams.set(SCREENS_QUERY_PARAMS.SCREEN, SCREEN_NAME);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const deleteQueryParams = useMemo(() => {
    searchParams.delete(SCREENS_QUERY_PARAMS.SCREEN);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return {
    getQueryParams,
    addQueryParams,
    deleteQueryParams,
  };
};
