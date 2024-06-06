import { Try, UsingEffect } from "./index";
// import { UsingEffect } from "./UsingEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // return <UsingEffect />;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsingEffect />} />
          <Route path="/try" element={<Try />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
