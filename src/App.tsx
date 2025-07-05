import "./App.css";
import { WeatherPage } from "./components/pages/WeatherPage";

function App() {
  return (
    <div className="">
      <div className="bg-background text-foreground min-h-svh w-full">
        <WeatherPage />
      </div>
    </div>
  );
}

export default App;
