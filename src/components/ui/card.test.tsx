/// <reference types="vitest" />
import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("Card Components", () => {
  it("deve aplicar classes padrão corretamente", () => {
    const baseClasses = "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm";
    const customClass = "custom-class";
    
    const result = cn(baseClasses, customClass);
    
    expect(result).toContain("bg-card");
    expect(result).toContain("custom-class");
  });

  it("deve combinar classes personalizadas com classes padrão", () => {
    const headerClasses = "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6";
    const customClass = "extra-padding";
    
    const result = cn(headerClasses, customClass);
    
    expect(result).toContain("grid");
    expect(result).toContain("extra-padding");
  });

  it("deve aplicar classes de título corretamente", () => {
    const titleClasses = "leading-none font-semibold";
    
    const result = cn(titleClasses);
    
    expect(result).toContain("leading-none");
    expect(result).toContain("font-semibold");
  });

  it("deve aplicar classes de descrição corretamente", () => {
    const descriptionClasses = "text-muted-foreground text-sm";
    
    const result = cn(descriptionClasses);
    
    expect(result).toContain("text-muted-foreground");
    expect(result).toContain("text-sm");
  });

  it("deve aplicar classes de conteúdo corretamente", () => {
    const contentClasses = "px-6";
    const customClass = "py-4";
    
    const result = cn(contentClasses, customClass);
    
    expect(result).toContain("px-6");
    expect(result).toContain("py-4");
  });

  it("deve aplicar classes de rodapé corretamente", () => {
    const footerClasses = "flex items-center px-6 [.border-t]:pt-6";
    
    const result = cn(footerClasses);
    
    expect(result).toContain("flex");
    expect(result).toContain("items-center");
    expect(result).toContain("px-6");
  });
}); 