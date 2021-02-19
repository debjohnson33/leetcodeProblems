/*
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.

get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.

remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
*/


var MyHashMap = function() {
  this.storage = [];
  this.length = this.storage.length;
};

MyHashMap.prototype.getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let index = this.getIndexBelowMaxForKey(key, this.length);
  let bucket = this.storage[index] ? this.storage[index] = value : [];

  let found = false;
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[key]) {
      tuple[key] = value;
      found = true;
    }
  }
  if (!found) {
    let tuple = {};
    tuple[key] = value;
    bucket.push(tuple);
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let index = this.getIndexBelowMaxForKey(key, this.length);
  let bucket = this.storage[index] || [];
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
  let index = this.getIndexBelowMaxForKey(key, this.length);
  let bucket = this.storage[index] || [];
  if (!bucket) {
    return null;
  }
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[key]) {
      let temp = tuple[key];
      bucket.splice(i, 1);
      return temp;
    }
  }
};

const test = () => {
  const hashMap = new MyHashMap();
  console.log(hashMap.put(1, 1));
  console.log(hashMap.put(2, 2));
  console.log(hashMap.get(1));            // returns 1
  console.log(hashMap.get(3));            // returns -1 (not found)
  console.log(hashMap.put(2, 1));          // update the existing value
  console.log(hashMap.get(2));            // returns 1
  console.log(hashMap.remove(2));          // remove the mapping for 2
  console.log(hashMap.get(2));            // returns -1 (not found)
};

test();
