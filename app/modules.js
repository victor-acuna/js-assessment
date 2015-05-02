if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        return (function(str1, str2){
            this.greeting = str1;
            this.name = str2;

            this.sayIt = function (){
                return this.greeting + ', ' + this.name;
            };

            return this;
        })(str1, str2);
    }
  };
});

