export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string' || value === undefined) {
      this._brand = value;
    } else {
      throw new TypeError('brand must be a string or undefined');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value === 'string' || value === undefined) {
      this._motor = value;
    } else {
      throw new TypeError('motor must be a string or undefined');
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value === 'string' || value === undefined) {
      this._color = value;
    } else {
      throw new TypeError('color must be a string or undefined');
    }
  }

  // Creates a new instabce of the same type
  // this = current instance, constructor = points to class/method that created it
  cloneCar() {
    return new this.constructor();
  }
}
