import "./App.css";
import { useEffect, useState } from "react";
import globalState from "./globalState/globalState";
import globalStateManagement from "./globalState/globalStateManagment";

function App() {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    globalStateManagement();
  }, []);

  useEffect(() => {
    console.log(sessionStorage.stateUpdateAvailable);
    // handleStorageChange function
    const handleStorageChange = () => {
      if (sessionStorage.stateUpdateAvailable === "styles") {
        setStyles(globalState.getValueByKey("styles"));
      }
    };

    // Event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log(sessionStorage);

  return (
    <div className="App">
      <h1>Style List</h1>
      <ul>
        {Object.entries(styles).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
