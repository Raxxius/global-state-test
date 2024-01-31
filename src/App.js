import "./App.css";
import { useEffect, useState } from "react";
import globalState from "./globalState/globalState";

function App() {
  const [styles, setStyles] = useState({});

  console.log(globalState.getAllValues());

  useEffect(() => {
    console.log(sessionStorage.stateUpdateAvailable);

    // handleStorageChange function
    const handleStorageChange = () => {
      if (sessionStorage.stateUpdateAvailable) {
        console.log("handleStorageChange engaged");
        setStyles(globalState.getAllValues());
        sessionStorage.setItem("stateUpdateAvailable", false);
        console.log(sessionStorage);
      }
    };

    // Event listener
    window.addEventListener("storage", handleStorageChange);
    console.log("event listener engaged");

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="App">
      <h1>Style List</h1>
      <ul>
        {Object.entries(styles).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
