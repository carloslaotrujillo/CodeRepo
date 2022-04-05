/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let startIndx = 0
    let endIndx = prices.length - 1
    let res = 0;

    while(startIndx < prices.length) {
        if(prices[endIndx] - prices[startIndx] < res) {
            endIndx--
        }
        if(prices[endIndx] - prices[startIndx] < res) {
            endIndx--
        }
        if(endIndx === startIndx) {
            startIndx++
            endIndx = prices.length - 1
        }
    }

    return res
};