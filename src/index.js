module.exports = function check(str, bracketsConfig) {
    // your solution
    let bracketsPairs = [];
    bracketsPairs = bracketsConfig.map((arr) => arr[0] + arr[1]);
    let j = 0;
    let prev = 0;
    while (prev != str.length) {
        prev = str.length;
        for (let i = 0; i < bracketsPairs.length; i++) {
            str = str.replace(bracketsPairs[i], "");
        }
        if (str.length === 0) return true;
    }

    return false;
};
