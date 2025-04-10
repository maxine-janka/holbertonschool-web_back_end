import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  // Use this.floors so it doesn't bypass the getter and setter
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
