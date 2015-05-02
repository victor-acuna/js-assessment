if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bitNum = Math.pow(2, bit - 1);

        if (bitNum > num){
            return 0;
        }

        if ((num & bitNum) > 0){
            return 1;
        }

        return 0;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binaryString = num.toString(2);

        return ('00000000' + binaryString).substring(binaryString.length);
    },

    multiply: function(a, b) {
        return parseFloat((a * b).toPrecision(1));
    }
  };
});

