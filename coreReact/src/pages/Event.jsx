export function Event() {
  return (
    <>
      <h1>This is Event handling learning page.</h1>

      <div>
        {/* handling mouse events */}
        <button
          onClick={() => console.log("Button A Clicked.")}
          onMouseDown={() => console.log("Button A Pressed and hold.")}
          onMouseUp={() => console.log("Button A Pressed and lifted up.")}
          onMouseEnter={() => console.log("Mouse entered on Button A.")}
          onMouseLeave={() => console.log("Mouse Leaved button A")}
          onMouseOut={() => console.log("Mouse out button A")}
          onMouseOver={() => console.log("Mouse over button A")}
        >
          Button A
        </button>
        <br />
        <br />
        <br />
        {/* handling Pointer events */}
        <button
          onPointerDown={() => console.log("pointer down button B")}
          onPointerUp={() => console.log("pointer Up button B")}
          onPointerEnter={() => console.log("pointer Enter button B")}
          onPointerLeave={() => console.log("pointer Leave button B")}
          onPointerOver={() => console.log("pointer Over button B")}
          onPointerOut={() => console.log("pointer out button B")}
          onPointerMove={() => console.log("pointer move button B")}
        >
          Button B
        </button>
        <br />
        <br />
        <br />
        {/* handling focus events */}
        <div
          onFocus={(e) => {
            console.log("e.target", e.target);
            console.log("e.currentTarget", e.currentTarget);
            console.log("e.relatedTarget", e.relatedTarget);

            console.log(
              "e.currentTarget.contains",
              e.currentTarget.contains(e.relatedTarget)
            );
            if (e.currentTarget === e.target) {
              console.log("Focus entered Parent");
            } else {
              console.log("focues not entered parent");
            }
          }}
          onBlur={(e) => {
            console.log("e.target", e.target);
            console.log("e.currentTarget", e.currentTarget);
            console.log("e.relatedTarget", e.relatedTarget);
          }}
        >
          <input type="text" className="Hi" />
          <br />
          <br />
          <br />
          <input type="text" className="Hello" />
        </div>
        <br />
        <br />
        <br />
        {/* On KeyDownCapture */}
        <input
          type="text"
          onKeyDown={(e) => {
            console.log(e.key, e.code);
          }}
          onKeyDownCapture={(e) => {
            console.log(e.key, e.code);
          }}
          onKeyUpCapture={(e) => {
            console.log(e.key, e.code);
          }}
        />
      </div>
    </>
  );
}
