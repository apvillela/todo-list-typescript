import { describe, it, expect } from "vitest";
import { formatDate } from "./formatDate.util";

describe("formatDate", () => {
  it("deve formatar data corretamente para YYYY-MM-DD", () => {
    const date = new Date(2024, 2, 15);
    const result = formatDate(date);
    expect(result).toBe("2024-03-15");
  });

  it("deve adicionar zero à esquerda para mês e dia menores que 10", () => {
    const date = new Date(2024, 0, 5);
    const result = formatDate(date);
    expect(result).toBe("2024-01-05");
  });

  it("deve formatar data de dezembro corretamente", () => {
    const date = new Date(2024, 11, 31);
    const result = formatDate(date);
    expect(result).toBe("2024-12-31");
  });

  it("deve formatar primeiro dia do ano corretamente", () => {
    const date = new Date(2024, 0, 1);
    const result = formatDate(date);
    expect(result).toBe("2024-01-01");
  });
});
