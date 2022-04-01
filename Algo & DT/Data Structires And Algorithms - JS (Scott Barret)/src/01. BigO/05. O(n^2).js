// O(n^2) or Loop within a Loop

function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

logItems(10)


function logItems2(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                console.log(i, j, k)
            }
        }
    }
}

logItems2(10)