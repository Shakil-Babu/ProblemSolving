
 var maximumWealth = function(accounts) {
    return  accounts.map((item) => item.reduce((a,b) => a+b, 0)).sort((a,b) => b-a)[0]; 
};