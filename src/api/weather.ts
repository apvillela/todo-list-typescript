import axios, { isAxiosError } from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getWeatherByCity(city: string) {
  return await axios
    .get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        lang: "pt",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      if (isAxiosError(error)) {
        throw new Error(
          error.response?.data?.error?.message ||
            `Erro ao buscar de clima de ${city}`,
        );
      }

      throw new Error(
        error.response?.data?.error?.message ||
          `Erro ao buscar de clima de ${city}`,
      );
    });
}

export const getWeatherHistory = async (
  city: string,
  startDate: string,
  endDate?: string,
) => {
  return await axios
    .get(`${BASE_URL}/history.json`, {
      params: {
        key: API_KEY,
        q: city,
        dt: startDate,
        ...(endDate && { end_dt: endDate }),
        lang: "pt",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      if (isAxiosError(error)) {
        throw new Error(
          error.response?.data?.error?.message ||
            `Erro ao buscar histórico climático de ${city}`,
        );
      }

      throw new Error(
        error.response?.data?.error?.message ||
          `Erro ao buscar histórico climático de ${city}`,
      );
    });
};

export const getWeatherForecast = async (
  city: string,
  startDate: string,
  endDate?: string,
) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(startDate);

  const dates: string[] = [];
  const current = new Date(start);
  while (current <= end) {
    dates.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }

  const results = await Promise.all(
    dates.map(async (dateStr) => {
      try {
        const res = await axios.get(`${BASE_URL}/forecast.json`, {
          params: {
            key: API_KEY,
            q: city,
            lang: "pt",
            dt: dateStr,
          },
        });
        return res.data;
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(
            error.response?.data?.error?.message ||
              `Erro ao buscar histórico climático de ${city} em ${dateStr}`,
          );
        }
        throw new Error(
          `Erro inesperado ao buscar histórico climático de ${city} em ${dateStr}`,
        );
      }
    }),
  );

  return results;
};
