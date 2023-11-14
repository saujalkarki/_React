// // import { FirstComponent } from "./components/index";
// import React, { Fragment } from "react";
// import "./index.css";

// const pizzaData = [
//   {
//     name: "Pizza Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return <FirstComponent />;
// }

// function FirstComponent() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
//   // return <h1 style={style}>Fast React Pizza co.</h1>;

//   return (
//     <div style={{}} className="header">
//       <h1>React Pizza co.</h1>
//     </div>
//   );
// }

// //parent component
// function Menu() {
//   const pizzas = pizzaData;
//   // const pizzas = [];
//   const numPizzas = pizzas.length;

//   return (
//     <div className="menu">
//       <h2>Our Menu</h2>

//       {/* rendering list using && operator */}
//       {/* {numPizzas > 0 && (
//         <ul className="pizzas">
//           {pizzas.map((pizza) => (
//             <Pizza pizzaObj={pizza} key={pizza.name} />
//           ))}`
//         </ul>
//       )} */}

//       {/* rendering list using ternart operator */}
//       {numPizzas > 0 ? (
//         <Fragment>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//             perspiciatis placeat cum vero exercitationem fuga.
//           </p>
//           <ul className="pizzas">
//             {pizzas.map((pizza) => (
//               <Pizza pizzaObj={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         </Fragment>
//       ) : (
//         <h2>We will be updating our menu soon!</h2>
//       )}

//       {/* <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="./public/pizzas/spinaci.jpg"
//         price={12}
//       />
//       <Pizza
//         name="Pizza Margherita"
//         ingredients="Tomato and mozarella"
//         photoName="./pizzas/margherita.jpg"
//         price={10}
//       /> */}
//     </div>
//   );
// }

// //child component
// function Pizza({ pizzaObj }) {
//   // if (pizzaObj.soldOut) return null;

//   return (
//     <li className={` pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//         <h3>Pizza: {pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>
//         <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// const Footer = () => {
//   const hour = new Date().getHours();
//   const openHour = 8;
//   const closeHour = 19;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   //   {
//   //     isOpen ? alert("We are Open right now") : alert("We are Close right now");
//   //   }

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closeHour={closeHour} openHours={openHour} />
//       ) : (
//         <p>Hey there, it's already closed.</p>
//       )}
//     </footer>
//   );

//   // return (
//   //   <footer className="footer">
//   //     {new Date().toLocaleTimeString()} We are Currently open in the town!
//   //   </footer>
//   // );
// };
// // For the above code we can perform below task too:
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // function Footer() {
// //   return React.createElement(
// //     "footer",
// //     null,
// //     "We are currently open in the town"
// //   );
// // }

// function Order({ closeHour, openHours }) {
//   return (
//     <div className="order">
//       <p>
//         Open from {openHours}:00 to {closeHour}:00. Come visit us or order
//         online.
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

// export default App;

// -------------------Coding Challange 1-----------------

import "./example.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
        <h1>{props.name}</h1>
        <p>{props.details}</p>
      </div>
      <div className="skill-list">
        {skills.map((skill) => (
          <Button
            skills={skill.skill}
            emoji={skill.level}
            color={skill.color}
            key={skill.skill}
          />
        ))}
        {/* <Button color="blue" skills="React" emoji="💪" />
        <Button color="orange" skills="HTML+CSS" emoji="💪" />
        <Button color="yellow" skills="JavaScript" emoji="💪" />
        <Button color="red" skills="Svelte" emoji="👶" /> */}
      </div>
    </>
  );
}

function Button({ skills, color, emoji }) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skills}</span>
        <span>
          {emoji === "beginner" ? "👶" : emoji === "intermediate" ? "🤟" : "💪"}
        </span>
      </div>
    </>
  );
}

export default App;
