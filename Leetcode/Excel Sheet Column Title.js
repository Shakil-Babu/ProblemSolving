var convertToTitle = function(n) {
    if( n <= 0) return "";
    var character_offset = 64;
    var columnTitle = "";
    while(n > 0) {
        var remainder = n % 26 == 0 ? 26 : n % 26;
        n = (n-remainder) / 26;
        columnTitle = String.fromCharCode(character_offset+remainder) + columnTitle;
    }
    return columnTitle;
};