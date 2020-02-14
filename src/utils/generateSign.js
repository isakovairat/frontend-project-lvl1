const generateSign = () => {
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * signs.length)];
};

export default generateSign;
