import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Landingpage from "./Landingpage";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landingpage" />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

