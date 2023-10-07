const getPassword = (allowedSymbols, rangeValue, setPassword, setIsError) => {
  let password = "";
  if (allowedSymbols) {
    for (let i = 0; i < rangeValue; i++) {
      password +=
        allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)];
    }
    setPassword(password);
  } else {
    setIsError(true);
  }
};

export default getPassword;
