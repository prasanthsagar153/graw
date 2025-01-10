import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface IFetchResponse<T> {
  count: number;
  results: T[];
}

export default function useFetchData <T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient.get<IFetchResponse<T>>(endpoint, { signal: controller.signal })
      .then(res => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })

    return () => {
      controller.abort();
    }
  }, []);
  
  return { data, error, loading };
};