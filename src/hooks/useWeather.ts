import { useState } from "react";
import { getWeatherForecast } from "@/api/weather";
import type { WeatherResponse, Forecastday } from "@/types/WeatherResponse";

export const useWeather = () => {
  const [data, setData] = useState<WeatherResponse[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (
    city: string,
    startDate: string,
    endDate?: string,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const result = (await getWeatherForecast(
        city,
        startDate,
        endDate,
      )) as WeatherResponse[];

      setData(result);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const currentWeather = data && data.length > 0 ? data[0].current : null;
  const location = data && data.length > 0 ? data[0].location : null;

  const forecastWeather: Forecastday[] =
    data?.flatMap((res) => res.forecast.forecastday) || [];

  return {
    data,
    loading,
    error,
    fetchWeather,
    currentWeather,
    forecastWeather,
    location,
  };
};
