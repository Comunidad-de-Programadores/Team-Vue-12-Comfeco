export default class Password {
  #value;
  constructor(password) {
    console.assert(
      password !== null && password !== undefined,
      `Estas instanciando con un '${password}' valor`
    );
    this.#value = password;
  }

  isValid() {
    const expreg = /^(?=.{6,60}$)/;
    return expreg.test(this.#value);
  }

  getValue() {
    if (!this.isValid()) throw "invalid password value";
    return this.#value;
  }
}
