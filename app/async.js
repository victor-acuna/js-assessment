if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        return $.ajax().pipe(function (){
            return value;
        });
    },

    manipulateRemoteData : function(url) {
        return $.ajax({
            url: url
        }).pipe(function (data){
            var arr = [];

            for (var idx in data.people){
                arr.push(data.people[idx].name);
            }

            return arr.sort();
        });
    }
  };
});
