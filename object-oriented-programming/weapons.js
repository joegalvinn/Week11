class Weapon {
  constructor(name) {
    this.name = name;
  }
  draw() {
    console.log(`you draw your ${this.name}.`);
  }
  speak() {
    console.log(`my ${this.name} will kill you!`);
  }
}

class Sword extends Weapon {
  showoff() {
    console.log(`you wave your sword around, it glistens in the light.`);
  }
}

class Bow extends Weapon {
  showoff() {
    console.log(`you notch an arrow to your bow`);
  }
}

const bow = new Bow("Maple short bow");
bow.draw();
bow.speak();
bow.showoff();

const sword = new Sword("Two handed great sword");
sword.draw();
sword.showoff();
