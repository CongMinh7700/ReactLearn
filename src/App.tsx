import "./App.css";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layouts/Footer";
import CreatePizzaPage from "./pages/CreatePizzaPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CreatePizzaPage />
      <Footer />
    </div>
  );
}

export default App;
