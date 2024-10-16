alert(
  "Please enter a value below and select  a unit of length to start convrting process."
);
var select = document.querySelectorAll(".container");
var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("InputType");
var resultType = document.getElementById("ResultType");
const convertBtn = document.querySelector(".Convert");
var Result = document.querySelector(".result");
var inputTypeValue, resultTypeValue;

function myResult() {
  let tempRes = "";
  try {
    inputValue = input.value;
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
      tempRes = Number(inputValue) * 0.001;
    } else if (
      inputTypeValue === "centemeter" &&
      resultTypeValue === "kilometer"
    ) {
      tempRes = Number(inputValue) * 0.00001;
    } else if (
      inputTypeValue === "kilometer" &&
      resultTypeValue === "kilometer"
    )
      tempRes = Number(inputValue);

    if (inputTypeValue === "meter" && resultTypeValue === "centemeter") {
      tempRes = Number(inputValue) * 100;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
      tempRes = Number(inputValue) * 1000;
    } else if (
      inputTypeValue === "kilometer" &&
      resultTypeValue === "centemeter"
    ) {
      tempRes = Number(inputValue) * 100000;
    } else if (
      inputTypeValue === "centemeter" &&
      resultTypeValue === "centemeter"
    ) {
      tempRes = Number(inputValue);
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
      tempRes = Number(inputValue);
    }
    if (inputTypeValue === "centemeter" && resultTypeValue === "meter") {
      tempRes = Number(inputValue) * 0.01;
    }

    result.innerHTML = tempRes;
  } catch (e) {
    console.log("error", e);
  }
}
convertBtn.addEventListener("click", myResult);
