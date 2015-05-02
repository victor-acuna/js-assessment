if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;

        for (var idx in arr){
            var num = arr[idx];

            if (typeof(num) === 'number'){
                sum += num;
            } else {
                return 'Error: Item in array is not a number.';
            }
        }

        return sum;
    },

    remove : function(arr, item) {
        var newArray = arr.splice(0,arr.length);

        while (newArray.indexOf(item) >= 0){
            var itemIdx = newArray.indexOf(item);
            newArray.splice(itemIdx, 1);
        }

        return newArray;
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
        arr.splice(arr.length - 1, 1);
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
        var count = 0;

        for (var idx in arr){
            if (arr[idx] === item){
                count++;
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var counts = {};
        var results = [];

        for (var idx in arr){
            var val = arr[idx].toString();

            if(counts[val]){
                counts[val] += 1;
            } else {
                counts[val] = 1;
            }
        }

        for (var key in counts){
            if (counts[key] > 1){
                results.push(key);
            }
        }

        return results;
    },

    square : function(arr) {
        var results = [];

        for (var idx in arr){
            var val = arr[idx];

            if(typeof(val) === 'number'){
                results.push(Math.pow(arr[idx], 2));
            } else {
                return 'Error: An item in the array is not a number';
            }
        }

        return results;
    },

    findAllOccurrences : function(arr, target) {
        var arrCopy = arr.splice(0, arr.length);
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
