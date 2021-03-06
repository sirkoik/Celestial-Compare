export const processNumber = (num, magBeforeExp = 7) => {
  const numStr = num.toString();
  const numL = ("" + Math.floor(num)).length;

  if (numL <= magBeforeExp) {
    return commafy(numStr);
  } else {
    return friendlyExponent(Number(numStr).toExponential());
  }
};

export const friendlyExponent = (numStr, precision = 3) => {
  const [numBase, numExponent] = numStr.split("e+");
  return (
    <>
      {parseFloat(numBase).toFixed(precision)} &times; 10
      <sup>{numExponent}</sup>
    </>
  );
};

export const commafy = (num) => {
  if (num === "Infinity" || num === Infinity) return num;

  const numStr = Math.floor(num) + "";
  if (numStr.includes("e")) {
    return friendlyExponent(numStr);
  }

  const numL = (Math.abs(Math.floor(num)) + "").length;
  if (numL < 4) return num;

  let offset = numL % 3 || 3;
  if (num < 0) offset++;

  const numArr = (num + "").split("");
  let numCommas = "";
  let inDec = false;

  for (let x = 0; x < numArr.length; x++) {
    const ch = numArr[x];
    if (ch === ".") inDec = true;

    if ((!inDec && x - offset >= 0 && (x - offset) % 3 === 0) || x === offset) {
      numCommas += ",";
    }

    numCommas += numArr[x];
  }

  return numCommas;
};
