//Promis
function fnDeleyPromise(resolve: () => void, reject: () => void) {
  function afterTimeout() {
    resolve();
  }
  setTimeout(afterTimeout, 2000);
}
function delayedResponsePromise(): Promise<void> {
  return new Promise<void>(fnDeleyPromise);
}
//
function delayPromie(): Promise<void> {
  return new Promise<void>((resolve: () => void, rejest: () => void) => {
    function afterTimeout() {
      resolve();
    }
    setTimeout(afterTimeout, 2000);
  });
}
function callDelayPromise() {
  console.log("Call promise delayPromie");
  delayPromie().then(() => {
    console.log("elayPromie().then");
  });
}

callDelayPromise();
