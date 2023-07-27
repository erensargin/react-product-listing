import "./App.css";
import Home from "./pages/Home";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <div className="App">
          <Home />
        </div>
      </ProductProvider>
    </>
  );
}

export default App;
