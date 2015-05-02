if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var regEx = new RegExp('[0-9]+');

        return str.search(regEx) >= 0;
    },

    containsRepeatingLetter : function(str) {
        var regEx = new RegExp('([A-Z,a-z])\\1{1,}');

        return str.search(regEx) >= 0;
    },

    endsWithVowel : function(str) {
        var regEx = new RegExp('[aeiou,AEIOU]$');

        return str.search(regEx) >= 0;
    },

    captureThreeNumbers : function(str) {
        var regEx = new RegExp('([0-9]){3}');
        var location = str.search(regEx);

        if(location < 0){
            return false;
        }

        return str.slice(location, location + 3);
    },

    matchesPattern : function(str) {
        var regEx = new RegExp('^(([0-9]){3}-([0-9]){3}-([0-9]){4})$');

        return str.search(regEx) >= 0;
    },
    isUSD : function(str) {
        var regEx = new RegExp('(^\\$)([0-9]{1,3})+(,[0-9]{3})*(\\.[0-9]{2})?$');

        return str.search(regEx) >= 0;
    }
  };
});
