export default class Password {
  #value;
  constructor(password) {
    this.#value = password;
  }

  isValid() {
    return this.#value.length >= 6 && this.#value.length <= 60;
  }

  getValue() {
    if (!this.isValid()) throw "invalid password value";
    return this.#value;
  }
}
