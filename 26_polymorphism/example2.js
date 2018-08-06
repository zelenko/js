// Option type
class Option {
  cata(pattern, option) {
    return pattern[option.constructor.name](option.x);
  }
  
  map(f, opt) {
    return this.cata({Some: x => new Some(f(x)), None: () => this}, opt);
  }
};

class Some extends Option {
  constructor(x) {
    super(x);
    this.x = x;
  }
};

class None extends Option {
  constructor() {
    super();
  }
};


// ad-hoc polymorphic function
const map = f => t => t.map(f, t);

// helper/data

const sqr = x => x * x;

const xs = [1, 2, 3];
const x = new Some(5);
const y = new None();

// application

console.log(
  map(sqr) (xs) // [1, 4, 9]
);

console.log(
  map(sqr) (x) // Some {x: 25}
);

console.log(
  map(sqr) (y) // None {}
);
