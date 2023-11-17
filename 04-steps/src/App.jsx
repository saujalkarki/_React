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
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7905f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7905f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
