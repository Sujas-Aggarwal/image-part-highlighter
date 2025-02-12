import { useEffect, useState } from "react";

function App() {
  const [currentSelection, setcurrentSelection] = useState<number>(0);
  const items = ["None", "Both", "Boy", "Girl"];
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        setcurrentSelection((prev) => {
          if (prev === items.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
      if (e.key === "ArrowLeft") {
        setcurrentSelection((prev) => {
          if (prev === 0) {
            return items.length - 1;
          }
          return prev - 1;
        });
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="canvas">
        <img src="/full.jpg" />
        {items.map((item, index) => {
          if (item == "None") return;
          return (
            <img
              key={index}
              style={{
                filter:
                  currentSelection === index
                    ? "drop-shadow(0px 0px 30px rgba(255,255, 255, 1))"
                    : "none",
              }}
              src={`/${item.toLowerCase()}.png`}
            />
          );
        })}
      </div>
      <div className="menu">
        <select
          onChange={(e) => {
            setcurrentSelection(e.target.selectedIndex);
          }}
          className="select"
          defaultValue="None"
        >
          {items.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <p>
          Use {"'<'"} and {"'>'"} Arrow Keys as Shortcut
        </p>
        <a href="https://github.com/Sujas-Aggarwal/image-part-highlighter">
          <img src="/github.png" width={"30px"} />
        </a>
      </div>
    </div>
  );
}

export default App;
