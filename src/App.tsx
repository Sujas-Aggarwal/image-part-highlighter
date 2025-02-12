import { useState } from "react";

function App() {
  const [currentSelection, setcurrentSelection] = useState<number>(0);
  const items = ["None", "Both", "Boy", "Girl"];
  return (
    <div className="container">
      <div className="canvas">
        <img src="/full.jpg" />
        {items.map((item, index) => {
          console.log(index, currentSelection);
          if (item == "None") return;
          return (
            <img
              key={index}
              style={{
                filter:
                  currentSelection === index
                    ? "drop-shadow(5px 5px 20px rgba(255,255, 255, 1))"
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
      </div>
    </div>
  );
}

export default App;
