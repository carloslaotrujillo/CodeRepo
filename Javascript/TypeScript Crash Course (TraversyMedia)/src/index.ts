// TYPE ASSERTION (telling the compiler to treat an identity as a diff type)
let cid: any = 1
let customerId = cid as number
// let customerId = <number>cid (also valid)