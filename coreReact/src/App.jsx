import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Event, FormContext, Home, UseContext } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/context" element={<UseContext />} />
          <Route path="/formcontext" element={<FormContext />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
