/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
        return false;
    }
    if (s === t) {
        return true;
    }
    const dictS = {};
    const dictT = {};
    
    for(let i = 0; i<s.length; i++){
        let charS = s[i]
        let charT = t[i]; 
        
        if(!dictT[charT]){
            dictT[charT] = charS
        }
        if(!dictS[charS]){
            dictS[charS] = charT
        }
        if( dictS[charS] !== charT || dictT[charT]!==charS){
            return false
        }
    }
    return true  
};