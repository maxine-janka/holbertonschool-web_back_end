export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false;
    /* eslint-disable no-unused-vars */
  }

  return [task, task2];
}

/* const in if block does not reassign const outer varibles it shadows them
they are separate varibales that only exist in the if block */
