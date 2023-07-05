// FUNCTIONS
function addNum(x:number, y:number): number {
    return x + y
}
console.log(addNum(2, 3))  // 5
// If function doesn't return anything we use 'void' as a return type
function printLog(log: string): void {
    console.log(log)
}
printLog("OK 200")  // OK 200