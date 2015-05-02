if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = arr.reduce(function (sum, num){
            return sum + num;
        });

        return sum;
    },

    remove : function(arr, item) {
        return arr.filter(function (val){
            return val !== item;
        });
    },

    removeWithoutCopy : function(arr, item) {
        while (arr.indexOf(item) >= 0){
            var itemIdx = arr.indexOf(item);
            arr.splice(itemIdx, 1);
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function (entry){
            return item === entry;
        }).length;
    },

    duplicates : function(arr) {
        var counts = {};
        var results = [];

        arr.forEach(function (val){
            if(counts[val]){
                counts[val] += 1;
            } else {
                counts[val] = 1;
            }
        });

        Object.keys(counts).forEach(function (key){
            if (counts[key] > 1){
                results.push(key);
            }
        });

        return results;
    },

    square : function(arr) {
        return arr.map(function (val){
            return Math.pow(val, 2);
        });
    },

    findAllOccurrences : function(arr, target) {
        var arrCopy = arr.slice();
        var result = [];

        while(arrCopy.indexOf(target) >= 0){
            var itemIdx = arrCopy.indexOf(target);
            result.push(itemIdx);
            delete arrCopy[itemIdx];
        }

        return result;
    }
  };
});
