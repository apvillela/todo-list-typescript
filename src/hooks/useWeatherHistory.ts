import { useState } from "react";
import type { WeatherHistoryResponse } from "@/types/weatherHistory";
import { getWeatherHistory } from "@/api/weather";

export const useWeatherHistory = () => {
  const [data, setData] = useState<WeatherHistoryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async (
    city: string,
    startDate: string,
    endDate?: string,
  ) => {
    setLoading(true);
    setError(null);

    try {
      setLoading(true);
      setError(null);
      const result = await getWeatherHistory(city, startDate, endDate);
      setData(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao buscar clima");
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchHistory };
};
