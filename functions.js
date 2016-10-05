//sorts an array of strings, determines longest string
function sortStrings(arr) {
    return arr.sort(function(a, b) {
        return b.length - a.length;
    })
}

sortStrings(["huuuuuuge", "huger", "tiny"]);

