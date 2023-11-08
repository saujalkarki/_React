// import { FirstComponent } from "./components/index";

import "./index.css";

function App() {
  return (
    <>
      <FirstComponent />
    </>
  );
}

function FirstComponent() {
  console.clear();
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza co.</h1>;

  return (
    <div style={{}} className="header">
      <h1>React Pizza co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <>
      <h1>Pizza: Pizza Spinaci</h1>
      <img src="./public/pizzas/spinaci.jpg" alt="Pizza_here" />
      <h2>Tomato, mozarella, spinach, and ricotta cheese</h2>
    </>
  );
}

const Footer = () => {
  //   const hour = new Date().getHours();
  //   const openHour = 9;
  //   const closeHour = 19;
  //   const isOpen = hour >= openHour && hour <= closeHour;
  //   console.log(hour);
  //   console.log(isOpen);

  //   {
  //     isOpen ? alert("We are Open right now") : alert("We are Close right now");
  //   }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are Currently open in the town!
    </footer>
  );
};
// For the above code we can perform below task too:
// import React from "react";
// import ReactDOM from "react-dom/client";
// function Footer() {
//   return React.createElement(
//     "footer",
//     null,
//     "We are currently open in the town"
//   );
// }

export default App;
