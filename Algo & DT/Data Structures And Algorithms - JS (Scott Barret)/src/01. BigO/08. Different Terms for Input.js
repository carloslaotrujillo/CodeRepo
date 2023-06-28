function logItems(a,b) {
    for(let i = 0; i < a; i++) {
        console.log(i)
    }

    for(let j = 0; j < b; j++) {
       console.log(j)
    }
}

logItems(3)
// O(a + b)


function logItems(a,b) {
    for(let i = 0; i < a; i++) {
       console.log(i)
       for(let j = 0; j < b; j++) {
          console.log(j)
       }
    }
}

logItems(3)
// O(a * b)
