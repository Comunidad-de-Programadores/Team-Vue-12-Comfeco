export default class Nickname {
  #value;
  constructor(nickname) {
    console.assert(
      nickname !== null && nickname !== undefined,
      `Estas instanciando con un '${nickname}' valor`
    );
    this.#value = nickname;
  }

  isValid() {
    const nicknameRegex = /^(?![_])[a-zA-Z0-9_]+(?<![_])$/;
    const nicknameRegexLimit = /^(?=.{6,20}$)/;
    return (
      nicknameRegex.test(this.#value) && nicknameRegexLimit.test(this.#value)
    );
  }

  getValue() {
    if (!this.isValid()) throw "invalid nickname value";
    return this.#value;
  }
}
