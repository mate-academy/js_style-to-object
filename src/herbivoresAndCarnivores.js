'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeIfDead(animal) {
    // write code
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (aliveAnimal) => aliveAnimal !== animal,
      );
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.removeIfDead(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
