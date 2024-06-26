function awaitDelay(): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: () => void) => {
    function afterWait() {
      console.log(`call resolve`);
      resolve();
    }
    setTimeout(afterWait, 2000);
  });
}

async function callAwaitDeley() {
  console.log(`call awaitDelay`);
  await awaitDelay();
  console.log(`after awaitDelay`);
}
callAwaitDeley();

async function callDeleayPromiseWithParam() {
  console.log(`call deleayPromiseWithParam`);
  let message: string = await deleayPromiseWithParam();
  console.log(`after deleayPromiseWithParam`);
  console.log(`message from promise: ${message}`);
}
callDeleayPromiseWithParam();
