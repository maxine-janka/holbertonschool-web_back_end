import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoomList = []; // Create a new list
  const classSize = [19, 20, 34]; // Declare class sizes in a list

  // Iterate each classSize and use each one to create a new ClassRoom object
  for (const idx of classSize) {
    const newClass = new ClassRoom(idx);
    // Append new object to empty list
    classRoomList.push(newClass);
  }
  return classRoomList;
}
