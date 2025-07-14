import { describe, it, expect } from "vitest";
import { formatDisplayDate } from "./formatDisplayDate.util";

describe("formatDisplayDate", () => {
  it("deve formatar data string para DD/MM", () => {
    const dateString = "2024-03-15T12:00:00";
    const result = formatDisplayDate(dateString);
    expect(result).toBe("15/03");
  });

  it("deve adicionar zero à esquerda para dia e mês menores que 10", () => {
    const dateString = "2024-01-05T12:00:00";
    const result = formatDisplayDate(dateString);
    expect(result).toBe("05/01");
  });

  it("deve formatar último dia do ano corretamente", () => {
    const dateString = "2024-12-31T12:00:00";
    const result = formatDisplayDate(dateString);
    expect(result).toBe("31/12");
  });

  it("deve formatar primeiro dia do ano corretamente", () => {
    const dateString = "2024-01-01T12:00:00";
    const result = formatDisplayDate(dateString);
    expect(result).toBe("01/01");
  });
});
