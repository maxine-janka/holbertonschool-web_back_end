export default function updateUniqueItems(mapObj) {
  if (mapObj instanceof Map) {
    for (const [key, value] of mapObj) {
      if (value === 1) {
        mapObj.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return mapObj;
}
