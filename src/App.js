import "./App.css";
import HomeScreenWrapper from "./components/HomeScreenWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pumps Overview</h2>
      </header>
      <div>
        <HomeScreenWrapper></HomeScreenWrapper>
      </div>
    </div>
  );
}

export default App;
