import { Button } from "../ui/button";

type Props = {
  history: string[];
  onSelect: (city: string) => void;
};

export function HistoryList({ history, onSelect }: Props) {
  if (history.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <span className="text-sm text-muted-foreground">Recentes:</span>
      {history.map((c) => (
        <Button
          key={c}
          variant="outline"
          size="sm"
          className="px-3"
          onClick={() => onSelect(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
}
