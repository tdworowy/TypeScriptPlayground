function awaitError(): Promise<string> {
  return new Promise<string>(
    (resolve: (message: string) => void, reject: (error: string) => void) => {
      function afterWait() {
        console.log(`call reject`);
        reject(`ERROR`);
      }
      setTimeout(afterWait, 2000);
    }
  );
}

async function callAwaitError() {
  console.log(`call awaitError`);
  try {
    await awaitError();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  console.log(`after awaitError`);
}
callAwaitError();
