class Catalog {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Honda",
        code: "honda",
        image: "HONDA.jpeg",
        description: `Honda sports car beln precision engineering with thrilling performace,
		that cater to the enthusasts seeking speed, agility, and reliability.`,
        price: 99999.99,
      },
      {
        id: 2,
        name: "Lamborghini",
        code: "lamborghini",
        image: "lamborghini.jpeg",
        description: `The Lamborghini Sián FKP 37 features a powerful hybrid system that combines a 6.5-liter V12 engine with a 48-volt electric motor.`,
        price: 760000.99,
      },
      {
        id: 3,
        name: "Ferrari",
        code: "ferrari",
        image: "ferrari.jpeg",
        description: `The LaFerrari is a limited-production hybrid hypercar that was produced by Ferrari from 2013 to 2016. It was the first car from the company to feature hybrid technology.`,
        price: 777777.69,
      },
      {
        id: 4,
        name: "Porsche 911 Turbo S",
        code: "porsche911",
        image: "porsche.png",
        description: `The Porsche 911 Turbo S combines a twin-turbocharged flat-six engine with razor-sharp handling, delivering one of the most refined and exhilarating driving experiences in the sports-car world.`,
        price: 204000.0,
      },
      {
        id: 5,
        name: "Yamaha R1",
        code: "yamahar1",
        image: "yamahar1.jpg",
        description: `The Yamaha YZF-R1 is a legendary superbike featuring MotoGP-inspired technology, exceptional cornering capability, and blistering acceleration.`,
        price: 17899.99,
      },
    ];
  }
  getItem(code) {
    for (let i = 0; i < this.products.length; i += 1) {
      if (this.products[i].code == code) return this.products[i];
    }
    return null;
  }
  findItem(code) {
    for (let i = 0; i < this.products.length; i += 1) {
      if (this.products[i].code == code) return true;
    }
    return false;
  }
  getProducts() {
    return this.products;
  }
}
