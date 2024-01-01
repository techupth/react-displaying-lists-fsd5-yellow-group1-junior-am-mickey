import "./App.css";
import movies from "./data/movies";
import { MovieList } from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className="heading-text">Movie List Section</h1>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
