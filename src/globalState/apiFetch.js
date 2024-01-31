async function fetchDataAndUpdateState(url, key, setStateValue) {
  sessionStorage.setItem("stateUpdateAvailable", false);
  try {
    const response = await fetch(url);
    const data = await response.json();
    setStateValue(key, { ...data });
    sessionStorage.setItem("stateUpdateAvailable", true);
    console.log(sessionStorage);
    // Trigger the storage event manually after changes
    window.dispatchEvent(new Event("storage"));
  } catch (error) {
    console.error(`Error fetching state data for key ${key}:`, error);
  }
}

export default fetchDataAndUpdateState;
