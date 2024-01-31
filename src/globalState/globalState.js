const globalState = {
  stateValues: {},

  setStateValue(key, value) {
    this.stateValues = { ...this.stateValues, [key]: value };
    console.log("State value updated - Key:", key, "Value:", value);
  },

  getValueByKey(key) {
    return this.stateValues[key];
  },

  getAllValues() {
    return this.stateValues;
  },
};

export default globalState;
