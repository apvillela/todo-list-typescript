import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  city: string;
  setCity: (city: string) => void;
  onSearch: (e: React.FormEvent) => void;
  loading: boolean;
};

export function SearchForm({ city, setCity, onSearch, loading }: Props) {
  return (
    <form
      onSubmit={onSearch}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="Buscar cidade..."
        className="flex-1"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" size="icon" disabled={loading}>
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
}
