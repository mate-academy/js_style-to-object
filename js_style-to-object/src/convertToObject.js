class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }
  }
}
