// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   return (
//     <div>
//       <Steps />
//       <Steps />
//     </div>
//   );
// }

// function Steps() {
//   let [step, setStep] = useState(1);
//   let [isClosed, setIsClosed] = useState(false);

//   function handlePrevious() {
//     setStep((s) => (s === 1 ? (s = 3) : s - 1));
//   }

//   function handleNext() {
//     setStep((s) => (s === messages.length ? (s = 1) : s + 1));
//   }

//   return (
//     <div>
//       <button
//         className="close"
//         onClick={() => {
//           setIsClosed((isC) => !isC);
//         }}
//       >
//         &times;
//       </button>
//       {isClosed || (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step === 1 ? "active" : ""}>1</div>
//             <div className={step === 2 ? "active" : ""}>2</div>
//             <div className={step === 3 ? "active" : ""}>3</div>
//           </div>
//           <p className="message">
//             Step {step} : {messages[step - 1]}
//           </p>
//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7905f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7905f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  return (
    <>
      <Step key1="Step" />
      <Step key1="Count" />
    </>
  );
}

function Step({ key1 }) {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(1);

  function clickMuinus() {
    (s) => {
      s === 0 ? 0 : setStep((s -= 1));
    };
    (c) => {
      setCount((c -= 1));
    };
  }

  function clickPlus() {
    (s) => {
      setStep((s += 1));
    };
    (c) => {
      setCount((c += 1));
    };
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={clickMuinus}>-</button>
      <span>
        {key1} : {key1 === "Count" ? count : step}
      </span>
      <button onClick={clickPlus}>+</button>
    </div>
  );
}

function Display() {}

export default App;
