export default class Email {
  #value;
  constructor(email) {
    console.assert(
      email !== null && email !== undefined,
      `Estas instanciando con un '${email}' valor`
    );
    this.#value = email;
  }

  isValid() {
    const expreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expreg.test(this.#value);
  }

  getValue() {
    if (!this.isValid()) throw "invalid email value";
    return this.#value;
  }
}
