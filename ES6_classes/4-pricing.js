import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) { // Passing in an instance of the Currency class
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value; 
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be an instance of the Class Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Don't need 'this'. Belongs to the class itself not an instance.
  // Therefore no instance _amount to pull from.
  // Pricing.convertprice() not price.convertPrice()
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
