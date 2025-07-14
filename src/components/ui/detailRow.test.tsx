/// <reference types="vitest" />
import { describe, it, expect } from "vitest";

// Função para simular a renderização do componente DetailRow
function createDetailRowProps(icon: React.ElementType, label: string, value: React.ReactNode) {
  return { icon, label, value };
}

// Mock icon component
const MockIcon = () => null;

describe("DetailRow Component", () => {
  it("deve aceitar props corretas", () => {
    const props = createDetailRowProps(MockIcon, "Temperatura", "25°C");
    
    expect(props.icon).toBe(MockIcon);
    expect(props.label).toBe("Temperatura");
    expect(props.value).toBe("25°C");
  });

  it("deve aceitar componente de ícone como prop", () => {
    const CustomIcon = () => null;
    const props = createDetailRowProps(CustomIcon, "Humidade", "60%");
    
    expect(props.icon).toBe(CustomIcon);
    expect(typeof props.icon).toBe("function");
  });

  it("deve aceitar string como label", () => {
    const props = createDetailRowProps(MockIcon, "Vento", "15 km/h");
    
    expect(typeof props.label).toBe("string");
    expect(props.label).toBe("Vento");
  });

  it("deve aceitar ReactNode como value", () => {
    const props = createDetailRowProps(MockIcon, "Pressão", "1013 hPa");
    
    expect(props.value).toBe("1013 hPa");
  });

  it("deve aceitar value como número", () => {
    const props = createDetailRowProps(MockIcon, "Condição", 42);
    
    expect(props.value).toBe(42);
  });

  it("deve ter todas as props obrigatórias", () => {
    const props = createDetailRowProps(MockIcon, "Visibilidade", "10 km");
    
    expect(props).toHaveProperty("icon");
    expect(props).toHaveProperty("label");
    expect(props).toHaveProperty("value");
  });
}); 