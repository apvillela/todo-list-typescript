import "./App.css";
import { WeatherPage } from "@/pages/WeatherPage";

function App() {
  return (
    <div>
      <div className="bg-background text-foreground min-h-svh w-full">
        <WeatherPage />
      </div>
    </div>
  );
}

export default App;
