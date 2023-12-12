import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import App from "./App.jsx";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRatings={5} />
    <StarRating maxRatings={10} />
    <StarRating />
  </React.StrictMode>
);
