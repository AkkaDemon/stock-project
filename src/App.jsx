import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login/Login";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { StockDetail } from "./Pages/StockDetail/StockDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stockdetail" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
