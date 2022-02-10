const checkMax = (value, max = null) => {
  if (max == null) {
    return -1;
  }
  if (value > max) {
    return max;
  }
  return value;
};

const checkMin = (value, min = null) => {
  if (min == null) {
    // check both undefined and null except zero
    return -1;
  }
  if (value < min) {
    return min;
  }
  return value;
};

export const checkNumber = ({ value, max = null, min = null }) => {
  if (value == null) {
    console.log("checkNumber: undefined value");
    return -1;
  }
  let tempValue = value;
  if (min != null && max != null) {
    tempValue = checkMin(value, min);
    tempValue = checkMax(value, max);
  } else if (max != null) {
    tempValue = checkMax(value, max);
  } else if (min != null) {
    tempValue = checkMin(value, min);
  }
  return tempValue;
};
