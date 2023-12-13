import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRatings={5}
      message={["bad", "okay", "satisfactory", "good", "excellent"]}
      defaultRating={2}
    />
    <StarRating
      maxRatings={10}
      message={["bad", "okay", "satisfactory", "good", "excellent"]}
      defaultRating={4}
    />
    <StarRating
      maxRatings={3}
      message={["bad", "okay", "satisfactory", "good", "excellent"]}
      defaultRating={1}
    />
    <StarRating
      maxRatings={5}
      color="green"
      message={["bad", "okay", "satisfactory", "good", "excellent"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
