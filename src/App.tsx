import "./App.css";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { WeatherPage } from "@/pages/WeatherPage";

function App() {
  return (
    <div className="">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="bg-background text-foreground min-h-svh w-full">
        <WeatherPage />
      </div>
    </div>
  );
}

export default App;
