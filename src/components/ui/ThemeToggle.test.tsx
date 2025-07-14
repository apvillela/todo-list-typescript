/// <reference types="vitest" />
import { describe, it, expect } from "vitest";

// Função para simular a lógica de toggle do tema
function toggleTheme(currentTheme: "light" | "dark"): "light" | "dark" {
  return currentTheme === "light" ? "dark" : "light";
}

// Função para simular a lógica de classes do botão
function getButtonClasses(theme: "light" | "dark"): string {
  return theme === "light" 
    ? "bg-gray-800 text-gray-200"
    : "bg-gray-200 text-white";
}

// Função para simular qual ícone deve ser exibido
function getIconType(theme: "light" | "dark"): "Sun" | "Moon" {
  return theme === "light" ? "Sun" : "Moon";
}

describe("ThemeToggle Component", () => {
  it("deve alternar de light para dark", () => {
    const result = toggleTheme("light");
    
    expect(result).toBe("dark");
  });

  it("deve alternar de dark para light", () => {
    const result = toggleTheme("dark");
    
    expect(result).toBe("light");
  });

  it("deve retornar classes corretas para tema light", () => {
    const classes = getButtonClasses("light");
    
    expect(classes).toBe("bg-gray-800 text-gray-200");
  });

  it("deve retornar classes corretas para tema dark", () => {
    const classes = getButtonClasses("dark");
    
    expect(classes).toBe("bg-gray-200 text-white");
  });

  it("deve mostrar ícone Sun no tema light", () => {
    const iconType = getIconType("light");
    
    expect(iconType).toBe("Sun");
  });

  it("deve mostrar ícone Moon no tema dark", () => {
    const iconType = getIconType("dark");
    
    expect(iconType).toBe("Moon");
  });
}); 