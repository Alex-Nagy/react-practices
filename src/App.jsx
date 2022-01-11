import { useState } from "react";
import "./App.css";
// landin, home, about. 3 gomb. stringek

// ---------------------------------------------------------

function App() {
  const [pageName, setPageName] = useState("Home");

  const [shouldShowLanding, setShouldShowLanding] = useState(true);

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
        {pageName === "Landing" || <div>This is not the Landing component</div>}
      </div>
    </div>
  );
}

export default App;
