/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxAmount = 0;
    let amount = 0;
    for (let x = 0 ; x < accounts.length; x++) {
        for (let y = 0 ; y < accounts[x].length; y++) {
            amount += accounts[x][y];
        }
        if (amount > maxAmount ) {
            maxAmount = amount;
        }
        amount = 0;
    }
    return maxAmount;
};