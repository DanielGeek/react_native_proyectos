import { Route, Routes } from "react-router";

import { Ordenes } from "./components/paginas/Ordenes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ordenes />} />
      </Routes>
    </div>
  );
}

export default App;
