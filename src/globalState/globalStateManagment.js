import apiFetch from "./apiFetch";
import globalState from "./globalState";

const globalStateManagement = () => {
  apiFetch(
    "https://script.google.com/macros/s/AKfycby6XtHJj4fSclHFz3VNJym1JE-iPVL9c4C_UJth8anTNeFbq0SLpR9jBV1DiKSvsPYjQA/exec",
    "styles",
    globalState.setStateValue
  );
};

export default globalStateManagement;
