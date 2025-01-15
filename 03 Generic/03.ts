// A generic class for a key-value pair
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
  
    display(): void {
      console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
  }
  
  // Using the generic class with different types
  const pair1 = new KeyValuePair<string, number>("age", 25);
  const pair2 = new KeyValuePair<number, boolean>(1, true);
  
  pair1.display(); // Output: Key: age, Value: 25
  pair2.display(); // Output: Key: 1, Value: true
  