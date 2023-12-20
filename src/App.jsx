import "./App.css";
import { movieSection } from "./data/movies";

function App() {
  return (
    <div className="App">
      
      <section className="movie-list-section">
      <h1 className="title">Movie List Section</h1>
        {movieSection}
      </section>
    </div>
  );
}

export default App;
