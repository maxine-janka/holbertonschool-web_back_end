export default function createInt8TypedArray(length, position, value) {
  // Create an array buffer with specified length to store binary data
  const buffer = new ArrayBuffer(length);
  // Create Dataview to write to buffer
  const view = new DataView(buffer);
  
  // Check valid range to set 8bit signed int at specified position
  if (position <= length - 1) {
    view.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }
  //return DataView object
  //console.log(view.getInt8(2));
  return view;
}
