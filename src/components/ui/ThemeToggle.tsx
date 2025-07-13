import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={toggleTheme}
      className={
        theme === "light"
          ? "bg-gray-800 text-gray-200"
          : "bg-gray-200 text-white"
      }
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
