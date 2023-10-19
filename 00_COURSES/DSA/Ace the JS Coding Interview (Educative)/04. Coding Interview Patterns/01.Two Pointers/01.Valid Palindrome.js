function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;
    
    while(end > start) {
        if (s[start] !== s[end] ) {
            return false
        }
        start++
        end--
    }

    return true
}

console.log(isPalindrome('dad'))
