/*
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.

get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.

remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
*/

debugger;
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var MyHashMap = function() {
  this.storage = new Array(30);
  this.length = this.storage.length;
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let index = getIndexBelowMaxForKey(key, this.length);
  let bucket = this.storage[index];
  if (!bucket) {
    bucket = [];
    this.storage[index] = bucket;
  }

  let found = false;
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[key]) {
      tuple[key] = value;
      found = true;
    }
  }
  if (found === false) {
    let tuple = {};
    tuple[key] = value;
    bucket.push(tuple);
    this.length++;
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let index = getIndexBelowMaxForKey(key, this.length);
  let bucket = this.storage[index];
  if (!bucket) {
    return -1;
  }
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[key]) {
      return tuple[key];
    }
  }
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  let index = getIndexBelowMaxForKey(key, this.length);
  let bucket = this.storage[index];
  if (!bucket) {
    return null;
  }
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[key]) {
      let temp = tuple[key];
      bucket.splice(i, 1);
      this.length--;
    }
  }
};
/* ["MyHashMap","remove","put","put","put","put","put","put","get","put","put"]
[[],[2],[3,11],[4,13],[15,6],[6,15],[8,8],[11,0],[11],[1,10],[12,14]]*/
const test = () => {
  const hashMap = new MyHashMap();
  console.log(hashMap.put(3, 11));
  console.log(hashMap.put(4, 13));
  console.log(hashMap.put(15, 6));
  console.log(hashMap.put(6, 15));
  console.log(hashMap.put(8, 8));
  console.log(hashMap.put(11, 0));
  console.log(hashMap.get(11));            // returns 0
  console.log(hashMap.put(1, 10));
  console.log(hashMap.put(12, 14));
  console.log(hashMap.get(12));            // returns 14
  console.log(hashMap.remove(12));          // remove the mapping for 2
  console.log(hashMap.get(12));            // returns -1 (not found)
  console.log(hashMap.length);
};

test();
