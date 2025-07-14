/// <reference types="vitest" />
import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("Input Component", () => {
  it("deve aplicar classes padrão corretamente", () => {
    const baseClasses = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
    
    const result = cn(baseClasses);
    
    expect(result).toContain("flex");
    expect(result).toContain("h-9");
    expect(result).toContain("w-full");
    expect(result).toContain("rounded-md");
  });

  it("deve aplicar classes de foco corretamente", () => {
    const focusClasses = "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";
    
    const result = cn(focusClasses);
    
    expect(result).toContain("focus-visible:border-ring");
    expect(result).toContain("focus-visible:ring-ring/50");
    expect(result).toContain("focus-visible:ring-[3px]");
  });

  it("deve aplicar classes de erro corretamente", () => {
    const errorClasses = "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";
    
    const result = cn(errorClasses);
    
    expect(result).toContain("aria-invalid:ring-destructive/20");
    expect(result).toContain("aria-invalid:border-destructive");
  });

  it("deve combinar classes personalizadas com classes padrão", () => {
    const baseClasses = "flex h-9 w-full rounded-md border";
    const customClass = "bg-blue-100";
    
    const result = cn(baseClasses, customClass);
    
    expect(result).toContain("flex");
    expect(result).toContain("bg-blue-100");
  });

  it("deve aplicar classes de arquivo corretamente", () => {
    const fileClasses = "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium";
    
    const result = cn(fileClasses);
    
    expect(result).toContain("file:text-foreground");
    expect(result).toContain("file:inline-flex");
    expect(result).toContain("file:h-7");
  });

  it("deve aplicar classes de estado desabilitado corretamente", () => {
    const disabledClasses = "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
    
    const result = cn(disabledClasses);
    
    expect(result).toContain("disabled:pointer-events-none");
    expect(result).toContain("disabled:cursor-not-allowed");
    expect(result).toContain("disabled:opacity-50");
  });
}); 