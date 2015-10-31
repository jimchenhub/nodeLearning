var fs = require('fs');
var path = require('path');

function walkDir(dirPath){
    console.log(dirPath);
    fs.readdir(dirPath, function(err, entries){
        for (var index in entries){
            var fullPath = path.join(dirPath, entries[index]);
            (function(fullPath){
                fs.stat(fullPath, function(err, stats){
                    if (stats && stats.isFile()){
                        console.log(fullPath);
                    }else if (stats && stats.isDirectory()){
                        walkDir(fullPath);
                    }
                });
            })(fullPath);
        }
    });
};

walkDir('/Users/chenlvjie/Documents/GitHub/nodeLearning');