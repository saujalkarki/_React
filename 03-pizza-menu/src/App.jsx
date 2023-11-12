// import { FirstComponent } from "./components/index";

import "./index.css";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <FirstComponent />
    </>
  );
}

function FirstComponent() {
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

//parent component
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="./public/pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="./pizzas/margherita.jpg"
        price={10}
      /> */}
    </div>
  );
}

//child component
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>Pizza: {props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 5}</span>
      </div>
    </li>
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

// -------------------Coding Challange 1-----------------
/*
import "./example.css";

function App() {
  return (
    <div className="card">
      <Head />
      <div className="data">
        <Body
          name="Jonas Schmedtmann"
          details="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
        />
      </div>
    </div>
  );
}

function Head() {
  return (
    <img
      className="avatar"
      src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
      alt="profile photo"
    />
  );
}

function Body(props) {
  return (
    <>
      <div>
        {" "}
        <h1>{props.name}</h1>
        <p>{props.details}</p>
      </div>
      <div className="skill-list">
        <Button color="blue" skills="React" emoji="💪" />
        <Button color="orange" skills="HTML+CSS" emoji="💪" />
        <Button color="yellow" skills="JavaScript" emoji="💪" />
        <Button color="red" skills="Svelte" emoji="👶" />
      </div>
    </>
  );
}

function Button(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skills}</span>
      <span> {props.emoji}</span>
    </div>
  );
}

export default App;
*/
