const romanToInt = s => {
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    const sVal = s.split('').map(s => roman[s])
    return sVal.reduceRight((a, c, i, arr) => (c < arr[i + 1]) ? a - c : a + c)
}