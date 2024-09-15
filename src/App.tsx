import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}






// The App component is the root component that imports other components
// to break up the HTML rendering task amongst a hierarchy of components

// For how we are just rendering the Labs component,
// wh
