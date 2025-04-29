export default function uploadPhoto(filename) {
  const promise = new Promise((_, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return promise
}
