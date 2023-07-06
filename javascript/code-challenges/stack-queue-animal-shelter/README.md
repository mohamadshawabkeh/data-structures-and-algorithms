## AnimalShelter

## [whiteboard](./codeChallenge12Whiteboard.jpg)

A JavaScript class that represents an Animal Shelter, which holds dogs and cats using a first-in, first-out (FIFO) approach.


## new AnimalShelter()
Creates a new instance of the AnimalShelter class.

## enqueue(animal)
Adds an animal to the shelter.

animal: An object representing an animal with the following properties:
species (string): The species of the animal, either "dog" or "cat".
name (string): The name of the animal.
dequeue(pref)
Removes and returns an animal based on the preference.

pref (string): The preference, either "dog" or "cat".
Returns the oldest animal of the preferred type. If no animals of the preferred type are available, it returns the oldest animal of the other type. If the preference is neither "dog" nor "cat", it returns null.

## [Tests](./codeChallenge12.jpg)

### Usage

```javascript
const AnimalShelter = require('./AnimalShelter');

// Create an instance of AnimalShelter
const shelter = new AnimalShelter();

// Enqueue animals
shelter.enqueue({ species: 'dog', name: 'Buddy' });
shelter.enqueue({ species: 'cat', name: 'Whiskers' });

// Dequeue animals
const dog = shelter.dequeue('dog');
const cat = shelter.dequeue('cat');

// ----------------------------------------------------------------------------

const shelter = new AnimalShelter();

shelter.enqueue({ species: "dog", name: "Buddy" });
shelter.enqueue({ species: "cat", name: "Whiskers" });
shelter.enqueue({ species: "dog", name: "Max" });

console.log(shelter.dequeue("dog")); // Output: { species: "dog", name: "Buddy" }
console.log(shelter.dequeue("cat")); // Output: { species: "cat", name: "Whiskers" }
console.log(shelter.dequeue("dog")); // Output: { species: "dog", name: "Max" }
console.log(shelter.dequeue("cat")); // Output: null