import { useCallback, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const useApi = <T,>() => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getData = useCallback(async (path = '') => {
    setLoading(true);
    try {
      const response = await fetch(API_URL + path);
      const data = (await response.json()) as T[];
      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const addData = useCallback(async (payload: Record<string, unknown>) => {
    setLoading(true);
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, getData, addData };
};
