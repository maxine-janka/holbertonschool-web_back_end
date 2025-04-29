import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((arr) => arr.map((obj) => {
      if (obj.status === 'fulfilled') {
        return { status: obj.status, value: obj.value };
      }
      return { status: obj.status, value: String(obj.reason) };
    }));
}
