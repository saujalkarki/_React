/* Coding Challange 1-----------
import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

export default App;

function TextExpander({
  expandButtonText = "Show more",
  collapsedNumWords = 10,
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [showIs, setShowIs] = useState(expanded);

  const displayText = showIs
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        style={{
          color: buttonColor,
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => setShowIs(!showIs)}
      >
        {showIs ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
*/

/*coding challange 2 --- currency converter

 */

import { useState, useEffect } from "react";

function App() {
  const [enteredVal, setEnteredVal] = useState(1);
  const [fromCur, setFromCur] = useState("GBP");
  const [toCur, setToCur] = useState("USD");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeInput(a) {
    setEnteredVal(a.target.value);
  }

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${enteredVal}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setResult(data.rates[toCur]);
        setIsLoading(false);
      }

      if (fromCur === toCur) return setResult(enteredVal);

      convert();
    },
    [enteredVal, fromCur, toCur]
  );

  return (
    <div className="App">
      <div className="A">
        <Input
          enteredVal={enteredVal}
          onChangeInput={handleChangeInput}
          isLoading={isLoading}
        />
        <Conversion
          conversion="from"
          name="fromCur"
          value={fromCur}
          onSet={setFromCur}
          isLoading={isLoading}
        >
          <option value="NPR">GBP</option>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </Conversion>
        <Conversion
          conversion="to"
          name="toCur"
          value={toCur}
          onSet={setToCur}
          isLoading={isLoading}
        >
          <option value="USD">USD</option>
          <option value="NPR">INR</option>
          <option value="EUR">EUR</option>
          <option value="INR">GBP</option>
        </Conversion>
      </div>
      <div className="B">
        <Result result={result} toCur={toCur} />
      </div>
    </div>
  );
}

function Input({ enteredVal, onChangeInput, isLoading }) {
  return (
    <input
      id="input"
      type="number"
      min="1"
      value={enteredVal}
      disabled={isLoading}
      onChange={(e) => onChangeInput(e)}
    />
  );
}

function Conversion({ conversion, name, value, onSet, isLoading, children }) {
  return (
    <select
      name={name}
      id={conversion}
      value={value}
      onChange={(e) => onSet(e.target.value)}
      disabled={isLoading}
    >
      {children}
    </select>
  );
}

function Result({ result, toCur }) {
  return (
    <p>
      {result} {toCur}
    </p>
  );
}

export default App;
