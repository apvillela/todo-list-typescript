import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../ui/button";

type Props = {
  history: string[];
  onSelect: (city: string) => void;
};

export function HistoryList({ history, onSelect }: Props) {
  const { theme } = useTheme();
  if (history.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      <span
        className={`text-sm ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Recentes:
      </span>
      {history.map((c) => (
        <Button
          key={c}
          size="sm"
          className={`px-3 ${
            theme === "light"
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-200 text-white"
          }`}
          onClick={() => onSelect(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
}
