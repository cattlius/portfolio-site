const resultContainerEl = document.querySelector("#result-container div");
const resultEl = document.getElementById("result");
const checkBtnEl = document.getElementById("check-btn");
const textInputEl = document.getElementById("text-input");
const symbolEl = document.querySelector(".material-symbols-outlined");
const rootEl = document.querySelector(":root");

const formatText = (text) => {
  const modText = text.replaceAll(/[-_|\W]/g, "").toLowerCase();
  const splitIndex = modText.length / 2;
  return [
    modText.slice(0, splitIndex),
    modText.length % 2 === 0
      ? modText.slice(splitIndex)
      : modText.slice(splitIndex + 1),
  ];
};

const isPalindrome = (text) => {
  const textArr = formatText(text);
  textArr[1] = textArr[1].split("").reverse().join("");
  return textArr[0] === textArr[1];
};

const getResult = (text) => {
  return isPalindrome(text)
    ? `${text} is a palindrome`
    : `${text} is not a palindrome`;
};

const setResult = () => {
  if (textInputEl.value !== "") {
    resultContainerEl.style.display = "flex";
    resultEl.textContent = getResult(textInputEl.value);
    symbolEl.textContent = isPalindrome(textInputEl.value) ? "check" : "close";
    rootEl.style.setProperty(
      "--sub-col3",
      isPalindrome(textInputEl.value) ? "#9bba78" : "#d65c70"
    );
    rootEl.style.setProperty(
      "--sub-col4",
      isPalindrome(textInputEl.value) ? "#73944c" : "#b42d43"
    );
  }
};

checkBtnEl.addEventListener("click", () => {
  setResult();
});

textInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    textInputEl.blur();
    setResult();
  }
});

textInputEl.addEventListener("input", () => {
  resultContainerEl.style.display = "none";
});
