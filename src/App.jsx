import "./App.css";
import Login from "./Component/Login/Login";
import Data from "./Component/Data/Data";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="fap">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Data" element={<Data />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
