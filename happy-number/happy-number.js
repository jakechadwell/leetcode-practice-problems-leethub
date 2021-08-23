/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = n.toString();
    var arr = [];
    
    while (n!='1'){
        var x = 0;
        arr = arr.concat(n);
        
        for(i=0;i<n.length;i++){
            x += parseInt(n[i])**2
        }
        
        n = x.toString();
        if (arr.includes(n)){
            return false;
        }
    }
    return true;
};