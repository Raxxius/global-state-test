let stateValues = {};

const globalState = {
  setStateValue(key, value) {
    stateValues = { ...stateValues, [key]: value };
  },

  getValueByKey(key) {
    return stateValues[key];
  },

  getAllValues() {
    return stateValues;
  },
};

export default globalState;
