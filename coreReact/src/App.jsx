import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Event, Home } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
