const getPasswordSymbols = (isUppercase, isLowercase, isNumbers, isSymbols) => {
  let allowedSymbols = "";
  if (isUppercase) {
    allowedSymbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (isLowercase) {
    allowedSymbols += "abcdefghijklmnopqrstuvwxyz";
  }
  if (isNumbers) {
    allowedSymbols += "0123456789";
  }
  if (isSymbols) {
    allowedSymbols += "!@#$%^&*()-=_+№;:?";
  }
  return allowedSymbols;
};

export default getPasswordSymbols;
