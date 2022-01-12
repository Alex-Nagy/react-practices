import { useState } from "react";
import "./App.css";

// ---------------------------------------------------------
const cars = [
  {
    brand: "BMW",
    model: "i3",
    fuel: "electric",
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    fuel: "Gas",
  },
  {
    brand: "Tesla",
    model: "S",
    fuel: "electric",
  },
  {
    brand: "Honda",
    model: "Accord",
    fuel: "Gas",
  },
];


function App() {
  const [pageName, setPageName] = useState("Home");
  const [shouldShowLanding, setShouldShowLanding] = useState(true);
  const [myInputValue, setMyInputValue] = useState("");

  console.log("render");
  console.log(myInputValue);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={() => setPageName("Landing")}>Landing</button>
      <button onClick={() => setPageName("Home")}>Home</button>
      <button onClick={() => setPageName("About")}>About</button>

      <div>
        {shouldShowLanding ? <div>Landing page</div> : <div>Home page</div>}
      </div>
      <button onClick={() => setShouldShowLanding(!shouldShowLanding)}>
        Toggle
      </button>

      <main>
        {pageName === "Home" && <div>Home page component</div>}
        {pageName === "About" && <div>About component</div>}
        {pageName === "Landing" && <div>Landing component</div>}
      </main>

      <div>
        {pageName !== "Landing" && <div>This is not the Landing component</div>}
      </div>

      <hr />

      <input
        value={myInputValue}
        onChange={(e) => setMyInputValue(e.target.value)}
      ></input>

      {myInputValue.length < 3 ? (
        <input type="submit" disabled />
      ) : (
        <input type="submit" />
      )}
      {myInputValue.length < 3 && <div>Min 3 char!</div>}

      <ul>
        { cars.filter(name => name.brand.includes({myInputValue})).map(car => (
          <li key={car.model}>
            {car.brand} - {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
