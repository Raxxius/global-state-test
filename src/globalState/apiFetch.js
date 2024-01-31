async function fetchDataAndUpdateState(url, key, setStateValue) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setStateValue(key, { ...data });
    sessionStorage.setItem("stateUpdateAvailable", key);
    // Trigger the storage event manually after changes
    window.dispatchEvent(new Event("storage"));
  } catch (error) {
    console.error(`Error fetching state data for key ${key}:`, error);
  }
}

export default fetchDataAndUpdateState;
