if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var result = [];

        var recursiveFn = function (data, dirName){
            if(dirName){
                if(data.dir === dirName){
                    recursiveFn(data);
                } else {
                    for (var idx in data.files){
                        var file = data.files[idx];

                        if(file.dir){
                            recursiveFn(file, dirName);
                        }
                    }
                }
            } else {
                if(data.files){
                    for(var idx in data.files){
                        var file = data.files[idx];

                        if(typeof(file) === 'string'){
                            result.push(file);
                        } else {
                            recursiveFn(file);
                        }
                    }
                }
            }
        };

        recursiveFn(data, dirName);


        return result;
    },

    permute: function(arr) {
        var results = [];
        var newArr = [];

        var recursiveFn = function (arr) {
            for (var i = 0; i < arr.length; i++){
                var arrCopy = arr.slice();
                var item = arrCopy.splice(i, 1)[0];

                newArr.push(item);

                if (arrCopy.length === 0){
                    results.push(newArr.slice());
                }

                recursiveFn(arrCopy);
                newArr.pop();
            }
        }

        recursiveFn(arr);

        return results;
    }
  };
});
