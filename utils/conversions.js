module.exports = {
  f_to_c: (fahrenheit, precision = 2) => {
    return ((fahrenheit - 32) / 1.8).toFixed(precision);
  },
  c_to_f: (celsius, precision = 2) => {
    return ((celsius * 1.8) + 32).toFixed(precision);
  }
}