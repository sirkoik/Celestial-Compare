export const commafy = (num) => {
  if (num === "Infinity" || num === Infinity) return num;

  const numStr = Math.floor(num) + "";
  if (numStr.includes("e")) {
    const [numBase, numExponent] = numStr.split("e+");
    return (
      <>
        {numBase} &times; 10<sup>{numExponent}</sup>
      </>
    );
  }

  const numL = numStr.length;
  if (numL < 4) return num;

  const offset = numL % 3 || 3;
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
