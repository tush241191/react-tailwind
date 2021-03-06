import { Routes, Route } from "react-router-dom";
import Checkout from "./views/checkout/Index";
import Index from "./views/Index";
import PlayDetails from "./views/plays/Details";
import Plays from "./views/plays/Index";
import Theater from "./views/theaters/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/plays" element={<Plays />}/>
        <Route path="/plays/:id" element={<PlayDetails />} />
        <Route path="/theater/*" element={<Theater />} />
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
