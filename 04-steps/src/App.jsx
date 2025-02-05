import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  let [step, setStep] = useState(1);
  let [isClosed, setIsClosed] = useState(false);

  function handlePrevious() {
    setStep((s) => (s === 1 ? (s = 3) : s - 1));
  }

  function handleNext() {
    setStep((s) => (s === messages.length ? (s = 1) : s + 1));
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsClosed((isC) => !isC);
        }}
      >
        &times;
      </button>
      {isClosed || (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <button
                onClick={() => {
                  alert("Good to know, you clicked!");
                }}
              >
                Click Here
              </button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              handleClick={handlePrevious}
              btnContent={" Previous"}
              btnEmoji={"👈🏻"}
            >
              👈🏻 Previous
            </Button>
            <Button
              handleClick={handleNext}
              btnContent={"Next"}
              btnEmoji={"👉🏻"}
            >
              Next 👉🏻
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> : {children}
    </div>
  );
}

function Button({ handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: "#7905f2", color: "#fff" }}
      onClick={handleClick}
    >
      {children}
      {/* {btnContent === "Next" ? btnContent + btnEmoji : btnEmoji + btnContent} */}
    </button>
  );
}

export default App;

// import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Display />
//     </div>
//   );
// }

// function Display() {
//   let [step, setStep] = useState(1);
//   let [count, setCount] = useState(0);

//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             setStep((s) => {
//               return s === 0 ? 0 : s - 1;
//             });
//           }}
//         >
//           -
//         </button>
//         <span>Step : {step}</span>
//         <button
//           onClick={() => {
//             setStep((s) => s + 1);
//           }}
//         >
//           +
//         </button>
//       </div>

//       <div>
//         <button
//           onClick={() => {
//             setCount((c) => c - step);
//           }}
//         >
//           -
//         </button>
//         <span>Count : {count}</span>
//         <button
//           onClick={() => {
//             setCount((c) => c + step);
//           }}
//         >
//           +
//         </button>
//       </div>
//       <span>
//         {count === 0
//           ? "Today is "
//           : count > 0
//           ? `${count} days from today will be `
//           : `${Math.abs(count)} days ago was `}
//       </span>
//       <span>{date.toDateString()}</span>
//     </div>
//   );
// }

// export default App;
