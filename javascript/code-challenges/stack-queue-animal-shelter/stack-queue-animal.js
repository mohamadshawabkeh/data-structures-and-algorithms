class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.push(animal);
    } else if (animal.species === 'cat') {
      this.cats.push(animal);
    }
  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }

    let animal = null;
    if (pref === 'dog') {
      if (this.dogs.length > 0) {
        animal = this.dogs.shift();
      } else if (this.cats.length > 0) {
        animal = this.cats.shift();
      }
    } else if (pref === 'cat') {
      if (this.cats.length > 0) {
        animal = this.cats.shift();
      } else if (this.dogs.length > 0) {
        animal = this.dogs.shift();
      }
    }
    return animal;
  }
}
module.exports= AnimalShelter;
