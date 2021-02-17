export default class Email {
  #value;
  constructor(email) {
    console.assert(!!email, email);
    this.#value = email;
  }

  isValid() {
    var expreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expreg.test(this.#value);
  }

  getValue() {
    if (!this.isValid()) throw "invalid email value";
    return this.#value;
  }
}
