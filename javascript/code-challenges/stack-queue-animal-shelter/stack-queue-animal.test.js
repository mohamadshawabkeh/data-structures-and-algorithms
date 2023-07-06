const AnimalShelter = require('./stack-queue-animal');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should enqueue and dequeue dogs correctly', () => {
    const dog1 = { species: 'dog', name: 'Buddy' };
    const dog2 = { species: 'dog', name: 'Max' };
    const dog3 = { species: 'dog', name: 'Charlie' };

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    shelter.enqueue(dog3);

    expect(shelter.dequeue('dog')).toBe(dog1);
    expect(shelter.dequeue('dog')).toBe(dog2);
    expect(shelter.dequeue('dog')).toBe(dog3);
    expect(shelter.dequeue('dog')).toBeNull();
  });

  test('should enqueue and dequeue cats correctly', () => {
    const cat1 = { species: 'cat', name: 'Whiskers' };
    const cat2 = { species: 'cat', name: 'Smokey' };

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('cat')).toBe(cat1);
    expect(shelter.dequeue('cat')).toBe(cat2);
    expect(shelter.dequeue('cat')).toBeNull();
  });

  test('should return null if preference is neither dog nor cat', () => {
    const dog = { species: 'dog', name: 'Buddy' };
    shelter.enqueue(dog);

    expect(shelter.dequeue('bird')).toBeNull();
    expect(shelter.dequeue('')).toBeNull();
    expect(shelter.dequeue(null)).toBeNull();
  });
});
