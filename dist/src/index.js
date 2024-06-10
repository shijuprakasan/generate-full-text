"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildCombinationsFromArray = exports.BuildCombinations = exports.GenerateCombinations = exports.exclude_blank_regex2 = exports.exclude_emogis_regex = exports.MIN_LENGTH = void 0;
exports.MIN_LENGTH = 3;
exports.exclude_emogis_regex = /[\u{1F600}-\u{1F64F}]/u;
exports.exclude_blank_regex2 = /\s/;
class GenerateCombinations {
    constructor(minLength = exports.MIN_LENGTH, excludeRegEx = undefined) {
        this.excludeRegEx = [exports.exclude_emogis_regex, exports.exclude_blank_regex2];
        this.minLength = exports.MIN_LENGTH;
        this.minLength = minLength;
        if (excludeRegEx) {
            this.excludeRegEx = excludeRegEx;
        }
    }
    buildInternal(combinations, str) {
        for (let len = this.minLength; len <= str.length; len++) {
            for (let i = 0; i <= str.length - len; i++) {
                const combination = str.slice(i, i + len);
                if (this.excludeRegEx) {
                    var exclude = false;
                    for (let ri = 0; ri < this.excludeRegEx.length; ri++) {
                        if (this.excludeRegEx[ri].test(combination)) {
                            exclude = true;
                            break;
                        }
                    }
                    if (!exclude) {
                        combinations.add(combination);
                    }
                }
                else {
                    combinations.add(combination);
                }
            }
        }
    }
    build(str) {
        var combinations = new Set();
        this.buildInternal(combinations, str);
        return Array.from(combinations);
    }
    buildFromArray(strs) {
        var combinations = new Set();
        for (let si = 0; si < strs.length; si++) {
            var str = strs[si];
            this.buildInternal(combinations, str);
        }
        return Array.from(combinations);
    }
}
exports.GenerateCombinations = GenerateCombinations;
exports.BuildCombinations = new GenerateCombinations().build;
exports.BuildCombinationsFromArray = new GenerateCombinations().buildFromArray;
//# sourceMappingURL=index.js.map