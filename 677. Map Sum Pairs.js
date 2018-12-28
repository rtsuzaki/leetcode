/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.dict = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.dict[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    for (let key in this.dict) {
        let passes = true;
        for (let i = 0; i < prefix.length; i++) {
            if (prefix[i] !== key[i]) {
                passes = false;
            }
        }
        if (passes) {
            sum += this.dict[key];
        }
    }
    return sum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */