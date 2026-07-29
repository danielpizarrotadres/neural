class Input {
  constructor(meaning, value) {
    this.meaning = meaning;
    this.value = value;
  }
}

class Weight {
  constructor(input, value) {
    this.input = input;
    this.value = value;
  }
}

const x1 = new Input('Weather is good', 1);

const w1 = new Weight(x1, 6);
