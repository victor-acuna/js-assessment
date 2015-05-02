if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var result = [];

        var findDir = function (data, dirName){
            if (data.dir === dirName){
                getFiles(data);
            } else {
                data.files.forEach(function (file){
                    if(file.dir){
                        findDir(file, dirName);
                    }
                });
            }
        };

        var getFiles = function (data){
            if (data.files){
                data.files.forEach(function (file){
                    if (typeof(file) === 'string'){
                        result.push(file);
                    } else {
                        getFiles(file);
                    }
                });
            }
        };

        if(dirName){
            findDir(data, dirName);
        } else {
            getFiles(data);
        }

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
        };

        recursiveFn(arr);

        return results;
    }
  };
});
