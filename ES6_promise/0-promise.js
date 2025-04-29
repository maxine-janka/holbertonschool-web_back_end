export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    try {
      resolve('Success');
    } catch (error) {
      reject('error');
    }
  });
  return promise;
}
