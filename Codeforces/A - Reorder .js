var tc = parseInt(readline());
for (; tc--;){
    var AR = readline().split(' ').map(x => parseInt(x));
    var n = AR[0], m = AR[1];
    var ar = readline().split(' ').map(x => parseInt(x));
    var res = ar.reduce((a, b) => a + b);
    print(res == m ? 'YES' : 'NO');
}