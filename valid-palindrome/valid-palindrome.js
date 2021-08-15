/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let str = s.replace(/[^a-z0-9]/gi, '');
    var strReverse = str.split('').reverse().join('');
    
    return (str == strReverse);
};