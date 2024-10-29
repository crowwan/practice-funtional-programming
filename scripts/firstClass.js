// 평가란 코드가 계산되어 값을 만드는 것을 말한다.

// 일급
// 값으로 다룰 수 있다.
// 값으로 다룰 수 있다는 것은
// 변수에 할당할 수 있다.
// 인자로 전달할 수 있다.
// 반환값으로 사용할 수 있다.

// 함수는 일급 객체다.

// 변수에 함수를 할당할 수 있다.
const add = (a, b) => a + b;

// 함수를 반환할 수 있다.
const foo = () => {
  return function bar() {
    return "bar";
  };
};

const bar = foo();

console.log(bar());

// 함수를 인자로 전달할 수 있다.

const baz = (fn) => fn();

console.log(baz(bar));

// 이렇게 함수를 값으로 다루는 함수를 고차함수라고 한다.

// 커링을 이용한 이벤트 핸들러

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const buttonText = ["더하기", "빼기", "곱하기", "나누기"];

const makeButton = (text) => {
  const $button = document.createElement("button");
  $button.className = text;
  $button.textContent = text;
  return $button;
};

const showResultAs = (result) => () => {
  const $result = document.getElementById("result");
  $result.textContent = result;
};

const showResultAs더하기 = showResultAs("더하기");
const showResultAs빼기 = showResultAs("빼기");
const showResultAs곱하기 = showResultAs("곱하기");
const showResultAs나누기 = showResultAs("나누기");

const addListener = ($button) => {
  $button.addEventListener("click", showResult($button.innerText));
  return $button;
};

const appendTo = ($target) => ($child) => {
  $target.appendChild($child);
};

// const makeButtonWithListener = pipe(makeButton, addListener);
// const buttons = buttonText.map(makeButtonWithResult);

// buttons.map(appendTo(document.querySelector("#root")));

buttonText.map(makeButton).map(appendTo(document.querySelector("#root")));

const 더하기버튼 = document.querySelector(".더하기");
const 빼기버튼 = document.querySelector(".빼기");
const 곱하기버튼 = document.querySelector(".곱하기");
const 나누기버튼 = document.querySelector(".나누기");

더하기버튼.addEventListener("click", showResultAs더하기);
빼기버튼.addEventListener("click", showResultAs빼기);
곱하기버튼.addEventListener("click", showResultAs곱하기);
나누기버튼.addEventListener("click", showResultAs나누기);
