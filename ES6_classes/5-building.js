export default class Building {
  constructor(sqft) {
  // Check sqft is a number
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }

    // Store sqft as private
    this._sqft = sqft;

    // Check if instance is a subclass and check if evacuation message is the original from Building
    // If instance is not a subclass and has the original message, throw an error.
    if (this.constructor !== Building 
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      Building.evacuationWarningMessage();
    }
  }

  // Getter to return private sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method that should be overwritten by a subclass
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
