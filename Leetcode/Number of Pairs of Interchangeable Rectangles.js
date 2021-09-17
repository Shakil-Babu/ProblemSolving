var interchangeableRectangles = function(rectangles) {
    let ratioMap = new Map()
    for (let i = 0; i < rectangles.length; i++) {
        let [width, height] = rectangles[i]
        let currRatio = width / height
        if (!ratioMap.has(currRatio)) {
            ratioMap.set(currRatio, 0)
        }
        ratioMap.set(currRatio, ratioMap.get(currRatio) + 1)
    }
    let count = 0
    let choosing = 2
    ratioMap.forEach(function(value) {
        if (value >= choosing) {
            count += combinationWithTwo(value) * (1 / choosing)
        }
    })
    return count
};

var combinationWithTwo = function(n) {    
    return n * (n - 1)
}