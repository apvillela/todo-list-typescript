import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetailRow } from "@/components/ui/detailRow";
import { IconeWeather } from "@/components/ui/iconeWeather";
import { Input } from "@/components/ui/input";
import { Droplets, Search, Thermometer, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/formatDate.util";
import { formatDisplayDate } from "@/utils/formatDisplayDate.util";
import { useWeather } from "@/hooks/useWeather";

export function WeatherPage() {
  const [city, setCity] = useState("Limoeiro do Norte");

  const {
    loading,
    error,
    fetchWeather,
    currentWeather,
    forecastWeather,
    location,
  } = useWeather();

  const loadWeatherData = async (cityName: string) => {
    const today = new Date();

    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 2);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 6);

    await fetchWeather(cityName, formatDate(startDate), formatDate(endDate));
  };

  useEffect(() => {
    loadWeatherData(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;
    await loadWeatherData(city);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <header className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clima Tempo</h1>
        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <Input
            type="text"
            placeholder="Buscar cidade..."
            className="flex-1"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit" size="icon" disabled={loading}>
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </header>

      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Carregando dados...</p>}

      {currentWeather && location && (
        <main className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-2xl">
                  {location.name}, {location.country}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {currentWeather.condition.text}
                </p>
              </div>
              <IconeWeather
                iconCode={currentWeather.condition.icon}
                className="size-16 text-yellow-400"
              />
            </CardHeader>
            <CardContent>
              <div className="text-7xl font-bold">
                {currentWeather.temp_c}°C
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalhes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <DetailRow
                icon={Thermometer}
                label="Sensação"
                value={`${currentWeather.feelslike_c}°C`}
              />
              <DetailRow
                icon={Droplets}
                label="Umidade"
                value={`${currentWeather.humidity}%`}
              />
              <DetailRow
                icon={Wind}
                label="Vento"
                value={`${currentWeather.wind_kph} km/h`}
              />
            </CardContent>
          </Card>
        </main>
      )}

      {forecastWeather.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Previsão dos próximos dias</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {forecastWeather.map((day) => (
              <div
                key={day.date}
                className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/30 p-4"
              >
                <span className="font-medium text-muted-foreground">
                  {formatDisplayDate(day.date)}
                </span>
                <IconeWeather
                  iconCode={day.day.condition.icon}
                  className="size-10 text-yellow-400"
                />
                <div>
                  <span className="text-muted-foreground">
                    {day.day.mintemp_c}°
                  </span>
                  <span className="font-bold">/{day.day.maxtemp_c}°</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
