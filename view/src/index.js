import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./Table";
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>     
        <Route path="/" element={<Table/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);