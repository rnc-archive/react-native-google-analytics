import Hit from '../Hit';

export default class Exception extends Hit {
  constructor(description, isFatal, experiment) {
    super({
      t: 'exception',
      exd: description,
      exf: isFatal
    });
  }
}
