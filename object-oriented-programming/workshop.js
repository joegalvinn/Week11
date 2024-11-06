class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  poop() {
    console.log(`${this.name} poops.`);
  }
}

const animal = new Animal("Squirtle");
animal.speak();
animal.poop();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Growlithe");
dog.speak();
dog.poop();

class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }

  fly() {
    console.log(`${this.name} flies.`);
  }
}

const bird = new Bird("Spearow");
bird.speak();
bird.poop();
bird.fly();


class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies`);
  }
}

class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} oinks.`);
  }
}

const pig = new Pig("Harry Plopper");
pig.speak();
pig.poop();
pig.fly();
