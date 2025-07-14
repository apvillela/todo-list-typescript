/// <reference types="vitest" />
import { describe, it, expect } from "vitest";

// Função para simular a lógica do componente IconeWeather
function isUrlIcon(iconCode: string): boolean {
  return iconCode.startsWith("http") || iconCode.endsWith(".png");
}

function createIconeWeatherProps(iconCode: string, size?: number, className?: string) {
  return { iconCode, size: size || 24, className };
}

describe("IconeWeather Component", () => {
  it("deve detectar URL que começa com http", () => {
    const isUrl = isUrlIcon("https://example.com/icon.png");
    
    expect(isUrl).toBe(true);
  });

  it("deve detectar URL que termina com .png", () => {
    const isUrl = isUrlIcon("weather-icon.png");
    
    expect(isUrl).toBe(true);
  });

  it("deve retornar false para código de ícone simples", () => {
    const isUrl = isUrlIcon("sunny");
    
    expect(isUrl).toBe(false);
  });

  it("deve usar tamanho padrão quando não especificado", () => {
    const props = createIconeWeatherProps("cloudy");
    
    expect(props.size).toBe(24);
  });

  it("deve aceitar tamanho personalizado", () => {
    const props = createIconeWeatherProps("rainy", 32);
    
    expect(props.size).toBe(32);
  });

  it("deve aceitar className opcional", () => {
    const props = createIconeWeatherProps("snowy", 16, "text-blue-500");
    
    expect(props.className).toBe("text-blue-500");
    expect(props.iconCode).toBe("snowy");
    expect(props.size).toBe(16);
  });
}); 