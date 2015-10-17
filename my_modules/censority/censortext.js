var censoredWords = ["sad", "mad", "bad"];
var customCensoredWords = [];

function censor (inStr) {
    for (var index in censoredWords) {
        inStr = inStr.replace(censoredWords[index], "****");
    }
    for (var index in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[index], "****");
    }
    return inStr;
}

function addCensoredWord (word) {
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;