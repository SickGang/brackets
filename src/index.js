module.exports = function check(str, bracketsConfig) {
    let lengthOfStr = str.length;

    while (lengthOfStr) {
        for (let item of bracketsConfig) {
            if (str.includes(item.join(""))) {
                str = str.replace(item.join(""), "");
            }
        }
        lengthOfStr--;
    }
    return !str.length;
};
