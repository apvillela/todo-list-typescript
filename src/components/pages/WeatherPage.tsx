import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Wind, Droplets, Thermometer } from "lucide-react";
import { mockPrevisao, mockWeatherAtual } from "@/services/Mock";
import { IconeWeather } from "@/components/ui/iconeWeather";

export function WeatherPage() {
  return (
    <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <header className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clima Tempo</h1>
        <form className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Buscar cidade..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </header>

      <main className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-2xl">
                {mockWeatherAtual.cidade}, {mockWeatherAtual.pais}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {mockWeatherAtual.descricao}
              </p>
            </div>
            <IconeWeather
              iconCode={mockWeatherAtual.icone}
              className="size-16 text-yellow-400"
            />
          </CardHeader>
          <CardContent>
            <div className="text-7xl font-bold">{mockWeatherAtual.temp}°C</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detalhes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Thermometer className="size-5" />
                Sensação
              </span>
              <span className="font-medium ml-2">
                {mockWeatherAtual.detalhes.sensacao}°C
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Droplets className="size-5" />
                Umidade
              </span>
              <span className="font-medium">
                {mockWeatherAtual.detalhes.humidade}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Wind className="size-5" />
                Vento
              </span>
              <span className="font-medium">
                {mockWeatherAtual.detalhes.velocidadeVento} km/h
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Previsão para 5 dias</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {mockPrevisao.map((day) => (
              <div
                key={day.day}
                className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/30 p-4"
              >
                <span className="font-medium text-muted-foreground">
                  {day.day}
                </span>
                <IconeWeather
                  iconCode={day.icon}
                  className="size-10 text-yellow-400"
                />
                <div>
                  <span className="font-bold">{day.high}°</span>
                  <span className="text-muted-foreground">/{day.low}°</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
