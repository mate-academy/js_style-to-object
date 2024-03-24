'use strict';

const { Animal, Herbivore, Carnivore } = require('./herbivoresAndCarnivores');

describe('Animal', () => {
  it('Herbivore can be used as a constructor', () => {
    const animal = new Herbivore('Zebra');

    expect(animal)
      .toBeInstanceOf(Herbivore);
  });

  it('Сarnivore can be used as a constructor', () => {
    const animal = new Carnivore('Tiger');

    expect(animal)
      .toBeInstanceOf(Carnivore);
  });

  it(`Herbivore should has falsy 'hidden' property`, () => {
    const animal = new Herbivore('Zebra');

    expect(animal.hidden)
      .toBe(false);
  });

  it(`Herbivores and Carnivores should have health property equal to 100`,
    () => {
      const herb = new Herbivore('Zebra');
      const carn = new Carnivore('Tiger');

      expect(herb)
        .toHaveProperty('health', 100);

      expect(carn)
        .toHaveProperty('health', 100);
    });

  it(`Herbivore should have 'hide' method which inverts 'hidden' property`,
    () => {
      const animal = new Herbivore('Zebra');

      animal.hide();

      expect(animal.hidden)
        .toBe(true);
    });

  it(`Herbivores 'hide' method should be inherited`, () => {
    const animal = new Herbivore('Zebra');

    expect(animal.hasOwnProperty('hide')).toBe(false);
  });

  it(`Сarnivore should have 'bite' method,
  which decrease 'health' property of the herbivores`, () => {
    const carn = new Carnivore('Tiger');
    const herb = new Herbivore('Zebra');

    carn.bite(herb);

    expect(herb.health)
      .toBe(50);
  });

  it(`Сarnivores 'bite' method should be inherited`, () => {
    const animal = new Carnivore('Tiger');

    expect(animal.hasOwnProperty('bite')).toBe(false);
  });

  it(`'bite' method shouldn't decrease 'health' property of the herbivore,
   if it has 'hidden === true`, () => {
    const carn = new Carnivore('Tiger');
    const herb = new Herbivore('Zebra');

    herb.hide();
    carn.bite(herb);

    expect(herb.health)
      .toBe(100);
  });

  it(`'bite' method shouldn't decrease 'health' property of the carnivores `,
    () => {
      const tiger = new Carnivore('Tiger');
      const wolf = new Carnivore('Wolf');

      wolf.bite(tiger);

      expect(tiger.health)
        .toBe(100);
    });

  it(`Carnivores and Herbivores should be in 'Animal.alive' array`, () => {
    const bear = new Carnivore('Bear');
    const pig = new Carnivore('Pig');
    const rabbit = new Herbivore('Rabbit');

    expect(Animal.alive.includes(bear))
      .toBe(true);

    expect(Animal.alive.includes(pig))
      .toBe(true);

    expect(Animal.alive.includes(rabbit))
      .toBe(true);
  });

  it(`Herbivores should be removed from 'Animal.alive' array,
  when their health is 0`, () => {
    const tiger = new Carnivore('Tiger');
    const zebra = new Herbivore('Zebra');

    tiger.bite(zebra);
    tiger.bite(zebra);

    expect(Animal.alive.includes(zebra))
      .toBe(false);

    expect(Animal.alive.includes(tiger))
      .toBe(true);
  });

  it(`Herbivores should be removed from 'Animal.alive' array, when their health is 0 (but Zebra is not the last defined animal)`, () => {
    const zebra = new Herbivore('Zebra');
    const tiger = new Carnivore('Tiger');

    tiger.bite(zebra);
    tiger.bite(zebra);

    expect(Animal.alive.includes(zebra))
      .toBe(false);

    expect(Animal.alive.includes(tiger))
      .toBe(true);
  });

  it('Two of the same herbivore exist, but only one dies', () => {
    const olderZebra = new Herbivore('Zebra');
    const yongerZebra =  new Herbivore('Zebra');
    const lion = new Carnivore("Lion");

    lion.bite(yongerZebra);
    lion.bite(yongerZebra);

    expect(Animal.alive.includes(olderZebra))
      .toBe(true);

    expect(Animal.alive.includes(lion))
      .toBe(true);

    expect(Animal.alive.includes(yongerZebra))
      .toBe(false);
  });
});
