'use strict';

const Hashmap = require('./hashtable');

describe('Hashmap', () => {
  let hashmap;

  beforeEach(() => {
    hashmap = new Hashmap(10);
  });

  it('should set and get values correctly', () => {
    hashmap.set('key1', 'value1');
    hashmap.set('key2', 'value2');

    expect(hashmap.get('key1')).toBe('value1');
    expect(hashmap.get('key2')).toBe('value2');
    expect(hashmap.get('nonExistentKey')).toBeUndefined();
  });

  it('should indicate if a key exists', () => {
    hashmap.set('key1', 'value1');

    expect(hashmap.has('key1')).toBe(true);
    expect(hashmap.has('nonExistentKey')).toBe(false);
  });

  it('should return an array of keys', () => {
    hashmap.set('key1', 'value1');
    hashmap.set('key2', 'value2');

    const keys = hashmap.keys();
    expect(keys).toContain('key1');
    expect(keys).toContain('key2');
  });

  it('should generate the correct hash value', () => {
    const hashValue = hashmap.hash('someKey');
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(hashmap.size);
  });

});
