//in order to build objects, we need to create the template and give it instructions to build the objects based on that template

class Biscuit {
  //to build my objects based on this template I need a constructor
  //the constructor has parameters that will beome the object properties
  constructor(biscuitName, biscuitCrunchiness, biscuitFlavour, biscuitTexture) {
    //we need to contextualise each biscuit instance to have its own properties and values
    //the key word "this" represents each individual biscuit instance
    (this.name = biscuitName),
      (this.flavour = biscuitFlavour),
      (this.crunchiness = biscuitCrunchiness),
      (this.texture = biscuitTexture);
  }

  voiceline() {
    console.log(
      `This ${this.name} has a flavour of ${this.flavour}, a crunchiness of ${this.crunchiness}, and a ${this.texture} texture.`
    );
  }
}

//I am going to instantiate objects -> I am going to use the template to create new objects

const custardCream = new Biscuit("custard cream", 6, "vanilla", "brittle");
console.log(custardCream);

//access a method in our object instances
console.log(custardCream.voiceline());

//we want to create a new class called Cookie
//my Cookie class has the same properties as my Biscuit class
//I am building a hierarchy of classes: Biscuit is the class (parent), Cookie is the sub-class (child) -> Cookie is inheriting hte properties from Biscuit
class Cookie extends Biscuit {
  constructor(
    biscuitName,
    biscuitCrunchiness,
    biscuitFlavour,
    biscuitTexture,
    cookiePrice
  ) {
    //here we are telling cookie to inherit whatever was set up in the Biscuit class
    super(biscuitName, biscuitCrunchiness, biscuitFlavour, biscuitTexture);
    this.price = cookiePrice;
  }
  slogan() {
    console.log(`${this.name} is the best cookie in the world`);
  }
}

const chocolateChip = new Cookie("chocolate Chip", 3, "chocolate", "chewy", 2);

console.log(chocolateChip.slogan());
