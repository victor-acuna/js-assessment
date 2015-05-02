if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.bind(obj)();
    },

    functionFunction : function(str) {
        return function(rest) {
            return str + ', ' + rest;
        };
    },

    makeClosures : function(arr, fn) {
        var result = [];

        for (var idx in arr){
            result.push((function (){
                var param = arr[idx];
                return function () {
                    return fn(param);
                }
            })())
        }

        return result;
    },

    partial : function(fn, str1, str2) {
        return function (punc){
            return fn(str1, str2, punc);
        };
    },

    useArguments : function() {
        var sum = 0;

        for (var idx in arguments){
            sum += arguments[idx];
        }

        return sum;
    },

    callIt : function(fn) {
        var rest = Array.prototype.splice.call(arguments, 1, arguments.length - 1);

        return fn.apply(null, rest);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        return function (){
            var func = args[0];
            var newArgs = Array.prototype.slice.call(arguments);

            var allArgs = args.slice(1, args.length).concat(newArgs);

            return func.apply(null, allArgs);
        }
    },

    curryIt : function(fn) {
        var args = [];
        var func = function (nextArg){
            args.push(nextArg);

            if(args.length === fn.length){
                return fn.apply(null, args);
            } else {
                return func;
            }
        };

        return func;
    }
  };
});
