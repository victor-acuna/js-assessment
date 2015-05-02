if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        return (function (){
            var i = start;

            var incrementFn = function (){
                console.log(i);

                if(i !== end){
                    i++;
                    setTimeout(incrementFn, 100);
                }
            };

            incrementFn();

            return {
                cancel: function (){
                    i = end;
                }
            };
        })();
    }
  };
});